// Importamos el módulo que exporta el template
//const templateExports = require('./js-foundation/01-template');

//require('./js-foundation/02-destructuring');

// 03-CALLBACKS
const { getUserById } = require('./js-foundation/03-callbacks');

const id = 1;

getUserById(id, function(error, user) {
	if ( error ) {
		throw new Error(error);
	} 

	console.log(user);
})
