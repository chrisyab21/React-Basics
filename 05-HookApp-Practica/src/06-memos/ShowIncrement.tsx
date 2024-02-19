

import { FC, memo } from "react"


type Props = {

    increment: (parametro?:any) => any
}


export const ShowIncrement:FC<Props> = memo(({increment}) => {

    console.log('Me volvi a dibujar');

  return (
    
        <button 
        className="btn btn-primary"

        onClick={()=> increment(5)}
               
        >
            Incrementar
        </button>

  )
})
