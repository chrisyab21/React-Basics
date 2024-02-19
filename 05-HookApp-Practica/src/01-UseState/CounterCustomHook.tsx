

import {FC} from 'react';
import { useCounter } from '../Hooks/useCounter';


type Props ={

    name: string
}

export const CounterCustomHook:FC<Props> = ({name}) => {

     const {counter, incrementar, decrementar, reset} =   useCounter();

  return (
    <>
        <h1>{name}Counter with  Hook:  {counter}</h1>
        <hr></hr>

        <button onClick={()=> incrementar(2)}>+1</button>
        <button onClick={()=> decrementar(2)}>-1</button>
        <button onClick={reset}>Reset</button>
    </>
  )
}
