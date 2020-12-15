import React from 'react'
import Link from 'next/link'

// eslint-disable-next-line react/prop-types
const Header = ({active}) => {

	const buttonActived = 'text-white hover:bg-gray-800 hover:text-gray-200 w-4/12 md:w-1/5 text-center text-lg md:text-xl cursor-pointer rounded-lg font-normal '
	const buttonDisabled = 'text-white hover:bg-gray-800 hover:text-gray-200 w-4/12 md:w-1/5 text-center text-sm md:text-lg cursor-pointer rounded-lg font-normal '

	return ( 
		<div className="flex justify-center py-8 space-x-6 md:space-x-14">
 
			<Link href="/">
				<a className={active === 1 ? buttonActived : buttonDisabled} >Inicio</a>
			</Link>

			<Link href="/stats">
				<a className={active === 2 ? buttonActived : buttonDisabled} >Estadisticas</a>
			</Link>

			<Link href="/contact">
				<a className={active === 3 ? buttonActived : buttonDisabled} >Contacto</a>
			</Link>
		</div>
	)
}
 
export default Header