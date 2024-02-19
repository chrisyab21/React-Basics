
import { useState} from 'react'


export const CounterApp = () => {


    type Tipo1 = {

        counter1: number,
        counter2: number,
        counter3: string

    }


   const [state, setCounter] = useState<Tipo1>({

        counter1: 10,
        counter2: 20,
        counter3: 'Naruto'
   });


   const {counter1,counter2, counter3} = state;


  return (
   <>
   <h1>Counter1: {counter1}</h1>
   <h1>Counter2: {counter2}</h1>
   <h1>Counter3: {counter3}</h1>


   <hr></hr>

   <button onClick={() => setCounter({
    ...state,
    counter1: counter1+1,
    
   })}>+1</button>
   
   </>
  )
}
