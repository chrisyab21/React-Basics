

import { render , screen} from "@testing-library/react";

import {MultipleCustomHooks} from '../../src/03-Examples/MultipleCustomHooks';
import React from "react";
import * as utils from "../../src/Hooks/useFetch";



describe('Pruebas en <MutipleCustomHooks>', () => { 

    test('Debe de mostrar el componente por defecto', () => { 


      const mockUseFetch = jest.spyOn(utils, 'useFetch');
      mockUseFetch.mockReturnValue({
        data: null,
        isLoading: true,
        hasError: null
      });

        render(<MultipleCustomHooks></MultipleCustomHooks>);

        expect(screen.getByText('Loading...'));

        expect(screen.getByText('Breaking Bad Frases34'));
        
        const button = screen.getByRole('button', { name: 'Next quote'}) as HTMLButtonElement;
           
        expect(button.disabled).toBeTruthy();
        screen.debug();

       console.log(button.disabled);

     });



    test('Debe de mostrar un Quote', () => { 
      
          const mockUseFetch = jest.spyOn(utils, 'useFetch');

          mockUseFetch.mockReturnValue({
            data: [{ quote: 'Hola soy german', author: 'German garmendia'}],
            isLoading: false,
            hasError: null
          });

          render(<MultipleCustomHooks></MultipleCustomHooks>);

          expect(screen.getByText('Breaking Bad Frases34'));
          
          const button = screen.getByRole('button', { name: 'Next quote'}) as HTMLButtonElement;
            
          expect(button.disabled).toBeFalsy();

          expect(screen.getByText('Hola soy german'));

          screen.debug();

          console.log(button.disabled);

      });

  });


 



        







