

import  {useState, useCallback} from 'react'
import { ShowIncrement } from './ShowIncrement'



export const CallbackHook = () => {

    const [counter, setCounter] =  useState(10)



    const increment = useCallback(
      (Incremento:number) => {

        console.log('Me llamaron')
       
        setCounter((value) => value+Incremento);
      },
      [],
    )
    

  return (
    <>
        <h1>useCallback Hook: {counter}</h1>

        <ShowIncrement increment={increment}></ShowIncrement>
    </>
  )
}
