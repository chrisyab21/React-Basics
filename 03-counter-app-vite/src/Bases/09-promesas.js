import { getHeroeById} from "./08-import-export";


export const getHeroeByIdAsync = (id)=>{

  const promesa5 = new Promise((resolve, reject)=>{

    setTimeout(()=>{
     
        const heroes = getHeroeById(id);
  
        //El metodo que se ejecuta primero anula al otro(resolve o reject)
       if(heroes==null){
        reject(`No se pudo encontrar el heroe ${id}`);
       }else{
        resolve(heroes);
       }
        
    }, 1000); 
  
  });
  
  //El catch recibe el error del reject y lo muestra como un warning
  return promesa5;

}






