// Una factory function es una función que retorna un objeto. Es una forma de 
// crear y retornar objetos de una manera más controlada y customizada. Si 
// tenemos una lógica que se repite en la creación de objetos con la misma 
// lógica, podemos escribir nuestra lógica en una función y usar esa función 
// como una fabrica de objetos.


// Factory Function: Crear una Persona
const makePerson = ({ name, age }) => {
	return {
		getName: () => name,
		getAge: () => age,
		greet: () => `Hola, min nombre es ${name} y tengo ${age} años.`,
	};
}


// EJECUCIÓN
const person = makePerson({ name: 'John', age: 30 });
const person2 = makePerson({ name: 'Jane', age: 25 });

console.log(person.greet());
console.log(person2.greet());
