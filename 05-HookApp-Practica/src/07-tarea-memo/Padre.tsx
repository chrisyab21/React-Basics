import { useCallback, useMemo, FC, useRef} from 'react'
import { Hijo } from './Hijo'
import { useState } from 'react';




const prueba = () => {


    console.log('volvi a ejecutarme');


}


export const Padre:FC = () => {



    const numeros = useRef([2,4,6,8,10]).current 
    


    const [valor, setValor] = useState(0);


    const incrementar = useCallback(
      (num:number = 0 ) => {

        setValor( (value) => value + num )
      },
      [], 
    )

    


    const NumeroMemorizado = useMemo(() => { 

        return prueba();
    }, [numeros])
    

    return (
        <div>
            <h1>Padre</h1>
            <p> Total: { valor } </p>

            <hr />

            {
               numeros.map( n => (
                    <Hijo 
                        key={ n }
                        numero={ n }
                        incrementar={ incrementar }
                    />
                ))
            }
         
        </div>
    )
}
