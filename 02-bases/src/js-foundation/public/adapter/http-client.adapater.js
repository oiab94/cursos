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

// Aplicación de patrón adaptador para el cliente HTTP con axios
const axios = require('axios');

const httpAxiosAdapter = {
	get: async ( url ) => {
		try {
			const response = await axios.get( url );
			const data = response.data;	

			return data;
		}
		catch (error) {
			throw new Error('No se pudo obtener la información');
		}
	},

};

module.exports = {
	httpClientAdapter,
	httpAxiosAdapter,
}
