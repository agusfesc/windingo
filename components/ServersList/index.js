import React from 'react'


const ServersList = ({servers = []}) => {
	return ( 
		<>
			{servers.map((server, index) =>{
				return(
					<div
						className="flex flex-col lg:flex-row lg:w-7/12 xl:w-7/12 xl:flex-row justify-center items-center w-11/12 h-32 rounded-md bg-indigo-500 "
						key={index}
					>
						<div className="flex flex-col p-2 lg:p-4 xl:p-4">
							<h3 className="text-sm font-extrabold text-white">{server.name}</h3>
							<p className="ml-1 text-sm text-indigo-200">Map: {server.map}</p>
							<p className="ml-1 text-sm text-indigo-200">Players: {`${server.currentplayers}/${server.maxplayers}`} </p>
						</div>
						<div className="flex p-2 lg:p-4 xl:p-4">
							<button className="w-32 h-8 text-sm font-extrabold text-white bg-blue-400 rounded-md hover:bg-blue-500" href="steam://connect/45.235.98.222:27015">Connect</button>
						</div>
					</div>
				)
			})}
		</>
	)
}
 
export default ServersList