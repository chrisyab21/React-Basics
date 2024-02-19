import React, { useState } from 'react'

import PropTypes from 'prop-types'

export const AddCategory = ({onAddCategory}) => {


    const [inputValue , setInputValue] = useState('');


    const writeOnChange = (event) =>{

       
        setInputValue(event.target.value);
       // console.log(event.target.value);
    }

    const onSubmit = (event) =>{
       
        event.preventDefault();
    //    console.log(inputValue);

        if(inputValue.trim().length <=1){

            return;
        }

        // onAddCategory((categories) => [inputValue, ...categories]);

        onAddCategory(inputValue.trim());
        
        setInputValue('');
        
    }

  return (

    <form onSubmit={(event)=> onSubmit(event)} aria-label='form'>

    <input 
    type='text'
    placeholder='Buscar Gifs'
    value={inputValue}
    onChange={(event) => writeOnChange(event)}
    //Segunda forma de escribir la linea de forma mas directa.
    //onChange={writeOnChange}
    >
    </input>

    </form>
  )
}


AddCategory.propTypes = {

  onAddCategory: PropTypes.func.isRequired,


}
