import React, {useState, useEffect} from 'react'

import SocialMedia from '../components/SocialMedia'
import Section from '../components/Section'
import Spinner from '../components/Spinner'
import RequestService from '../services/RequestServices'
import StatsList from '../components/StatsList'
import Header from '../components/Header'

const Stats = () => {

  const [viewHubPro, setViewHubPro] = useState(true)
  const [viewHubQualy, setViewHubQualy] = useState(false)
  const [collection, setCollection] = useState([])
    const [isLoading, setLoading] = useState(true)
  

  useEffect(() => {
    let id = ''
    if(viewHubPro){
      id = process.env.NEXT_PUBLIC_ID_HUB_PRO
    } else {
      id = process.env.NEXT_PUBLIC_ID_HUB_QUALY
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
    
  }, [viewHubPro])

  function getList(){
    while(isLoading){
      return <Spinner showSpinner={true} />
    }
    return <StatsList collection={collection} />
  }

  return ( 
    <div>
      <div className="py-5 mx-auto" >
        <img src="logo.svg"  className=" h-1/4 w-1/4 mx-auto"/>
      </div>
      <SocialMedia />
      <Header active={2} />
      <div className="flex items-center space-x-3 mt-7 justify-center py-6">
        <Section title="HUB PRO" isActive={viewHubPro} handleOpen={setViewHubPro} handleClose={setViewHubQualy} />
        <Section title="HUB QUALY" isActive={viewHubQualy} handleOpen={setViewHubQualy} handleClose={setViewHubPro} />
      </div>
      <div>
        {getList()}
      </div>
  </div>
   );
}
 
export default Stats;