import React from 'react'
import Head from 'next/head'


// eslint-disable-next-line react/prop-types
const MainLayout = ({children}) => {
	return ( 
		<div>
			<Head>
				<title>Windingo League</title>
				<meta name="viewport" content="initial-scale=1.0, width=device-width" />
				<link rel="icon" href="/favicon.ico"/>
			</Head>
			<div className="bg-app-onyx w-full">
				<div className="max-w-screen-md min-h-screen h-full  mx-auto pb-6 bg-app-onyx" >
					{children}
				</div>
				<h4 className="text-app-melon font-semibold text-center py-4"> Windingo League &copy; </h4>
			</div>
		</div>
	)
}
 
export default MainLayout