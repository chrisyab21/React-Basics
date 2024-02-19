
import {FC} from 'react';
 import { TodoList } from './todoList';
import { TodoForm } from './TodoForm';
import { useTodos } from '../Hooks/useTodos';


type todo = {
    id: number,
    descripcion: string,
    done: boolean

    }



export const TodoApp:FC = () =>{


       const{state, AgregarTodo, DeleteTodo, OnTogleTodo, TodoCount, PendingTodoCount} = useTodos();
    
        return (


            <>
                <h1>Numero de Todos: {TodoCount()}<small>  Pendientes: {PendingTodoCount()}</small>
                </h1>
                <hr></hr>


                <div className="row">

                        <div className="col-7">

                              <TodoList 
                              state={state} 
                              FuncBorrar={(todo) => DeleteTodo(todo)}
                              onTogleTodo={(todo) => OnTogleTodo(todo)}
                              
                              ></TodoList>
                             {/* <TodoList state={first}></TodoList> */}
                        </div>
                    

                        <div className="col-5">

                            <h4>Agregar TODO</h4>
                            <hr></hr>

                        <TodoForm FuncionAgregar={(todo:todo)=> AgregarTodo(todo)}></TodoForm>

                        </div>

                 </div>


          



            </>
        )

}