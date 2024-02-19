import { useState, useEffect } from "react";


type Data = {

    author: string,
    quote: string 
     

 }

 type Datos = {

     data: null | Array<Data>,
     isLoading: boolean,
     hasError: null,
 }


 export const useFetch = (url:string):Datos => {


    const Inicial:Datos = {
        data: null,
        isLoading: true,
        hasError: null,

    }

    const [state, setState] = useState<Datos>(Inicial)


    const getFetch = async() =>{

            setState({
                ...state,
                isLoading: true          
            })
            
            setTimeout(async()=>{
               
               

                const resp = await fetch(url);

                const data =  await resp.json();
    
                setState({
                    data: data,
                    isLoading: false,
                    hasError: null,         
                })



            }, 1000)
           
         

           

    }

    useEffect(() => {

        getFetch();
 
    }, [url]);
    

  return ({

    data: state.data,
    isLoading: state.isLoading,
    hasError: state.hasError,

    
  });
}


