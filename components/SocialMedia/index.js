import React from 'react'


const SocialMedia = () => {
  return ( 
    <div className="mx-auto w-8/12 lg:w-6/12 flex flex-row justify-around my-2.5">
      <a target="_blank" href="https://twitter.com/WindingoLeague" className="w-4/12 md:w-2/12 ">
        <img src="twitter.svg" className="mx-3.5 md:mx-2.5 cursor-pointer" />
      </a>
      <a target="_blank" href="https://www.instagram.com/windingoproleague/" className="w-4/12 md:w-2/12 " >
        <img src="instagram.svg" className="mx-3.5 md:mx-2.5 cursor-pointer" />
      </a>
      <a target="_blank" href="https://www.youtube.com/channel/UCmDZBLRzMNRRsl7u8TyCVdw" className="w-4/12 md:w-2/12 " >
        <img src="youtube.svg" className="mx-3.5 md:mx-2.5 cursor-pointer" />
      </a>
      <a target="_blank" href="https://twitter.com/WindingoLeague" className="w-4/12 md:w-2/12" >
        <img src="discord.svg" className="mx-3.5 md:mx-2.5 cursor-pointer" />
      </a>
  </div>
   );
}
 
export default SocialMedia;