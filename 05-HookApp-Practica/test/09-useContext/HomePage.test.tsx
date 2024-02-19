import { render , screen} from "@testing-library/react";
import {HomePage} from '../../src/09-useContext/HomePage'
import React from "react";
import { UserContext, ContextType } from "../../src/09-useContext/context/UserContext";

describe('Pruebas en el <HomePage />', () => {

    const inicial:ContextType = {

        user: {
            id: 1,
            name: 'Gatote',
            email: 'gatorey@gmail.com'
    
        },
        setUser: () => {}
    
    }
    

        test('Debe de mostrar el componente con el valor del contexto por defecto', () => {

            render(         
                <HomePage></HomePage>
            );

            screen.debug();
            

            expect(screen.getByText('Marco'));


        });


         test('Debe de mostrar el componente sin el usuario', () => {

            render(
            
            <UserContext.Provider value={null}>
                <HomePage></HomePage>
            </UserContext.Provider>
            );

            const preTag = screen.getByLabelText('pre');    
            
            expect(preTag.innerHTML).toBe('');
            screen.debug(); 

         });


         test('Debe de mostrar el componente con el usuario', () => {

            render(
            
            <UserContext.Provider value={inicial}>
                <HomePage></HomePage>
            </UserContext.Provider>
            );

            const preTag = screen.getByLabelText('pre');    
            console.log(preTag.innerHTML);
            expect(preTag.innerHTML).toContain(inicial.user.name);
            expect(preTag.innerHTML).toContain(inicial.user.id.toString());
            //screen.debug(); 

         });




 })