import getAge from 'get-age'

const getAgePlugin = ( birthday: string ) => {
	return getAge( birthday )
}

export {
	getAgePlugin,
}
