import React from 'react'
import Head from 'next/head'


const MainLayout = ({children}) => {
  return ( 
    <div>
      <Head>
        <title>Windingo League</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <div className="bg-gray-700 w-full">
        <div className="max-w-screen-md min-h-screen h-full  mx-auto pb-6 bg-gray-700" >
          {children}
        </div>
        <h4 className="text-indigo-500 text-center py-4"> Windingo League &copy; </h4>
      </div>
    </div>
   );
}
 
export default MainLayout;