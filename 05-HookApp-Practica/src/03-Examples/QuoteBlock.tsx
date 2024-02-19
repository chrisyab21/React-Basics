

import {FC, useLayoutEffect , useRef, useState} from 'react'

type Dato = {

    quote: string,
    author: string
}


export const QuoteBlock:FC<Dato> = (elemento:Dato) => {



    type Box ={

        height: number,
        width: number
    }

    const inicializador:Box = {

        height: 0,
        width: 0

    }


    const [boxSize, setboxSize] = useState<Box>(inicializador);

    const pRef = useRef<HTMLParagraphElement>(null);
    
    useLayoutEffect(() => {
   
        const { height, width } =  pRef.current!.getBoundingClientRect();
       
        setboxSize({height, width});

        console.log('holaff');

      }, [elemento])



  return (   

    <>
    
    <blockquote 
    className="blockquote text-end me-4"
    key={elemento.quote} 
    style={ {display:'flex'}}                      
    >
    <p className="mb-4" ref={pRef}>{elemento.quote}</p>
    <footer className="blockquote-footer">{elemento.author}</footer>
    </blockquote>

    <code>{JSON.stringify(boxSize)}</code>
    
    </>
   
  )
}
