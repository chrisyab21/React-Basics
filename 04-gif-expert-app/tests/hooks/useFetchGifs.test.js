import { renderHook, waitFor } from "@testing-library/react";
import { useFetchGifs } from "../../src/hooks/useFetchGifs";


describe('Pruebas en el hook useFecthGifs', () => { 

    test('Debe de regresar el estado inicial del hook', () => {  

     const category = 'Naruto'

     const {result} =   renderHook(() => useFetchGifs(category) );

     const {Images, isLoading} = result.current

     
     expect(Images.length).toBe(0);
    
     expect(isLoading).toBeTruthy();

          //  console.log(p)

    });


    test('Debe de retornar un arreglo de imagenes y el isLoading en false', async() => { 

            const category = 'One Piece'

            const {result} = renderHook(() => useFetchGifs(category));

            await waitFor(

                () => expect(result.current.Images.length).toBeGreaterThan(0),
              
                {

                    timeout: 4000,
                

                }

            );
       
       
           const{Images, isLoading} = result.current;


           expect(Images.length).toBeGreaterThan(0);
    
           expect(isLoading).toBeFalsy();
      



     });

 });