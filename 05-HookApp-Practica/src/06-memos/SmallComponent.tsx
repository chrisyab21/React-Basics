

import React from 'react'


type Dato = {

    counter: number
}


export const SmallComponent = React.memo((value:Dato) => {

    console.log('Me volvi a dibujar');

  return (

    <small> { value.counter}</small>
  )
})
