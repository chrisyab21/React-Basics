import { string } from "prop-types";
import { getImage, getImageError } from "../../src/Bases/11-Async-Await";


describe('Pruebas en 11-Async-Await', () => { 


    test('getImagen debe de retonar un Url de la imagen', async() => {
        

      const url = await getImage();
       
        console.log(url);

        expect(typeof url).toBe('string');
      
    });

    
    test('getImagen debe de retonar un error si el Api key esta mal', async() => {
        

        const respuesta = await getImageError();      
  
         expect(respuesta).toBe('No se encontro la imagen');
        
      });
 });