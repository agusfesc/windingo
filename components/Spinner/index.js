import React from 'react'


// eslint-disable-next-line react/prop-types
const Spinner = ({showSpinner}) => {
	return ( 
		<>
			{showSpinner ?
				<div className="fixed top-0 right-0 h-screen w-screen flex justify-center items-center">
					<div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-white"></div>
				</div>
				: null}
		</>
	)
}
 
export default Spinner