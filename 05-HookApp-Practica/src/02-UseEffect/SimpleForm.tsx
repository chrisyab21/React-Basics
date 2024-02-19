import { FC, useEffect, useState } from "react"
import { Message } from "./Message"






export const SimpleForm:FC = () => {


  type StateType = {

    
    username: string,
    email: string
    name?: string
  }

  const [formState, setformState] = useState<StateType>({

    username: 'strider',
    email: 'christianyabeta@gmail.com'

  })


  const {username, email} = formState;


  const onInputChange = (event:React.ChangeEvent<HTMLInputElement>) =>{


    const  {value, name } = event.target;

      setformState({
          
         ...formState,
         [name]: value,
      })

    //    console.log(value,name); 

  }


  useEffect(() => {
    
    console.log('Acabo de ser montado');
  }, [])
  

  useEffect(() => {
    
   // console.log('Cambio el formState');
  }, [formState])

  useEffect(()=>{
   // console.log('Cambio el email');

  },[email]);

  return (
    <>     
        <h1>Simple Form</h1>

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

        {
          (username === 'strider34') && <Message></Message>

        }
       


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