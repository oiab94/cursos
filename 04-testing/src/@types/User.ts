interface User { 
	id: number;
	name: string;
}

type UserCallback = ( error?: string | null, user?: User | null ) => void;

export {
	User,
	UserCallback,
}
