import { fireEvent, render, screen } from "@testing-library/react";
import {TodoItem} from '../../src/08-useReducer/TodoItem'
import React from "react";

describe('Pruebas en <TodoItem/>', () => { 
    
    const todo = {
        id: 20,
        descripcion: 'Derrotar a cell perfecto',
        done: false
    }

    const mockfuncBorrar =  jest.fn();
    const mockfuncToggle =  jest.fn();

    beforeEach(()=>{

        jest.clearAllMocks();

    });

    test('Debe de mostrar el Todo Pendiente de completar', () => {
             

        render(<TodoItem todo={todo} funcBorrar={mockfuncBorrar}onTogleTodo={mockfuncToggle}/>);
        
        const listElement = screen.getByRole('listitem');
        
        expect(listElement.className).toBe('list-group-item d-flex justify-content-between');
        console.log(listElement.innerHTML);

        const spanElement = screen.getByLabelText('span');

        expect(spanElement.className).toBe('aling-self-center ');
        expect(spanElement.className).not.toContain('text-decoration-line-through');

       });

       
    test('Debe de mostrar el Todo completado', () => {
             
        todo.done = true;

        render(<TodoItem todo={todo} funcBorrar={mockfuncBorrar}onTogleTodo={mockfuncToggle}/>);

        const spanElement = screen.getByLabelText('span');
        expect(spanElement.className).toContain('text-decoration-line-through');

       });


             
    test('El span debe llamar al Toggle Todo cuando se hace click', () => {
             

        render(<TodoItem todo={todo} funcBorrar={mockfuncBorrar}onTogleTodo={mockfuncToggle}/>);

        const spanElement = screen.getByLabelText('span');

        fireEvent.click(spanElement);

        expect(mockfuncToggle).toHaveBeenCalledWith(todo);

        expect(spanElement.className).toContain('text-decoration-line-through');

       });



       test('El button debe llamar al deleteTodo', () => {
             

        render(<TodoItem todo={todo} funcBorrar={mockfuncBorrar}onTogleTodo={mockfuncToggle}/>);

        const deleteButton = screen.getByRole('button', { name: 'Borrar'});

        fireEvent.click(deleteButton);

        expect(mockfuncBorrar).toHaveBeenCalledTimes(1);
        expect(mockfuncBorrar).toHaveBeenCalledWith(todo);

       });


       

 });