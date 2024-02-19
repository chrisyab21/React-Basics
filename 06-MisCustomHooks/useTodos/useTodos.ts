


import {useEffect, useReducer} from 'react'
import { todoReducer } from './todoReducerV2'



type todo = {
    id: number,
    descripcion: string,
    done: boolean

    }

type Tipo1 = todo[];


type Retorno = {

    state: Tipo1,
    AgregarTodo: (parametro:todo) => void,
    DeleteTodo: (parametro:todo) => void
    OnTogleTodo: (parametro:todo) => void,
    TodoCount: () => number,
    PendingTodoCount: () => number

}


const initialState:Tipo1= [

    {
        id: new Date().getTime(),
        descripcion: 'Recolectar la gema del alma',
        done: false
    
    },

]

const initialStateParaElInit:Tipo1= [

    {
        id: new Date().getTime(),
        descripcion: 'Recolectar la gema del tiempo',
        done: false
    
    },

]


 const init = () =>{

   const jason:string = JSON.stringify(initialStateParaElInit);

    return JSON.parse(localStorage.getItem('Todos') || jason);
 }



export const useTodos = ():Retorno => {


        const [state, dispatch] = useReducer(todoReducer,initialState, init)

            //  const [first, setfirst] = useState<any>(initialState)

        console.log(state);

            useEffect(() => {
            
            localStorage.setItem('Todos', JSON.stringify(state));
            
            }, [state])
            

            type action = {

                type:string,
                payload:todo
            }
        
        
        const AgregarTodo = (todo:todo) =>{
        
                const action:action = {

                    type: 'Add Todo',
                    payload: todo
                }


            dispatch(action);

        //    const prueba = todoReducer(first, action);
        //    setfirst(prueba);
            // console.log(todo);
        }


        const DeleteTodo = (todo:todo) =>{
        
            const action:action = {

                type: 'Remove Todo',
                payload: todo
            }

         dispatch(action);

        }

        const OnTogleTodo = (todo:todo) =>{
        
            const action:action = {

                type: 'Togle Todo',
                payload: todo
            }

         dispatch(action);
            
        }

        const TodoCount = ()=> {
       
            return state.length;   
        }

        const PendingTodoCount = ()=> {
       
            return state.filter((todo) => todo.done == false ).length; 
        }


    return {
        state: state,
        AgregarTodo: AgregarTodo,
        DeleteTodo: DeleteTodo,
        OnTogleTodo: OnTogleTodo,
        TodoCount: TodoCount,
        PendingTodoCount: PendingTodoCount

    }

}
