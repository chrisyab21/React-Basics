import { useCounter } from "../Hooks/useCounter"
import { SmallComponent } from "./SmallComponent"

import {FC, useState} from 'react'


export const Memorize:FC = () => {


    const {counter, incrementar } = useCounter()

    const [show, setshow] = useState(true);

  return (

        <>
            <h1>Counter: <SmallComponent counter={counter}></SmallComponent>  </h1>

            <hr/>

            <button 
            className="btn btn-primary ms-4"
            onClick={() => incrementar()}           
            > ReDibujar</button>

           <button 
            className="btn btn-primary ms-4"
            onClick={() => setshow(!show)}           
            > Mutar al Padre: {JSON.stringify(show)}</button>

           

        </>
  )
}
