import { getHeroeById} from "./Bases/08-import-export";




const promesa = new Promise((resolve, reject)=>{

  setTimeout(()=>{
   
      const heroes = getHeroeById(2);
    //  console.log(heroes);  
      resolve();
  }, 2000); 

});


//Traspasando datos al then por medio del resolve
const promesa2 = new Promise((resolve, reject)=>{

  setTimeout(()=>{
   
      const heroes = getHeroeById(2);
      resolve(heroes);
  }, 2000); 

});


promesa2.then((heroes)=>{

//  console.log(heroes);
});




//Usando el reject para pasar el error al catch
const promesa3 = new Promise((resolve, reject)=>{

  setTimeout(()=>{
   
      const heroes = getHeroeById(2);

      //El metodo que se ejecuta primero anula al otro(resolve o reject)
      reject('No se pudo encontrar el heroe');
      resolve(heroes);
  }, 2000); 

});

//El catch recibe el error del reject y lo muestra como un warning
promesa3.then((heroes)=>{

  console.log(heroes);
}).catch(error => {
  console.warn(error);
});




const getHeroeByIdAsync = (id)=>{

  const promesa5 = new Promise((resolve, reject)=>{

    setTimeout(()=>{
     
        const heroes = getHeroeById(id);
  
        //El metodo que se ejecuta primero anula al otro(resolve o reject)
       if(heroes==null){
        reject('No se pudo encontrar el heroe');
       }else{
        resolve(heroes);
       }
        
    }, 2000); 
  
  });
  
  //El catch recibe el error del reject y lo muestra como un warning
  return promesa5;

}

getHeroeByIdAsync(4).then((heroe)=>{

  console.log('Heroe', heroe);

}).catch((error)=>{
    console.warn('No se encontro al heroe');
});


//Sintaxis en la que el primer argumento que llegue al catch o then
//sera enviado directamente a la funcion callback
//hace lo mismo que la sintaxis de arriba pero mas corta
getHeroeByIdAsync(3)
.then(console.log)
.catch(console.warn);





