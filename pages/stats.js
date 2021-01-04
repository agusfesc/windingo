import React, {useState, useEffect} from 'react'

import SocialMedia from '../components/SocialMedia'
import Section from '../components/Section'
import Spinner from '../components/Spinner'
import RequestService from '../services/RequestServices'
import StatsList from '../components/StatsList'
import Header from '../components/Header'

const Stats = () => {
	const [collection, setCollection] = useState([])
	const [isLoading, setLoading] = useState(true)
	const [activeHub, setActiveHub] = useState(1)
  

	useEffect(() => {
		setLoading(true)
		let id = ''
		switch(activeHub){
		case 1:
			id = process.env.NEXT_PUBLIC_ID_HUB_PRO
			break
		case 2:
			id = process.env.NEXT_PUBLIC_ID_HUB_QUALY_A
			break
		case 3:
			id = process.env.NEXT_PUBLIC_ID_HUB_QUALY_B
			break
		case 4:
			id = process.env.NEXT_PUBLIC_ID_HUB_QUALY_C
			break
		}
		const resource = `hubs/${id}/stats`
		RequestService({ param: resource})
			.then(response => response.json())
			.then(result =>{
				setLoading(false)
				setCollection(result.players)
			})
			.catch(error =>{
				console.log(error)
			})
    
	}, [activeHub,])

	function getList(){
		while(isLoading){
			return <Spinner showSpinner={true} />
		}
		return <StatsList collection={collection} />
	}

	return ( 
		<div>
			<Header active={2} />
			<SocialMedia />
			<div className="flex items-center space-x-3 mt-7 justify-center py-6">
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
 
export default Stats