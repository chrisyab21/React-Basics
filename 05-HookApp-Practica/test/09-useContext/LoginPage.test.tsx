import { fireEvent, render, screen } from "@testing-library/react";
import {LoginPage} from '../../src/09-useContext/LoginPage'
import React, { useContext } from "react";
import { UserContext, ContextType} from "../../src/09-useContext/context/UserContext";


describe('Pruebas en <Login Page/>', () => {
    

    test('Debe de mostrar el componente sin el usuario', () => {
                
        render(
        
        <UserContext.Provider value={null}>
            <LoginPage></LoginPage>
        </UserContext.Provider>

        );
        
        const preTag = screen.getByLabelText('pre');    
            
        expect(preTag.innerHTML).toBe('');

        screen.debug();

    });
    

    test('Debe de llamar el setUser cuando se hace click en el boton', () => { 

        const setUserMock = jest.fn();

        const inicial:ContextType = {

            user: {
                id: 1,
                name: 'Gatote',
                email: 'gatorey@gmail.com'
        
            },
            setUser: setUserMock,       
        }
        
        render(
        
            <UserContext.Provider value={inicial}>
                <LoginPage></LoginPage>
            </UserContext.Provider>
    
            );

            const button = screen.getByRole('button');

            fireEvent.click(button);
            expect(setUserMock).toHaveBeenCalledTimes(1);
            expect(setUserMock).toHaveBeenCalledWith({email: "yoSoyunGuerreroSayayin!@gmail.com", id: 7, name: "Vegeta"});

    });

 });