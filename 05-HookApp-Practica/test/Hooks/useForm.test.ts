import { renderHook, act } from "@testing-library/react";
import { useForm} from '../../src/Hooks/useForm'


describe('Pruebas sobre useForm', () => { 

    type CustomForm = {

        name: string,
        email: string
    }


    const inicial:CustomForm  = {

        name:'Christofer',
        email: 'christoferparada@gmail.com'
    }

    test('Debe retornar los valores por defecto', () => {

    
            const {result} = renderHook(() => useForm<CustomForm>(inicial));

           // const {formState, onInputChange, OnResetForm} = result.current;
            
            console.log(result.current)

            expect(result.current).toEqual(
                    {
                        formState: inicial,
                        onInputChange: expect.any(Function),
                        OnResetForm: expect.any(Function)
                    }
            );

      });



      test('Debe de cambiar el nombre en el formulario', () => { 
    

         const {result} =  renderHook(()=> useForm<CustomForm>(inicial));

         const {onInputChange} = result.current;
        
         const Prueba = {  
            target: {       
                value: 'aloja',
                name: 'email'
            }
         }

            act(()=>{

                onInputChange(Prueba);

            });

          
            expect(result.current.formState.email).toBe('aloja');

       });


       
      test('Debe de resetear el nombre en el formulario', () => { 
    

        const {result} =  renderHook(()=> useForm<CustomForm>(inicial));

        const {onInputChange, OnResetForm} = result.current;

        const Prueba = {  
           target: {       
               value: 'aloja',
               name: 'email'
           }
        }

           act(()=>{

               onInputChange(Prueba);
               OnResetForm();
           });


           expect(result.current.formState.email).toBe(inicial.email);

      });





});