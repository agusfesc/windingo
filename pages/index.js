import React, { useState, useEffect } from 'react'

import SocialMedia from '../components/SocialMedia'
import Section from '../components/Section'
import Spinner from '../components/Spinner'
import RequestService from '../services/RequestServices'
import LeaderboardList from '../components/LeaderboardList'
import Header from '../components/Header'

export default function Home() {
	const [leaderboard, setLeaderboard] = useState([])
	const [users, setUsers] = useState([])
	const [isLoading, setLoading] = useState(true)
	const [activeHub, setActiveHub] = useState(1)

	useEffect(() => {
		setLoading(true)
		let id = ''
		switch(activeHub){
		case 1:
			id = process.env.NEXT_PUBLIC_ID_LEADERBOARD_PRO
			break
		case 2:
			id = process.env.NEXT_PUBLIC_ID_LEADERBOARD_QUALY_A
			break
		case 3:
			id = process.env.NEXT_PUBLIC_ID_LEADERBOARD_QUALY_B
			break
		case 4:
			id = process.env.NEXT_PUBLIC_ID_LEADERBOARD_QUALY_C
			break
		}
		const resource = `leaderboards/${id}`
		RequestService({ param: resource})
			.then(response => response.json())
			.then(results =>{
				setLoading(false)
				setLeaderboard(results.leaderboard)
				setUsers(results.items)
			})
			.catch(error =>{
				console.log(error)
			})
	}, [activeHub])
    

	function getList(){
		while(isLoading){
			return <Spinner showSpinner={true} />
		}
		return <LeaderboardList leaderboard={leaderboard} users={users} activeHub={activeHub} />
	}

	return (
		<div>
			<Header active={1} />
			<SocialMedia />
			<div className="flex justify-center py-8 ">
				<Section title="HUB PRO" isActive={activeHub === 1 ? true : false} handleOpen={setActiveHub} value={1} />
				<Section title="HUB QUALY A" isActive={activeHub === 2 ? true : false} handleOpen={setActiveHub} value={2} />
				<Section title="HUB QUALY B" isActive={activeHub === 3 ? true : false} handleOpen={setActiveHub} value={3} />
				<Section title="HUB QUALY C" isActive={activeHub === 4 ? true : false} handleOpen={setActiveHub} value={4} />
			</div>
			<div>
				{getList()}
			</div>
		</div>
	)
}
