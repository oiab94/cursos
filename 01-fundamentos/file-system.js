const fs = require('fs');

// Mostrar el texto original
const data = fs.readFileSync('README.md', {encoding: 'utf8'});
console.log(data);


// Reemplazar un texto
const newData = data.replace('prueba', 'cambio');
console.log(newData);
