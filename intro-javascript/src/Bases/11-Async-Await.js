
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