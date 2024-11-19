type getUUID = () => string;
type getAge = (birthdate: string) => number;
type PersonMaker = (name: string, birthdate: string) => Person;


interface Person {
	id: string;
	name: string;
	birthdate: string;
	age: number;
}


const buildMakePerson = ( getUUID: getUUID, getAge: getAge ): PersonMaker => { 
	return (name: string, birthdate: string) => {
		return {
			id: getUUID(),
			name,
			birthdate,
			age: getAge(birthdate),
		}
	}
};


export {
	buildMakePerson,
}
