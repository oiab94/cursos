interface User {
	id: number;
	name: string;
}

type UserCallback = ( error?: string | undefined, user?: User | undefined ) => void;




const users: User[] = [
	{ id: 1, name: 'John' },
	{ id: 2, name: 'Jane' },
	{ id: 3, name: 'Doe' },
];


const getUserById = (id: number, callback: UserCallback): void => {
	const user = users.find( user => user.id === id );

	return user ? callback( undefined, user ) : 
								callback( 'User not found', undefined );
}


getUserById(1, ( error, User ) => {
	if ( error) {
		console.log( error );
	} else {
		console.log( User );
	}
});
