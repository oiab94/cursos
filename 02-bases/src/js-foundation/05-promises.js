// Promesa en cadena para obtener un pokemon por su id
const getPokemonById = ( id ) => {
	let url = `https://pokeapi.co/api/v2/pokemon/${ id }`;

	return fetch( url )
		.then( response  => response .json())
		.then( pokemon => pokemon )
}


// Promesa utilizando async y await
const getPokemonByIdAsync = async ( id ) => {
	try {
		const url = `https://pokeapi.co/api/v2/pokemon/${ id }`;
		const response = await fetch( url );
		const pokemon = await response.json();

		return pokemon;
	} catch (error) {
		throw new Error('No se pudo obtener el pokemon');
	}
}


// EJECUCIÓN
getPokemonByIdAsync( 1 )
	.then( pokemon => console.log(pokemon))
	.catch( error => console.error(`${ error }`))
	.finally( () => console.log('Proceso finalizado'));
