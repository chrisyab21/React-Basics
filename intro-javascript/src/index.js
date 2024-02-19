
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




const getImage = async()=>{


  try {
    
    const apikey = 'HVoHbv8C8iXNnCl8ypKS6RKZHa4u49XM';


    const respuesta = await fetch(`https://api.giphy.com/v1/gifs/random?api_key=${apikey}`);
    
    const {data} = await respuesta.json();
    
    
    const {url} = data.images.original
    console.log(url);
    
    const img =  document.createElement('img');
    
    img.src = url;
    
    document.body.append(img);
    

  } catch (error) {

    console.error('Hubo un error', error);
    
  }

}

getImage();
