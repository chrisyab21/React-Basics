
import { render, screen } from "@testing-library/react";
import { FirstApp } from "../src/FirstApp";



describe('Pruebas en <FirstApp/>', () => { 


    test('Debe hacer match con el snapshot', () => { 

      const title= 'Hola soy goku';

      const  { container} = render(<FirstApp title={title}></FirstApp>);
    
        expect(container).toMatchSnapshot();

     });

     test('Debe de mostrar el mensaje "Hola soy goku"', () => { 

        const title='Hola soy goku';
        const  { container} = render(<FirstApp title={title}></FirstApp>);

        expect(screen.getByText(title).innerHTML).toBe('Hola soy goku ');
      });

      test('Debe de mostrar el titulo en un h1', () => {

        const title='Hola soy Goku';
        render(<FirstApp></FirstApp>);

        expect(screen.getByRole("heading",{level:1}))



        expect(screen.getByText('Hola soy Goku').innerHTML).toContain(title);

      });




      test('Debe mostrar el subtitulo enviado por props', () => { 


        const subtitle = 'Kimi Monogatari';
        const subtitle2 = 455;

        render(<FirstApp subtitle={subtitle} subtitle2={subtitle2}></FirstApp>);

        expect(screen.getAllByText(subtitle).length).toBe(1);

        expect(screen.getAllByText(subtitle2+1).length).toBe(1);



       });
   
 });
