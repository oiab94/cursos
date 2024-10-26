const buildMakePerson = (getUUID: Function, getAge: Function) => {
	return ( name: string, birthdate: string ) => {
		return {
			id: getUUID(),
			name,
			birthdate,
			age: getAge( birthdate ),
		}
	}
}

export {
	buildMakePerson,
}
