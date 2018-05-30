//requireds

const argv = require('./config/yargs').argv;
const colors = require('colors');



const { crearArchivo } = require('./multiplicar/multiplicar.js')
const { listarTabla } = require('./multiplicar/multiplicar.js')

let comando = argv._[0];

switch (comando) {
    case 'listar':
        listarTabla(argv.base, argv.limite)
            .then(archivo => console.log(`Tabla del ${argv.base} limitada a ${argv.limite}`))
            .catch(e => console.log(e));
        break;
    case 'crear':
        crearArchivo(argv.base, argv.limite)
            .then(archivo => console.log(`Archivo creado ${ archivo.green}`))
            .catch(e => console.log(e));
        break;

    default:
        console.log('comando no reconocido');
        break;
}

// let argv2 = process.argv;
// console.log(argv);
// console.log(argv2);

// let param = argv[2];
// let base = param.split('=')[1];