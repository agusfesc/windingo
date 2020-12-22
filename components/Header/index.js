import React from 'react'
import Link from 'next/link'

import Logo from '../../public/logo.svg'

// eslint-disable-next-line react/prop-types
const Header = ({active}) => {

	const buttonActived = 'text-white text-xs sm:text-sm md:text-base font-medium'
	const buttonDisabled = 'text-white text-xs sm:text-sm md:text-base text-opacity-70'

	return ( 
		<div className="flex flex-row justify-between sticky top-0 w-full h-14 bg-app-jet rounded-b-xl shadow-sm">
			<div className="flex flex-row items-center justify-between mr-8">
				<Logo className="w-1/6 h-2/6 md:w-1/6 md:h-4/6" />
				<Link href="/">
					<a className={active === 1 ? buttonActived : buttonDisabled} >Inicio</a>
				</Link>
				<Link href="/stats">
					<a className={active === 2 ? buttonActived : buttonDisabled} >Estadisticas</a>
				</Link>
				<Link href="/contact">
					<a className={active === 3 ? buttonActived : buttonDisabled} >Contacto</a>
				</Link>
				<Link href="/servers">
					<a className={active === 4 ? buttonActived : buttonDisabled} >Servers</a>
				</Link>
			</div>
			<div className="flex flex-row items-center justify-between space-x-8 mr-3">
				<a target="_blank" rel="noreferrer" href="https://twitter.com/WindingoLeague" className="w-5 h-5 md:w-8 md:h-8">
					<img src="twitter.svg" className="cursor-pointer" />
				</a>
				<a target="_blank" rel="noreferrer" href="https://www.instagram.com/windingoproleague/" className="w-5 h-5 md:w-8 md:h-8" >
					<img src="instagram.svg" className="cursor-pointer" />
				</a>
				<a target="_blank" rel="noreferrer" href="https://www.youtube.com/channel/UCmDZBLRzMNRRsl7u8TyCVdw" className="w-5 h-5 md:w-8 md:h-8" >
					<img src="youtube.svg" className="cursor-pointer" />
				</a>
			</div>
		</div>
	)
}
 
export default Header