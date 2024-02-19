import { render, screen } from "@testing-library/react";
import { GifGrid } from "../../src/Componentes/GifGrid";

import {useFetchGifs} from "../../src/hooks/useFetchGifs"

jest.mock('../../src/hooks/useFetchGifs');


describe('Pruebas en GifGrid', () => { 


    test('Debe de mostrar el loading inicialmente', () => { 
        
        
        useFetchGifs.mockReturnValue({
           
            Images: [],
            isLoading: true

        });

        const category = 'Dragon Ball';

        render(<GifGrid category={category}></GifGrid>);

        screen.debug();
        expect(screen.getAllByText('Cargando...').length).toBe(1);

        expect(screen.getByText(category));


     });


     test('Debe de mostrar items cuando se cargan las imagenes mediante el useFetchGifs', () => { 
        
        const category = 'Dragon Ball';

        const gifs = [
            {
                title: 'Dragon Ball Z',
                id: 2023,
                url: 'https://localhost/goku.jpg' 
            },
            {
                title: 'Super Sayayin 4',
                id: 2023,
                url: 'https://localhost/gokuSs4.jpg' 
             }   
         ]

        useFetchGifs.mockReturnValue({
           
            Images: gifs,
            isLoading: false

        });

        
        render(<GifGrid category={category}></GifGrid>);

        screen.debug();


        expect(screen.getAllByRole('img').length).toBe(2);
        expect(screen.getByText(category));
        expect(screen.getAllByRole('img')[0].src).toEqual('https://localhost/goku.jpg');
        
        });










 });