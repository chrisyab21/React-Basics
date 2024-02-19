


 // Desestructuración de arreglos

const personajes  = ['Goku', 'Vegeta', 'Gohan']
console.log(personajes[0])


// Asignacion desestructurante por posicion 
//Ignoramos las dos primeras posiciones del arreglo pero guardamos 
//la tercera posicion en una constante llamada p3
const[,,p3] = personajes;
console.log(p3)



const retornArreglo = () => {

  return ['ABC',123];

}

const[letras,numeros] = retornArreglo();

console.log(letras,numeros);


const usarState = (valor) =>{

  return [valor, () => {console.log('Hola Mundo')}];
}

const arr = usarState('Harry');
console.log(arr);

//Llamando a la funcion dentro del arreglo
arr[1]();




//Tarea1.
//1. El primer valor de arr se debe llamar nombre
//2. El segundo valor de arr debe llamarse SetNombre

const [nombre, setNombre] = arr;

console.log(nombre);
setNombre();