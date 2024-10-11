// Aplicación de patrón adaptador para el cliente HTTP
const httpClientAdapter = {
	get: async ( url ) => {
		try {
			const response = await fetch( url );
			const data = await response.json();

			return data;
		} catch (error) {
			throw new Error('No se pudo obtener la información');
		}
	},

	post: async ( url, data ) => { }, 

	put: async ( url, data ) => { }, 

}

module.exports = {
	httpClientAdapter,
}
