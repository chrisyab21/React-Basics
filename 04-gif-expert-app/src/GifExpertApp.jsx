
import { useState } from 'react';


import React from 'react'

import { AddCategory, GifGrid } from './Componentes/imports';
//import { GifGrid } from './Componentes/GifGrid';


export const GifExpertApp = () => {


  const [categorias, setCategory] = useState(['One Piece']);

 // console.log(categorias);

  const agregarCategoria = (newCategory) =>{

  var converted = newCategory.toLowerCase();

    if(categorias.includes(converted)) return;

    setCategory([converted,...categorias]);

    //setCategory((cat) => [...cat,'Vice City']);     
  }



  return (
    <>
        <h1>GifExpertApp</h1>


        <AddCategory onAddCategory={(value) => agregarCategoria(value)}></AddCategory>


        {/* <AddCategory onAddCategory={setCategory}></AddCategory> */}

        
     
          {       
          categorias.map((categoria)=>{ 
            
            
              return (
             
                <GifGrid key={categoria} category={categoria}></GifGrid>
              )
            })          
          }
    
    </>
  )
}




