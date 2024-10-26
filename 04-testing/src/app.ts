import { UserCallback } from './@types'
import { getUserById } from './callbacks';
import { buildMakePerson } from './factory-function';
import { getUUIDPlugin, getAgePlugin } from './public/plugins'

/**
 * FACTORY FUNCTION
 * Prueba de la función buildMakePerson
 */
const makePerson = buildMakePerson(getUUIDPlugin, getAgePlugin)
const obj = {name: 'John Doe', birthdate: '1990-01-01'}
const person: {name: string, birthdate: string} = {  }


/**
 * Prueba de la función getUserById
 */
const callback: UserCallback = (error, user) => {
	error ? 
		console.error(`[ERROR]: ${error}`) :
		console.log(user)
}


getUserById(10, callback)
