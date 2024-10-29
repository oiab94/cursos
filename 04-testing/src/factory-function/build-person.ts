const buildMakePerson = (getUUID: () => string, getAge: (birthdate: string) => number) => {
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
