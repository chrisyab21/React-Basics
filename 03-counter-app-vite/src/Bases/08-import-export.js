//import {heroes} from './Bases/data/heroes'

import heroes from "./data/heroes";


export const getHeroeById = (id)=>{

  return heroes.find((heroes)=>{ return heroes.id == id});
}

export const getHeroeByOwner = (owner)=>{

  return heroes.filter((heroes)=>{ return heroes.owner == owner});
}



// console.log(getHeroeById(3));
// console.log(getHeroePosicion(4));
// console.log(getHeroeByOwner('Marvel'));