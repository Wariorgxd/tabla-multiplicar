const { crearArchivo } = require('./helpers/multiplicar.js');
const argv = require('./config/yargs.js');
const colors = require('colors');

console.clear();
console.log(argv);

crearArchivo(argv.b, argv.l, argv.h)
    .then(nombreArchivo => console.log(`${nombreArchivo} creado`.rainbow))
    .catch(err => console.log(err));