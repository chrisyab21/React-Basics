import { render , screen} from "@testing-library/react";

import {TodoApp } from '../../src/08-useReducer/TodoApp';
import React from "react";
import * as useTodosModule from '../../src/Hooks/useTodos';


type Retorno = {

    state: Tipo1,
    AgregarTodo: (parametro:todo) => void,
    DeleteTodo: (parametro:todo) => void
    OnTogleTodo: (parametro:todo) => void,
    TodoCount: () => number,
    PendingTodoCount: () => number

}


type todo = {
    id: number,
    descripcion: string,
    done: boolean

    }

type Tipo1 = todo[];



jest.mock('../../src/Hooks/useTodos')

describe('Pruebas en el <TodoApp>', () => {
    
    test('Debe de mostrar el componente correctamente', () => { 

        (useTodosModule.useTodos as jest.Mock<Retorno>).mockReturnValue(
            {
                state: [
                    {
                    id: 1,
                    descripcion: 'Ver a la caro',
                    done: true
                    },
                    {
                        id: 1,
                        descripcion: 'Subir de ranked',
                        done: false
                    }
                ],
                AgregarTodo: jest.fn(),
                DeleteTodo: jest.fn(),
                OnTogleTodo: jest.fn(),
                TodoCount: jest.fn().mockReturnValue(2),
                PendingTodoCount: jest.fn().mockReturnValue(1)
        
            }      
        );

        
        render(<TodoApp/>);

        screen.debug();

        expect(screen.getByText('Ver a la caro')).toBeTruthy();

        expect(screen.getByText('Subir de ranked')).toBeTruthy();

        expect(screen.getByRole('textbox')).toBeTruthy();
        


    });


 });