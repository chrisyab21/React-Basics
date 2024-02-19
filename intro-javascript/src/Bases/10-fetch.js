

const apikey = 'HVoHbv8C8iXNnCl8ypKS6RKZHa4u49XM';


const peticion = fetch(`https://api.giphy.com/v1/gifs/random?api_key=${apikey}`);


peticion.then((resp)=>{

  console.log(resp);
}).catch((error)=>{
  console.warn(error);
});


const peticion2 = fetch(`https://api.giphy.com/v1/gifs/random?api_key=${apikey}`);


peticion2.then((resp)=>{
   return resp.json(); 
  }).then((data)=>{
  const{url} = data.data.images.original


  const img = document.createElement('img');

  img.src = url;

  document.body.append(img);
  
    console.log(url)
}).catch( console.warn);