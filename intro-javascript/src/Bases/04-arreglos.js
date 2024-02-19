

//Forma de crear arreglo 1(No recomendada)
const arreglo = new Array(100);

//Forma de crear arreglo 2(Recomendada)
const arreglo2 = [];
arreglo2.push(1)
arreglo2.push(2)
arreglo2.push(3)
arreglo2.push(4)

//Forma de crear arreglo 3 con datos iniciales(Recomendada)
const arreglo3 = [1,2,3,4];

//Con el metodo spread (los 3 puntos) 
//copiamos los valores del arreglo2 y le aumentamos el 5
let arreglo4 = [...arreglo2,5]

//El metodo map viene en todos los arreglos y sirve para crear un nuevo
//arreglo a partir de uno ya existente pero modificando sus elementos
//mediante el uso de una funcion (callback)
let arreglo5 = arreglo4.map(function DuplicarNumeros(numero){

return numero*2;
})

console.log(arreglo2)
console.log(arreglo4)
console.log(arreglo5)