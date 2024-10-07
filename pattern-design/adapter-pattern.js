// Descripción: El patrón adaptador nos permite crear una capa intermedia que nos
// ayuda a agreagar funcionalidades a objetos que no la tiene sin modificar la 
// clase original. En este caso, creamos una clase FechaAdaptador que nos permite
// obtener la fecha en formato local y en formato de servidor.

class FechaAdaptador {
	constructor(fecha) { this.fecha = fecha; }

	obtenerDia() { return this.fecha.getDate(); }

	obtenerMes() { return this.fecha.getMonth() + 1; }

	obtenerAnio() { return this.fecha.getFullYear(); }
	
	obtenerFecha() { return this.fecha.toLocaleDateString(); }

	obtenerFechaServidor() {
		let dia = 
			this.fecha.getDate() < 10 ? '0' + this.fecha.getDate() 
																: this.fecha.getDate();
		let mes = 
			this.fecha.getMonth() + 1 < 10 ? '0' + (this.fecha.getMonth() + 1) 
																		 : this.fecha.getMonth() + 1;
		let anio = this.fecha.getFullYear();

		return `${anio}-${mes}-${dia}`;
	}
}




// EJECUCIÓN
const fecha = new Date();
const fechaAdaptador = new FechaAdaptador(fecha);

console.log('Hora Local: ' + fechaAdaptador.obtenerFecha());
console.log('Hora Servidor: ' + fechaAdaptador.obtenerFechaServidor());
