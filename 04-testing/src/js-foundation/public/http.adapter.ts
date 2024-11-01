interface HttpClient {
	get: ( url: string ) => Promise<any>;
	post?: ( url: string ) => void;
}

const httpClientAdapter: HttpClient = {
	get: async ( url: string ) => {
		try {
			const response = await fetch( url );
			const data = await response.json();
			
			return data;
		} catch ( error ) {
			throw new Error( 'Error fetching data' );
		}
	},
}

export {
	httpClientAdapter,
}
