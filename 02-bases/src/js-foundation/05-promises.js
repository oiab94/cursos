// Promesa en cadena para obtener un pokemon por su id
const getPokemonById = ( id ) => {
	let url = `https://pokeapi.co/api/v2/pokemon/${ id }`;

	return fetch( url )
		.then( response  => response .json())
		.then( pokemon => pokemon )
}


// EJECUCIÓN
getPokemonById( 1 )
	.then( pokemon => console.log(pokemon))
	.catch( error => console.error(`Error: ${ error } no se pudo obtener el pokemon`))
	.finally( () => console.log('Proceso finalizado'));
