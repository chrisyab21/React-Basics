
import { render, screen } from '@testing-library/react';
import {rutas} from '../../src/Utils/routes'
import React from 'react';
import {RouterProvider, createMemoryRouter, MemoryRouter} from 'react-router-dom';

describe('Pruebas en el <MainApp/>', () => { 
    
    test('Debe de mostrar el HomePage', () => {

        //especificando ruta a activar
        const router = createMemoryRouter(rutas,{ initialEntries: ['/']});
        
 
            render(          
            <RouterProvider router={router}></RouterProvider>
            )
            
            screen.debug();

            expect(screen.getByText('HomePage')).toBeTruthy();
            expect(screen.getByText('Home')).toBeTruthy();
     });



     test('Debe de mostrar el LoginPage', () => {

        //especificando ruta a activar
        const router = createMemoryRouter(rutas,{ initialEntries: ['/login']});
        
            render(       
                <RouterProvider router={router}></RouterProvider>
            )
            
            screen.debug();

            expect(screen.getByText('LoginPage')).toBeTruthy();

     });



 });