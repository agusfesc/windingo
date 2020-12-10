import React, { useState, useEffect } from 'react'

import SocialMedia from '../components/SocialMedia'
import Section from '../components/Section'
import Spinner from '../components/Spinner'
import RequestService from '../services/RequestServices'
import LeaderboardList from '../components/LeaderboardList'
import Header from '../components/Header'

export default function Home() {
  const [viewHubPro, setViewHubPro] = useState(true)
  const [viewHubQualy, setViewHubQualy] = useState(false)
  const [viewHubMedium, setViewHubMedium] = useState(false)

  const [leaderboard, setLeaderboard] = useState([])
  const [users, setUsers] = useState([])
  const [isLoading, setLoading] = useState(true)

  useEffect(() => {
    setLoading(true)
    let id = ''
    if(viewHubPro){
      id = process.env.NEXT_PUBLIC_ID_LEADERBOARD_PRO
    } else if (viewHubMedium) {
      id = process.env.NEXT_PUBLIC_ID_LEADERBOARD_MEDIUM
    } else if(viewHubQualy) {
      id = process.env.NEXT_PUBLIC_ID_LEADERBOARD_QUALY
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
  }, [viewHubPro, viewHubMedium, viewHubQualy])
    

  function getList(){
    while(isLoading){
      return <Spinner showSpinner={true} />
    }
    return <LeaderboardList leaderboard={leaderboard} users={users} hubs={{viewHubPro, viewHubQualy, viewHubMedium}} />
  }

  return (
    <div>
      <div className="py-5 mx-auto" >
        <img src="logo.svg"  className=" h-1/4 w-1/4 mx-auto"/>
      </div>
      <SocialMedia />
      <Header active={1} />
      <div className="flex items-center space-x-3 mt-7 justify-center py-6">
        <Section title="HUB PRO" isActive={viewHubPro} handleOpen={setViewHubPro} handleClose={setViewHubQualy} handleCloseTwo={setViewHubMedium} />
        <Section title="HUB QUALY A" isActive={viewHubMedium} handleOpen={setViewHubMedium} handleClose={setViewHubPro} handleCloseTwo={setViewHubQualy} />
        <Section title="HUB QUALY B" isActive={viewHubQualy} handleOpen={setViewHubQualy} handleClose={setViewHubPro} handleCloseTwo={setViewHubMedium} />
      </div>
      <div>
        {getList()}
      </div>
    </div>
  )
}
