

import {FC} from 'react'

import { useForm } from '../Hooks/useForm'



type CustomForm = {

    descripcion: string,
  

  }

  type todo = {
    id: number,
    descripcion: string,
    done: boolean

    }


    
  type Dato = {
    
    FuncionAgregar: (parametro:todo) => void

    }


const formulario:CustomForm = {

    descripcion: '',

}




export const TodoForm:FC<Dato> = (Dato) => {


    const {formState, onInputChange,OnResetForm} = useForm<CustomForm>(formulario)

    //console.log(formState);


    const onFormSubmit = (event:any)=>{

        event.preventDefault();

        if(formState.descripcion.length <= 1) return;


        const newTodo:todo = {

            id: new Date().getTime(),
            descripcion: formState.descripcion,
            done: false
        }
        

       Dato.FuncionAgregar(newTodo);
       OnResetForm();
    }


  return (
    
        <form onSubmit={(event)=> onFormSubmit(event) } >

            <input 
                type='text'
                placeholder='Que hay que hacer'
                className='form-control'
                name='descripcion'
                value={formState.descripcion}
                onChange={(event)=> onInputChange(event)}
            ></input>

            <button 
                type='submit'
                className='btn btn-outline-primary mt-1'              
                > 
                Agregar
            </button>

        </form>
  )
}
