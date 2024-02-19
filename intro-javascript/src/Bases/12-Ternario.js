
const activo = true;


let mensaje ='';

if(activo){

  mensaje = 'Activo'

}else{

mensaje='Inactivo'

}
console.log(mensaje);


//Operador Ternario
const mensaje2 = (activo) ? 'Activo' : 'Inactivo'

console.log(mensaje2);

//Operador ternario pero que solo devuelve algo cuando es true, usando el operador logico AND(&&)
//Si la variable activo es TRUE entonces devuelve el texto Activo, pero si la primera condicion da false
//entonces devuelve un false y no evaluda la segunda condicion. Porque el operador AND(&&) devuelve un false
//cuando cualquiera de sus condiciones da false.
const mensaje3 = (activo) && 'Activo';

console.log(mensaje3);


