import { fireEvent, render, screen } from "@testing-library/react";
import { MultipleCustomHooks } from '../../src/03-Examples/MultipleCustomHooks';
import React from "react";
import * as useFetchModule from "../../src/Hooks/useFetch";

import * as useCounterModule  from "../../src/Hooks/useCounter";


type Retorno = {

  counter: number,
  incrementar: (parametro?:number)=> void,
  decrementar: (parametro?:number)=> void,
  reset: ()=> void
}

type Data = {

  author: string,
  quote: string 
   

}

type Datos = {

   data: null | Array<Data>,
   isLoading: boolean,
   hasError: null,
}


jest.mock("../../src/Hooks/useFetch");

jest.mock("../../src/Hooks/useCounter");



describe('Pruebas en <MutipleCustomHooks>', () => {

  const mockIncrement = jest.fn();

  (useCounterModule.useCounter as jest.Mock<Retorno>).mockReturnValue(
    {
      counter: 1,
      incrementar: mockIncrement,
      decrementar: jest.fn(),
      reset: jest.fn()
    }
  )

  beforeEach(() => {
    jest.clearAllMocks();
  });


  test('Debe mostrar el componente por defecto', () => {
    
    (useFetchModule.useFetch as jest.Mock<Datos>).mockReturnValue({
      data:null,
      isLoading: true,
      hasError: null
    });

    render(<MultipleCustomHooks/>);

    expect(screen.getByText('Loading...'));
    expect(screen.getByText('Breaking Bad Frases34'));

    const button = screen.getByRole('button', { name: 'Next quote' }) as HTMLButtonElement;
    expect(button.disabled).toBeTruthy();
    // Verificar las llamadas a la función simulada
    expect(useFetchModule.useFetch).toHaveBeenCalledTimes(1);

    screen.debug();
  });



  test('Debe de mostrar un Quote', () => {

    (useFetchModule.useFetch as jest.Mock<Datos>).mockReturnValue({
      data:[ { author: "Yo soy un gueerro Sayayin!", quote: "Vegeta" }],
      isLoading: false,
      hasError: null
    });

    render(<MultipleCustomHooks/>);

    expect(screen.getByText('Breaking Bad Frases34'));

    const button = screen.getByRole('button', { name: 'Next quote' }) as HTMLButtonElement;
    
    expect(screen.getByText('Vegeta'));

    expect(button.disabled).toBeFalsy();

    expect(useFetchModule.useFetch).toHaveBeenCalledTimes(1);

    screen.debug();

  });


  test('Debe de llamar a la funcion incrementar', () => { 


    render(<MultipleCustomHooks/>)
    
    const button = screen.getByRole('button', {name: 'Next quote'}) as HTMLButtonElement;

    fireEvent.click(button);

    expect(mockIncrement).toHaveBeenCalledTimes(1);

  });



});
 




/*

    jest.mock("../../src/Hooks/useFetch", () => ({
      useFetch: jest.fn().mockReturnValue({
        data: [{ quote: 'Hola soy german', author: 'German garmendia'}],
        isLoading: false,
        hasError: null
      })
    }));

*/


        
/*
    const mockIncrement = jest.fn();

    const mockCounter = jest.mock("../../src/Hooks/useCounter", () => ({

        useCounter: jest.fn<Retorno, []>().mockReturnValue({
          counter: 1,
          incrementar: mockIncrement,
          decrementar: jest.fn(),
          reset: jest.fn()
        }),    
    }));
      
 */




