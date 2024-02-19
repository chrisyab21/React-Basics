

//Funciones

//Primera forma de crear funciones(No recomendada)
//No se la recomienda debido a que al llamarla JavaScript 
//puede confundirla con el nombre de una variable del mismo nombre.
function saludar(nombre){

return `Hola ${nombre}`;
}


//Segunda forma de crear funciones(Recomendada)
//Se asgina la funcion a una constante de esta forma
//al ser llamada javaScrip no se puede confundir y
//no permite que se cree otra variable con el mismo nombre
const Saludar2 = function(nombre){

    return `Hola ${nombre}`; 
}


//Tercera forma, Funciones Lamda
//Otra sintaxis simplemente
const Saludar3 = (nombre) => {

    return `Hola ${nombre}`; 
}


//Cuarta forma, Funciones Lamda
//Sirven para cuando una funcion solo tiene una linea de codigo
//y esta es un return
const Saludar4 = (nombre) => `Hola ${nombre}`; 


console.log(Saludar2('Goku'));
console.log(Saludar3('Broly'));
console.log(Saludar4('Vegeta'));


//Esta es una funcion lamda que recibe parametros y retorna un objeto
//con dos propiedades
const getUser = (nombre) => ({
    uid: 'Abcde',
    userName: nombre
})

const User = getUser('Chris21');

console.log(User);




