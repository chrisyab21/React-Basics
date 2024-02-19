

import { screen, render, fireEvent } from "@testing-library/react";
import { CounterApp } from "../src/CounterApp";

describe('Pruebas en counter App', () => { 
    
    const initialValue = 2016;


    test('Debe hacer match con el snapshot', () => { 

     
      const {container} =  render(<CounterApp value={initialValue}></CounterApp>);

        expect(container).toMatchSnapshot();

     });



   test('Debe mostrar el valor inicial de 2016', () => { 


    render(<CounterApp value={initialValue}></CounterApp>)

    expect(screen.getByText(initialValue).innerHTML).toBe("2016");

    });



    test('Debe de incrementar con el boton +1', () => { 

        render(<CounterApp value={initialValue}></CounterApp>);

        fireEvent.click(screen.getByText('+1'));

        expect(screen.getByText('Contador: 2017').innerHTML).toBeTruthy();
       
     });


     test('Debe de decrementar con el boton +1', () => { 

        render(<CounterApp value={initialValue}></CounterApp>);

        fireEvent.click(screen.getByText('-1'));
        screen.debug();

        expect(screen.getByText('Contador: 2015').innerHTML).toBeTruthy();
       
     });

     test('Debe de funcionar el boton de reset', () => { 

        render(<CounterApp value={initialValue}></CounterApp>);
        fireEvent.click(screen.getByText('+1'));
        fireEvent.click(screen.getByText('+1'));
        fireEvent.click(screen.getByText('+1'));
        screen.debug();
        fireEvent.click(screen.getByText('Reset'));
        
        screen.debug();
        expect(screen.getByText('Contador: 2016')).toBeTruthy();

        //Segunda forma de extraer el boton del screen usando el getbyRole
        //y la propiedad aria-label
       fireEvent.click(screen.getByRole("button", { name:'btn-reset'}));
       expect(screen.getByText('Contador: 2016')).toBeTruthy();

     });
        
        
        
});