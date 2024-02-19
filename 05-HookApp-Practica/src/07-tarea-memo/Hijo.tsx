import {FC, memo} from 'react'



type Props = {

    numero:number
    incrementar: (parametro?:number) => void

}


export const Hijo:FC<Props> = memo(({ numero, incrementar }) => {

    console.log('  Me volví a generar :(  ');

    return (
        <button
            className="btn btn-primary me-3"
            onClick={ () => incrementar( numero ) }
        >
            { numero }
        </button>
    )
})
