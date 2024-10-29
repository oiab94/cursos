interface httpClientAdapterInterface {
	get: ( url: string ) => Promise<any>;
	post?: ( url: string, body: any ) => Promise<any>;
	put?: ( url: string, body: any ) => Promise<any>;
}

const httpClientAdapter: httpClientAdapterInterface = {
	get: async ( url: string ): Promise<Response> => {
		try {
			let response = await fetch( url )
			let data = await response.json()

			return data
		} catch ( error: any) {
			throw new Error( error )
		}
	}	
}

export {
	httpClientAdapter,
	httpClientAdapterInterface,
}
