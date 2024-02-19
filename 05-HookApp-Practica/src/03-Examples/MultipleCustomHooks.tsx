
import { useFetch} from "../Hooks/useFetch";
import { useCounter } from "../Hooks/useCounter";
import { LoadingComponent } from "./LoadingComponent";
import { QuoteBlock } from "./QuoteBlock";
import {FC} from 'react'

 
 export const MultipleCustomHooks:FC = () => {


     const {incrementar, counter, reset} = useCounter(1);

     const { data, isLoading, hasError} =  useFetch(`https://api.breakingbadquotes.xyz/v1/quotes/${counter}`);


    // Sintaxis permitida en JavaScrip PERO no permitida en TypeScript 
    // a menos que la constante "data" pueda ser del tipo "any"  
    // Si data es Null o Undefined al negarlo se convierte en True
    //  y al negar True se vuelve False.

    // const {quote, author} = !!data && data[0];


    console.log({ data, isLoading, hasError});


   return (
    <>
    
        <h1>Breaking Bad Frases34</h1>
         <hr></hr>




            {

                isLoading ? (      
                                  
                <LoadingComponent/>

                )

                : (
                                
               !!data && data.map((elemento) => {

                        return (

                            <QuoteBlock                            
                            key={elemento.quote} 
                            quote={elemento.quote} 
                            author={elemento.author}                      
                            />                      
                        );

                     })
            
                )

            }

                        {/* <blockquote className="blockquote text-end me-4">
                        <p className="mb-4">{!!data && data[0].quote}</p>
                        <footer className="blockquote-footer">{!!data && data![0].author}</footer>
                        </blockquote> */}

        
        
            <button 
            className="btn btn-primary ms-4"
            onClick={()=> incrementar(1)}   
            disabled={isLoading}
            >
                Next quote
            </button>

            
            <button 
            className="btn btn-primary ms-4"
            onClick={() => reset()}   
            disabled={isLoading}
            >
                Reset
            </button>


     

   

    </>
   )
 }
 