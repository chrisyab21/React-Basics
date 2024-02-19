


const persona= {

    nombre: 'Tony',
    apellido: 'Stark',
    edad: 45,
    direccion: {

        ciudad: 'New York',
        zip: 553434,
        latitud: 40404.21,
        longitud:2134.34,

    }
}

//Esta igualacion esta mal, porque no compia los valores del objeto persona
//sino que copia la referencia en memoria donde apunta la constante persona
//y hace que PersonaX apunte a la misma referencia en memoria
//osea que ambas variables apuntan al mismo objeto en memoria.
const PersonaX = persona;

//Los 3 puntos sirven para clonar las propiedades de un objeto dentro de otro
const persona2 = {...persona}
persona2.nombre = 'Peter';


console.table(persona)

//Creacion de un objeto con una propiedad persona que apunta al objeto persona.
console.log({persona:persona})

console.log(persona2.nombre)

