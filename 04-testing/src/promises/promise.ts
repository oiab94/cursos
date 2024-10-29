const getPokemonById = async ( id: number ) => {
	try {
		let url = `https://pokeapi.co/api/v2/pokemon/${ id }`;

		return fetch( url )
						.then( response => response.json() )
						.then( pokemon => pokemon ) 
	} catch ( error ) {
		console.error( error )
	}
}


