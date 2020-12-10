import React from 'react'


const SocialMedia = () => {
  return ( 
    <div>
      <div className=" container mx-auto ">
        <h1 className="text-indigo-500 text-center my-2" >Powered By</h1>
        <a target="_blank" href="https://waxpeer.com/">
          <img src="waxpeer.svg" className="w-6/12 mx-auto my-5"/>
        </a>
      </div>
      <div className="mx-auto w-6/12 flex flex-row justify-around my-2.5">
        <a target="_blank" href="https://twitter.com/WindingoLeague" className="w-4/12 md:w-2/12 ">
          <img src="twitter.svg" className="mx-3 md:mx-2.5 cursor-pointer" />
        </a>
        <a target="_blank" href="https://www.instagram.com/windingoproleague/" className="w-4/12 md:w-2/12 " >
          <img src="instagram.svg" className="mx-3 md:mx-2.5 cursor-pointer" />
        </a>
        <a target="_blank" href="https://www.youtube.com/channel/UCmDZBLRzMNRRsl7u8TyCVdw" className="w-4/12 md:w-2/12 " >
          <img src="youtube.svg" className="mx-3 md:mx-2.5 cursor-pointer" />
        </a>
      </div>
    </div>
   );
}
 
export default SocialMedia;