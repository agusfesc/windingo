import React, {useState} from 'react'
import Alert from '../Alert'


const ServersList = ({servers = []}) => {
	const [show, setShow] = useState(false)

	const openInNewTab = (url) => {
		const newWindow = window.open(url, '_blank', 'noopener,noreferrer')
		if (newWindow) newWindow.opener = null
	}
  
	const copyToClipboard = ({ip}) =>{
		navigator.clipboard.writeText(`connect ${ip}`)
		setShow(true)
		const timeId = setTimeout(() => {
			setShow(false)
		}, 3000)
		return () => {
			clearTimeout(timeId)
		}
	}
  
	return ( 
		<>
			{show ? <Alert message='IP COPIADA' /> : null}
			<div className="flex flex-col lg:flex-row flex-wrap content-center justify-between">
				{servers.map((server, index) =>{
					return(
						<div
							className="flex flex-row w-9/12 lg:w-5/12 justify-between items-center h-32 my-6 mx-3 rounded-md bg-indigo-500"
							key={index}
						>
							<div className="flex flex-col m-1 p-2">
								<h3 className="text-xxs lg:text-sm font-semibold text-app-white break-all">{server.name}</h3>
								<p className="ml-1 my-0.5 text-xxs lg:text-xs text-indigo-200">Map: {server.map}</p>
								<p className="ml-1 my-0.5 text-xxs lg:text-xs text-indigo-200">Players: {`${server.player_count}/${server.max_players}`} </p>
								<div className="flex flex-row cursor-pointer" onClick={() => copyToClipboard({ip: server.ip}) }> 
									<p className="ml-1 my-0.5 text-xxs lg:text-xs text-indigo-200" >IP: {`${server.ip}`} </p>
									<a  className="w-5 h-5 ml-2">
										<img src="copy.svg" className="cursor-pointer" />
									</a>
								</div>
							</div>
							<div className="flex p-2 ">
								<button className="w-14 h-6 lg:w-14 lg:h-8 text-xs lg:text-xs font-semibold text-white bg-blue-400 rounded-md hover:bg-blue-500" onClick={() => {openInNewTab(`steam://connect/${server.ip}`)}} >Connect</button>
							</div>
						</div>
					)
				})}
			</div>
		</>
	)
}
 
export default ServersList