/* eslint-disable react/prop-types */
import React from 'react'

import Header from '../components/Header'
import ServersList from '../components/ServersList'



const Servers = ({servers}) => {
	return ( 
		<div>
			<Header active={3} />
			<ServersList servers={servers} />
		</div>
	)
}

export async function getStaticProps() {
	const res = await fetch('https://windingo-api.herokuapp.com/')
	const servers = await res.json()

	return {
		props: {
			servers,
		},
		revalidate: 60, 
	}
}
 
export default Servers