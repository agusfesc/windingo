import React, { useState, useEffect } from 'react';
import Head from 'next/head'
import Image from 'next/image'
import SocialMedia from '../components/SocialMedia'
import Section from '../components/Section';
import Spinner from '../components/Spinner';
import RequestService from '../services/RequestServices'
import List from '../components/List'

export default function Home() {
  const [viewHubPro, setViewHubPro] = useState(true)
  const [viewHubQualy, setViewHubQualy] = useState(false)
  const [showSpinner, setShowSpinner] = useState(false)
  const [collection, setCollection] = useState([])

  

  useEffect(() => {
    setShowSpinner(true)
    let id
    if(viewHubPro){
      id = process.env.NEXT_PUBLIC_ID_HUB_PRO
    } else {
      id = process.env.NEXT_PUBLIC_ID_HUB_QUALY
    }
    RequestService({ hubId: id, param: 'stats'})
    .then(response => response.json())
    .then(result =>{
      setShowSpinner(false)
      setCollection(result.players)
    })
    .catch(error =>{
      setShowSpinner(false)
      console.log("users: ", error)
    })
    
  }, [viewHubPro])
    
  return (
    <div>
      <div className="py-5 mx-auto" >
        <img src="logo.svg"  className=" h-1/4 w-1/4 mx-auto"/>
      </div>
      <SocialMedia />
      <div className="flex items-center space-x-3 mt-7 justify-center py-6">
        <Section title="HUB PRO" isActive={viewHubPro} handleOpen={setViewHubPro} handleClose={setViewHubQualy} />
        <Section title="HUB QUALY" isActive={viewHubQualy} handleOpen={setViewHubQualy} handleClose={setViewHubPro} />
      </div>
      <div>
        {showSpinner ? <Spinner isActive={showSpinner} /> : null}
        <List collection={collection} />
      </div>
     
     
    </div>
  )
}
