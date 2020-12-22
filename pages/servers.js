import React, { useEffect, useState, } from 'react'

import Spinner from '../components/Spinner'
import Header from '../components/Header'
import ServersList from '../components/ServersList'

const CSGO = require('csgo-api') // Import the npm package.



const Servers = () => {
	const [serversData, setServersData] = useState([])
	const [isLoading, setLoading] = useState(true)
	const servidores = ['45.235.98.244:27030', '45.235.98.252:27015', '45.235.98.243:27051', '45.235.98.222:27015',]
	
	useEffect(() => {
		getServers()
		console.log('serversData', serversData)
	}, [])
  

	function getServers(){
		let x = 0
		while(x < servidores.length){
			const [ip, port] = servidores[x].split(':')
			const srv = new CSGO.Server(ip, port)
			const server = {}
			srv.getServerName().then(data => server.name = data)
			srv.getMap().then(data => server.map = data)
			srv.getPlayerCount().then(data => server.currentplayers = data)
			srv.getMaxPlayers().then(data => server.maxplayers = data)
			server.url = `steam://connect/${servidores[x]}`
			const backupData = serversData
			setServersData([...backupData, server])
			x++
		}
	}

	return ( 
		<div>
			<Header active={4} />
		</div>
	)
}
 
export default Servers