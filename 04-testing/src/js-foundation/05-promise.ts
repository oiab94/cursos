import { httpClientAdapter } from './public/http.adapter'

httpClientAdapter
	.get('https://pokeapi.co/api/v2/pokemon/2')
	.then( data => console.log( data ) )
	.catch( error => console.error( error ) );
