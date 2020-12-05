import React from 'react'


const Section = ({title, handleOpen, handleClose, isActive, }) => {
  
  const buttonActive = "px-3 border-b-2 border-blue-500 transition delay-100 duration-300 text-white pb-1.5 w-2/6 text-center cursor-pointer"
  const buttonDisable = "px-3 border-b-2 border-transparent transition delay-100 duration-300 text-white pb-1.5 w-2/6 text-center cursor-pointer"
  
  return ( 
    <a 
    className={isActive ? buttonActive : buttonDisable}
    onClick={ () => {
      handleOpen(true)
      handleClose(false)
    }} 
    >
      {title}
    </a>
   );
}
 
export default Section;