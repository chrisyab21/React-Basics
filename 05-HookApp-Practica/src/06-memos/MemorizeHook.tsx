
import { useCounter } from "../Hooks/useCounter"
import {FC, useState, useMemo} from 'react'

const heaveyStuff = (iterationNumber: number = 100) => 

{

  for(let i=0; i<iterationNumber; i++){
    
    console.log('Ahi vamos');
  }

  return (`Numero de iteraciones: ${iterationNumber}` );
}


export const MemorizeHook:FC = () => {



  console.log('Me volvi a generar');

    const {counter, incrementar } = useCounter(4000)

    const [show, setshow] = useState(true);

    const DatoMemorizado = useMemo(() => heaveyStuff(counter), [counter])

  return (

        <>
            <h1>Counter: <small>{counter}</small>   </h1>

            <hr/>

            <h4>{DatoMemorizado}</h4>

            <button 
            className="btn btn-primary ms-4"
            onClick={() => incrementar()}           
            > ReDibujar</button>

           <button 
            className="btn btn-primary ms-4"
            onClick={() => setshow(!show)}           
            >Mutar al padre : {JSON.stringify(show)}</button>

        </>
    )
}
