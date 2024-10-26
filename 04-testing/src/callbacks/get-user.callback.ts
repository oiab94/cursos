import { UserCallback } from '../@types'
import { Users } from '../data'

const getUserById = (id: number, callback: UserCallback) => {
	// Buscamos el usuario por id
	const user = Users.find(user => user.id === id)

	// Si no encontramos el usuario
	return !user ? 
					callback('USER_NOT_FOUND', null) : 
					callback(null, user)
}

export {
	getUserById,
}
