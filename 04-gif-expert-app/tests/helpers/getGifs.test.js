import { string } from "prop-types";
import { getGifs } from "../../src/helpers/getGifs";


describe('Pruebas para el archivo getGifs', () => { 
    
    
    test('Debe de retornar un arreglo de gifs',  async() => { 
        
        const category = "Dragon Ball"

        const gifs = await getGifs(category);

   //     console.log(gifs);

        expect(gifs.length).toBeGreaterThan(0);

        expect(gifs[0]).toEqual({

            id: expect.any(String),
            title: expect.any(String),
            url: expect.any(String),
        });

     });
    
 });