

const nombre = 'Fernando';
const apellido = 'Herrera';



console.log(nombre + " "+ apellido);


const nombreCompleto = `${nombre} ${apellido}`;

const nombreCompletoconSaltos = 
`${nombre}
${apellido}`
;

console.log(nombreCompleto);
console.log(nombreCompletoconSaltos);



function getSaludo(nombre){

    return 'Hola '+ nombre;

}


console.log(`Este es un texto: ${getSaludo(nombreCompleto)}`)