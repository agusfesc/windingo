import React from 'react'

const LeaderboardList = ({leaderboard = [], users = [], viewHubPro,}) => {
  const hubProPrizePool = ['175 USD', '125 USD', '100 USD', '50 USD', '50 USD', '25 USD', '25 USD', '25 USD', '25 USD', '25 USD',]
  const hubQualyPrizePool = ["Ascend", "Ascend"]
  return ( 
    <div>
      <h1 className="text-center text-gray-100"> {leaderboard['leaderboard_name']} </h1>
      <table className="w-10/12 my-8 text-center mx-auto">
        <thead>
          <tr className="text-gray-400">
            <th className="font-normal px-1 pt-0 pb-3 border-b border-gray-100 ">Nick</th>
            <th className="font-normal px-1 pt-0 pb-3 border-b border-gray-100 ">Points</th>
            <th className="font-normal px-1 pt-0 pb-3 border-b border-gray-100 ">Matches Won </th>
            <th className="font-normal px-1 pt-0 pb-3 border-b border-gray-100 ">Lost Matches</th>
            <th className="font-normal px-1 pt-0 pb-3 border-b border-gray-100 ">Prize</th>
          </tr>
        </thead>
        <tbody className="text-gray-50">
          {users.map((user, index) =>{
            let prizePool
            if(viewHubPro){
              prizePool = hubProPrizePool
            } else{
              prizePool = hubQualyPrizePool
            }
            return(
              <tr key={user.user_id} >
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
   );
}
 
export default LeaderboardList;