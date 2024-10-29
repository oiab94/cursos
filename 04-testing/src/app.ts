import { UserCallback } from './@types'
import { getUserById } from './callbacks';
import { buildMakePerson } from './factory-function';
import { getUUIDPlugin, getAgePlugin } from './public/plugins'
import { httpClientAdapter } from './adapter'

/**
 * PROMISES
 */
console.log('promises')
const getPokemonById = async (id: number) => {
	try {
		let url = `https://pokeapi.co/api/v2/pokemon/${ id }`;
		let pokemon = await httpClientAdapter.get( url );

		console.log(pokemon)
	} catch(error: any) {
		console.error(error)	
	}
}
getPokemonById(2)


/**
 * FACTORY FUNCTION
 * Prueba de la función buildMakePerson
 */
console.log('factory-function')
const makePerson = buildMakePerson(getUUIDPlugin, getAgePlugin)
const obj = {name: 'John Doe', birthdate: '1990-01-01'}
const johnDoe = makePerson(obj.name, obj.birthdate)

console.log(johnDoe)


/**
 * Prueba de la función getUserById
 */
console.log('getUserById')
const callback: UserCallback = (error, user) => {
	error ? 
		console.error(`[ERROR]: ${error}`) :
		console.log(user)
}


getUserById(10, callback)
