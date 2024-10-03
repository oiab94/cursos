const users = [
	{ id: 1, name: 'John' },
	{ id: 2, name: 'Jane' }
]


// Función que recibe un id y un callback
function getUserById(id, callback) {
	// Buscamos el usuario por id en el array
	const user = users.find( function(user) {
		return user.id === id;
	});

	// Si no encontramos el usuario
	if ( !user ) {
		return callback(`USER NOT FOUND`);
	}
	
	// Si encontramos el usuario
	return callback(null, user);
}


// Exportamos la función
module.exports = {
	getUserById,
}
