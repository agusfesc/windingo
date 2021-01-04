import React from 'react'


// eslint-disable-next-line react/prop-types
const Section = ({title, handleOpen, value, isActive,}) => {
  
	const buttonActive = 'px-3 border-b-2 border-blue-500 transition delay-100 duration-300 text-white text-xxs md:text-base break-words pb-1.5 w-3/12 md:w-1/5 text-center cursor-pointer '
	const buttonDisable = 'px-3 border-b-2 border-transparent transition delay-100 duration-300 text-white text-xxs md:text-base break-words pb-1.5 w-3/12 md:w-1/5 text-center cursor-pointer'
  
	return ( 
		<a 
			className={isActive ? buttonActive : buttonDisable}
			onClick={ () => {
				handleOpen(value)
			}} 
		>
			{title}
		</a>
	)
}
 
export default Section