import { fireEvent, render, screen } from "@testing-library/react";
import { AddCategory } from "../../src/Componentes/addCategory";

describe('Pruebas en addCategory', () => {
    

    test('Debe de cambiar el valor de la caja de texto', () => {


            render(<AddCategory onAddCategory={() => {}}></AddCategory>)
        const input = screen.getByRole('textbox');

        fireEvent.input(input, {target: { value: 'Vegeta'}});
        
        expect(input.value).toBe('Vegeta');

        screen.debug();


     });



     test('Debe de llamar al OnNewCategory solo si el input tiene un valor', () => { 
        
        
     
        
        const inputValue = 'Vegeta';

        const  OnAddCategory = jest.fn();


        render(<AddCategory onAddCategory={OnAddCategory}></AddCategory>)

        const input = screen.getByRole('textbox');

        const form = screen.getByRole('form');

        fireEvent.input(input, {target: { value: inputValue }});

        fireEvent.submit(form);

        expect(input.value).toBe('');     
        
        expect(OnAddCategory).toBeCalledTimes(1);

        expect(OnAddCategory).toBeCalledWith(inputValue);

        
        });



        test('No debe de llamar el OnAddCategory si el input esta vacio', () => { 
            

            const onAddCategory = jest.fn();


            render(<AddCategory onAddCategory={onAddCategory}></AddCategory>);
            
            const input = screen.getByRole('textbox');

            const form = screen.getByRole('form');


            fireEvent.submit(form);

            expect(onAddCategory).toBeCalledTimes(0);


            
             });


        
             test('No debe de llamar el OnAddCategory si asdasd', () => { 
            
                
                const onAddCategory = jest.fn();               

                render(<AddCategory onAddCategory={onAddCategory}></AddCategory>);
                
                const input = screen.getByRole('textbox');
    
                const form = screen.getByRole('form');
    
    
                fireEvent.submit(form);
    
                expect(onAddCategory).toBeCalledTimes(0);
    
    
                
                 });





 });