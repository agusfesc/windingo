import React from 'react'


// eslint-disable-next-line react/prop-types
const Spinner = ({showSpinner}) => {
	return ( 
		<>
			{showSpinner ?
				<div className="flex items-center justify-center min-h-screen p-2 min-w-screen">
					<div className="flex space-x-2 animate-pulse">
						<div className="w-3 h-3 bg-app-white rounded-full"></div>
						<div className="w-3 h-3 bg-app-white rounded-full"></div>
						<div className="w-3 h-3 bg-app-white rounded-full"></div>
					</div>
				</div>
				: null}
		</>
	)
}
 
export default Spinner