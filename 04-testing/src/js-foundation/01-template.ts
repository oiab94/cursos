interface UserEmail {
	name: string;
	email: string;
}


const emailTemplate = ( {name, email}: UserEmail ) => {
	return `
		<h1>Hi ${name}</h1>
		<p>Your email is ${email}</p>
	`;
};

export {
	emailTemplate,
};
