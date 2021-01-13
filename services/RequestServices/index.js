const baseURL = process.env.NEXT_PUBLIC_FACEIT_URL

function RequestService ({ param }) {
	var myHeaders = new Headers()
	myHeaders.append('Authorization', `Bearer ${process.env.NEXT_PUBLIC_FACEIT_KEY}`)

	var requestOptions = {
		method: 'GET',
		headers: myHeaders,
		redirect: 'follow'
	}

	return fetch(`${baseURL}${param}`, requestOptions)
  
}

export default RequestService
