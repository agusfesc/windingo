import React from 'react'

const StatsList = ({collection = [], }) => {
  return (
    <table className="w-10/12 my-8 text-center mx-auto">
      <thead>
        <tr className="text-gray-400">
          <th className="font-normal px-1 pt-0 pb-3 border-b border-gray-100 ">Nick</th>
          <th className="font-normal px-1 pt-0 pb-3 border-b border-gray-100 ">K/D Ratio</th>
          <th className="font-normal px-1 pt-0 pb-3 border-b border-gray-100 ">Win Rate</th>
          <th className="font-normal px-1 pt-0 pb-3 border-b border-gray-100 ">Wins</th>
          <th className="font-normal px-1 pt-0 pb-3 border-b border-gray-100 ">Matches Played</th>
        </tr>
      </thead>
      <tbody className="text-gray-50">
        {collection.map(user =>{
          return(
            <tr key={user.player_id}>
              <td className="sm:p-3 py-2 px-1 border-b border-gray-500 text-sm md:text-lg"> {user['nickname']} </td>
              <td className="sm:p-3 py-2 px-1 border-b border-gray-500 text-sm md:text-lg "> {user.stats['Average K/R Ratio']} </td>
              <td className="sm:p-3 py-2 px-1 border-b border-gray-500 text-sm md:text-lg "> {user.stats['Win Rate %']}%</td>
              <td className="sm:p-3 py-2 px-1 border-b border-gray-500 text-sm md:text-lg "> {user.stats['Wins']} </td>
              <td className="sm:p-3 py-2 px-1 border-b border-gray-500 text-sm md:text-lg "> {user.stats['Matches']} </td>
            </tr>
          )
        })}
      </tbody>
    </table>
   );
}
 
export default StatsList;