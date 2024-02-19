

import {FC} from 'react'

type todo = {
  id: number,
  descripcion: string,
  done: boolean
}

type Datos = {
    
todo? : {
        id: number,
        descripcion: string,
        done: boolean
    },

  funcBorrar: (parametro:todo) => void,
  onTogleTodo: (parametro:todo) => void
  
}

const init = {
  id: 1,
  descripcion: 'TODO PRO',
  done: false
}


export const TodoItem:FC<Datos> = ({todo = init, funcBorrar, onTogleTodo}) => {
  return (
    
    <li className='list-group-item d-flex justify-content-between'>

        <span 
        className={`aling-self-center ${ todo.done ? 'text-decoration-line-through' : ''}`}
        onClick={() => onTogleTodo(todo)}
        aria-label='span'
        >{todo.descripcion}</span>
        <button 
        className='btn btn-danger'
        onClick={() => funcBorrar(todo)}
        >
          
          Borrar</button>

    </li>   

  )
}
