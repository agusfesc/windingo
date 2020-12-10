import React from 'react'


const Section = ({title, handleOpen, handleClose, handleCloseTwo, isActive,}) => {
  
  const buttonActive = "px-3 border-b-2 border-blue-500 transition delay-100 duration-300 text-white text-xs md:text-base break-words pb-1.5 w-4/12 md:w-1/5 text-center cursor-pointer"
  const buttonDisable = "px-3 border-b-2 border-transparent transition delay-100 duration-300 text-white text-xs md:text-base break-words  pb-1.5 w-4/12 md:w-1/5 text-center cursor-pointer"
  
  return ( 
    <a 
    className={isActive ? buttonActive : buttonDisable}
    onClick={ () => {
      handleOpen(true)
      handleClose(false)
      handleCloseTwo(false)
    }} 
    >
      {title}
    </a>
   );
}
 
export default Section;