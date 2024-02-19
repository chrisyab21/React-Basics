
export const getImage = async()=>{


  try {
    
    const apikey = 'HVoHbv8C8iXNnCl8ypKS6RKZHa4u49XM';


    const respuesta = await fetch(`https://api.giphy.com/v1/gifs/random?api_key=${apikey}`);
    
    const {data} = await respuesta.json();
    
    
    const {url} = data.images.original
    console.log(url);
    
    return url;

  } catch (error) {

   console.error('Hubo un error', error);

    return 'No se encontro la imagen';
    
  }

}


export const getImageError = async()=>{


  try {
    //api key no funciona por si acaso
    const apikey = 'HVoHbv8C8iXNnCl8ypKS6RK56756ZHa4u49XM';


    const respuesta = await fetch(`https://api.giphy.com/v1/gifs/random?api_key=${apikey}`);
    
    const {data} = await respuesta.json();
    
    
    const {url} = data.images.original
    console.log(url);
    
    return url;

  } catch (error) {

    //console.error('Hubo un error', error);

    return 'No se encontro la imagen';
    
  }

} 
