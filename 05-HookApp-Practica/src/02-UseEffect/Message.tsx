import { FC, useState } from "react"

import {useEffect} from "react";


export const Message:FC = () => {


    type CoordsType = {

        x: number,
        y: number
    }

    const CordsInicializador: CoordsType = {

        x:200,
        y:400
    }

    const [coordenadas, setCoordenadas] = useState<CoordsType>(CordsInicializador)

    useEffect(() => {

        //  console.log('Montado');

        const OnMouseMove = (event:MouseEvent) => {
            const {x,y} = event;

            setCoordenadas({x,y})
            
            console.log(x,y)

        }
     

        window.addEventListener('mousemove', OnMouseMove);



        // Forma para no enviar la referencia de la funcion sino solo su resultado.
        //     window.addEventListener('mousemove', (event:MouseEvent) => OnMouseMove(event));


      return () => {

      // console.log('Desmontado');

      window.removeEventListener('mousemove', OnMouseMove);

      }
    }, [])
    


  return (

    <>
    <h3>Usuario ya existe</h3>

    {JSON.stringify(coordenadas)}
    </>
  )
}
