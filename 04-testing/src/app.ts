import { UserCallback } from './@types'
import { getUserById } from './callbacks';

/**
 * Prueba de la función getUserById
 */
const callback: UserCallback = (error, user) => {
	error ? 
		console.error(`[ERROR]: ${error}`) :
		console.log(user)
}


getUserById(10, callback)
