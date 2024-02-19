


import  { useEffect, useState } from 'react'
import { getGifs } from '../helpers/getGifs';

 export const useFetchGifs = (category) => {

    const [Images, setImages] = useState([]);
    const [isLoading, setIsLoading] = useState(true);  

    console.log({Images});
   
   
     const getImages = async() => {
   
       const newImages = await getGifs(category);
        

     

       setTimeout(function(){

        setImages(newImages);
        setIsLoading(false);
    }, 1000);
       
   
   
     }
   
       
   useEffect( ()=>{
   
     getImages();
   
   }, [])

   
  return (
    {
        Images: Images,
        isLoading: isLoading


        /*
        Sintaxis mas simple cuando una propiedad tiene el mismo nombre que su valor       
 
        Images,
        isLoading

        */

    }
  )
}
