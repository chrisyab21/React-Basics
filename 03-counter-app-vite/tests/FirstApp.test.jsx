
import { render } from "@testing-library/react";
import { FirstApp } from "../src/FirstApp";



describe('Pruebas en <FirstApp/>', () => { 

    test('Debe hacer match con el snapshot', () => { 

        const title = 'Hola soy Goku'
        const {container} = render(<FirstApp title={title}></FirstApp>)
        
        expect(container).toMatchSnapshot();
     });
     
     
     test('Debe mostrar el titulo en un h1', () => { 
        const title = 'Hola soy Goku'
        const {container, getByText} = render(<FirstApp title={title}></FirstApp>)

       expect(getByText(title)).toBeTruthy();

       const h1 =  container.querySelector('h1');

       expect(h1.innerHTML).toContain(title);       
        });


     test('Debe mostrar el titulo en cualquier elemento Html', () => { 
            const title = 'Hola soy Goku'
            const {container, getByText, getByTestId} = render(<FirstApp title={title}></FirstApp>)
    
           expect(getByText(title)).toBeTruthy();
    
            expect(getByTestId('test-title').innerHTML).toContain(title);
      });


      test('Debe de mostrar el subtitulo enviado por props', () => { 

            const title = 'Hola soy Goku'
            const subtitle2 = 456;
            const {getAllByText} = render(
            <FirstApp title={title} subtitle2={subtitle2}>
                
            </FirstApp>)
    
            //expect(getByText(subtitle+1)).toBeTruthy();

            expect(getAllByText(subtitle2+1).length).toBe(1);

       });
 });
