import React from 'react'

import SocialMedia from '../components/SocialMedia'
import Header from '../components/Header'

const Contact = () => {


  return ( 
    <div>
      <div className="py-5 mx-auto" >
        <img src="logo.svg"  className=" h-1/4 w-1/4 mx-auto"/>
      </div>
      <SocialMedia />
      <Header active={3} />
      <div className="flex flex-col items-center text-lg">
        <p className="text-center m-6 text-white">
          For make a report, please complete this form
        </p>
        <a target="_blank" href="https://forms.gle/cmKSYsViHo9aRgse8" 
        className="w-6/12 object-center flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 m-6"
        >
          REPORT FORM
          </a>
      </div>
  </div>
   );
}
 
export default Contact;