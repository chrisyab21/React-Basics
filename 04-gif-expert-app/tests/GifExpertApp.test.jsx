import { fireEvent, render, screen } from "@testing-library/react";
import { GifExpertApp } from "../src/GifExpertApp";


describe('Pruebas en el component GifExpertApp', () => { 

    test('Verificar que si añada una categoria y luego limpie el input', () => { 


            const category = 'Dragon Ball Gt'

           const {container} = render(<GifExpertApp></GifExpertApp>)


            expect(container).toMatchSnapshot();


            const input = screen.getByRole('textbox');

            const form = screen.getByRole('form');

         

            fireEvent.input(input, { target: { value: category}});

            expect(input.value).toBe(category);

            fireEvent.submit(form);
           
            expect(screen.getAllByRole("heading", {level:3}).length).toBe(2);
            expect(input.value).toBe('');

            screen.debug();

     });


        test('Verificar que si el input esta en blanco NO añada una categoria', () => { 


            const category = ''

            render(<GifExpertApp></GifExpertApp>)

            const input = screen.getByRole('textbox');
            const form = screen.getByRole('form'); 

            fireEvent.input(input, { target: { value: category}});

            fireEvent.submit(form);

            expect(screen.getAllByRole("heading", {level:3}).length).toBe(1);

            screen.debug();

    });



    
    test('Verificar que No añada categorias repetidas', () => { 


        const category = 'Dragon Ball'

        render(<GifExpertApp></GifExpertApp>)

        const input = screen.getByRole('textbox');
        const form = screen.getByRole('form'); 

        fireEvent.input(input, { target: { value: category}});

        fireEvent.submit(form);

        fireEvent.input(input, { target: { value: category}});

        fireEvent.submit(form);

        expect(screen.getAllByRole("heading", {level:3}).length).toBe(2);

        screen.debug();

});


 });