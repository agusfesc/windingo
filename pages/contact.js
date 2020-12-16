import React from 'react'

import SocialMedia from '../components/SocialMedia'
import Header from '../components/Header'

const Contact = () => {


	return ( 
		<div>
			<Header active={3} />
			<SocialMedia />
			<div className="flex flex-col items-center text-lg">
				<p className="text-center m-6 text-white">
          Para hacer un reporte, por favor rellene el siguiente formulario
				</p>
				<a target="_blank" rel="noreferrer" href="https://forms.gle/cmKSYsViHo9aRgse8" 
					className="w-6/12 object-center flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 m-6"
				>
          FORMULARIO DE REPORTES
				</a>
			</div>
			<div className="flex flex-col items-center text-lg">
				<p className="text-center m-6 text-white">
          Para hacer una recomendacion, por favor rellene el siguiente formulario
				</p>
				<a target="_blank" rel="noreferrer" href="https://forms.gle/kUyxphnqiZPKfb4x6" 
					className="w-6/12 object-center flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 m-6"
				>
          FORMULARIO DE RECOMENDACIONES
				</a>
			</div>
		</div>
	)
}
 
export default Contact