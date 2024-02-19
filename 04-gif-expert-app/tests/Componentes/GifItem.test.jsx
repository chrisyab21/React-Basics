

import { screen, render, fireEvent, getByText } from "@testing-library/react";
import { GifItem } from "../../src/Componentes/GifItem";

describe('Pruebas en GifItem', () => {
    

    test('Debe hacer match con el snapshot', () => {


        const title =  'Goku gafass';
        const url = 'https://media.giphy.com/media/125cxELHOpsLra/giphy.gif'
        const {container} = render(<GifItem title={title} url={url}></GifItem>);

        expect(container).toMatchSnapshot();
     });


     test('Debe contener una imagen con titulo y url solo una vez', () => { 

        const title =  'Goku gafass';
        const url = 'https://media.giphy.com/media/125cxELHOpsLra/giphy.gif'
         render(<GifItem title={title} url={url}></GifItem>);

        console.log(screen.debug());

        expect(screen.getAllByText(title).length).toBe(1);
        expect(screen.getAllByRole("img").length).toBe(1);
        
        });

        
     test('Debe mostrar la imagen con el URL y el ALT indicados', () => { 

        const title =  'Goku gafass';
        const url = 'https://media.giphy.com/media/125cxELHOpsLra/giphy.gif'
         render(<GifItem title={title} url={url}></GifItem>);

        console.log(screen.debug());
        
        expect(screen.getByRole('img').src).toBe(url);
        expect(screen.getByRole('img').alt).toBe(title);
        
        });



        


 });