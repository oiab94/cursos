// Factory Function
const buildMakePerson = ({ getUUID, getAge }) => {
	return ({ name, birthdate }) => {
		return {
			id: getUUID(),
			name,
			birthdate,
			age: getAge(birthdate),
		};
	};
}



// EJECUCIÓN
// Dependencias
const { getAge, getUUID } = require('./public/plugins');


const makePerson = buildMakePerson({ getUUID, getAge });

const obj = { name: 'John', birthdate: '1994-08-13'};
const john = makePerson( obj );

console.log({ john });
