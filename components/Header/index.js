import React from 'react'
import Link from 'next/link'

const Header = ({active}) => {

  const buttonActived ="bg-gray-500 text-white hover:bg-gray-800 hover:text-gray-200 px-8 py-2 rounded-md text-sm md:text-md font-medium"
  const buttonDisabled = "bg-gray-900 text-white hover:bg-gray-800 hover:text-gray-200 px-8 py-2 rounded-md text-sm md:text-md font-medium"


  return ( 
    <div className="mx-auto m-12">
      <ul className="flex flex-row justify-center space-x-10">
        <li >
          <Link href="/">
            <a className={active === 1 ? buttonActived : buttonDisabled} >Inicio</a>
          </Link>
        </li>
        <li>
          <Link href="/stats">
            <a className={active === 2 ? buttonActived : buttonDisabled} >Estadisticas</a>
          </Link>
        </li>
        <li>
          <Link href="/contact">
            <a className={active === 3 ? buttonActived : buttonDisabled} >Reportes</a>
          </Link>
        </li>
      </ul>
    </div>
   );
}
 
export default Header;