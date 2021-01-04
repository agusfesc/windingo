import React from 'react'

// eslint-disable-next-line react/prop-types
const LeaderboardList = ({leaderboard = [], users = [], hubs,}) => {
	const hubProPrizePool = ['175 USD', '125 USD', '100 USD', '50 USD', '50 USD', '25 USD', '25 USD', '25 USD', '25 USD', '25 USD',]
	const hubQualyAPrizePool = ['Asciende',]
	const hubQualyBPrizePool = ['Asciende',]
	const hubQualyCPrizePool = ['Asciende', 'Asciende']
	// eslint-disable-next-line react/prop-types
	const { viewHubPro, viewHubQualy, viewHubMedium } = hubs
  


	const openInNewTab = (url) => {
		const newWindow = window.open(url, '_blank', 'noopener,noreferrer')
		if (newWindow) newWindow.opener = null
	}

	return ( 
		<div>
			<h1 className="text-center font-semibold text-gray-100 py-2"> {leaderboard['leaderboard_name']} </h1>
			<table className="w-10/12 my-8 text-center mx-auto">
				<thead>
					<tr className="text-gray-400">
						<th className="font-normal px-1 pt-0 pb-3 border-b border-gray-100 ">Nick</th>
						<th className="font-normal px-1 pt-0 pb-3 border-b border-gray-100 ">Puntos</th>
						<th className="font-normal px-1 pt-0 pb-3 border-b border-gray-100 ">Partidas Ganadas</th>
						<th className="font-normal px-1 pt-0 pb-3 border-b border-gray-100 ">Partidas Perdidas</th>
						<th className="font-normal px-1 pt-0 pb-3 border-b border-gray-100 ">Premios</th>
					</tr>
				</thead>
				<tbody className="text-gray-50">
					{users.map((user, index) =>{
						let prizePool
						if(viewHubPro){
							prizePool = hubProPrizePool
						} else if (viewHubMedium) {
							prizePool = hubQualyAPrizePool
						} else {
							prizePool = hubQualyBPrizePool
						}
            
						return(
							<tr key={index} onClick={() => {openInNewTab(`https://www.faceit.com/es/players/${user.player['nickname']}`)}} className="cursor-pointer hover:bg-gray-600" >
								<td className="sm:p-3 py-2 px-1 border-b border-gray-500 text-sm md:text-lg"> {user.player['nickname']} </td>
								<td className="sm:p-3 py-2 px-1 border-b border-gray-500 text-sm md:text-lg "> {user['points']} </td>
								<td className="sm:p-3 py-2 px-1 border-b border-gray-500 text-sm md:text-lg "> {user['won']}</td>
								<td className="sm:p-3 py-2 px-1 border-b border-gray-500 text-sm md:text-lg "> {user['lost']} </td>
								<td className="sm:p-3 py-2 px-1 border-b border-gray-500 font-semibold text-md bg-gradient-to-bl from-black to-gray-900"> 
									{prizePool[index] === undefined ? '-' : prizePool[index]} 
								</td>
							</tr>
						)
					})}
				</tbody>
			</table>
		</div>
	)
}
 
export default LeaderboardList