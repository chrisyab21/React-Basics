


 // Desestructuración de objetos
// Asignacion destructurante
const persona = {
    nombre: 'Christian',
    edad: 24,
    clave: 'Ironman',
    rango: 'Capitan'
  };
   
  const { nombre:nombre2, edad, clave } = persona;
   
  console.log(nombre2);
  console.log(edad);
  console.log(clave);
   
  //Desestructuracion del parametro que se le pase a la funcion
  const usarContext = ({nombre, edad, clave, rango}) => {
   
    console.log(nombre, edad, clave, rango);
   
  };

  usarContext(persona)



//Segunda forma
  const usarContext2 = ({nombre, edad, clave, rango}) => {
   
    console.log(nombre, edad, clave, rango);
   
    return {
      nombreClave: clave,
      anios: edad,
      lating: {
        lat: 14.1232,
        lng: -12.1232
      }
    }
   
  };


  const persona2 = {
    nombre: 'Alejandro',
    edad: 30,
    clave: 'SuperMan',
    rango: 'Omega'
  };
   
//Desestruturacion de lo que devuelve la funcion UsarContext2
  const { nombreClave, anios, lating } = usarContext2( persona2 );

//Desestructuracion de la constante lating.
  const {lat:latitud} = lating

  console.log(nombreClave, anios);
  console.log( lating )
  console.log( latitud )



