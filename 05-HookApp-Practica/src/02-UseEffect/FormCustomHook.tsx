import { FC} from "react"
import { useForm } from "../Hooks/useForm"




export const FormCustomHook:FC = () => {


  type CustomForm = {

    username: string,
    email: string,
    password: string,
  

  }

const formulario:CustomForm = {

  username: '',
  email: '',
  password: '',

}


  const {formState, onInputChange, OnResetForm} = useForm<CustomForm>(formulario);


  const {username, email, password} = formState;

  console.log(formState);


  return (
    <>     
        <h1>Formulario con Custom Hook</h1>

        <hr></hr>

        <input 
        type="text"
        className="form-control"
        placeholder="Username"
        name="username"  

        value={username}
        onChange={(event) => onInputChange(event)  }
        />

        <input
          type="email"
          className="form-control mt-2"
          placeholder="christianyabeta@gmail.com"
          name="email"
          value={email}
           onChange={(event) => onInputChange(event)  }
        >
        
        </input>


        <input
          type="password"
          className="form-control mt-2"
          placeholder="Contraseña"
          name="password"
          value={password}
           onChange={(event) => onInputChange(event)  }
        >
        
        </input>

       <button 
       className="btn btn-primary mt-2 ms-2"
       onClick={() => OnResetForm()}
       >
        
        Reset</button>


    </>


  )
}

/*

Forma de Hacer el OnInputChange sin usar propiedades computadas


const onInputChange = (event:React.ChangeEvent<HTMLInputElement>) =>{

  const  {value, name } = event.target;

  if(event.target.type == "text")  {


    setformState({
        
      ...formState,
      username: value,
        })

  }else{

    setformState({
        
      ...formState,
      email: value,
        })
  }       
      console.log(value,name); 

}

*/