

import React, { useState, useEffect } from 'react'
import { GifItem } from './GifItem';
import { useFetchGifs } from '../hooks/useFetchGifs';

import PropTypes from 'prop-types';

export const GifGrid = ({category}) => {


  const { Images, isLoading} = useFetchGifs(category);


 

  return (
    <>
        <h3>{category}</h3>


      {
          isLoading ? <h2>Cargando...</h2>
          : null

      }

       
       <ol className='card-grid'>
          {
            Images.map((datosImg) =>{

              return ( 
                
                <GifItem 
                key={datosImg.id} 
                	{...datosImg}
                ></GifItem>
                
                )

            } )

          }
        
       </ol>
    </>
  )
}




GifGrid.propTypes = {

category: PropTypes.string.isRequired,


}