import { renderHook, act } from "@testing-library/react"
import { useCounter} from "../../src/Hooks/useCounter"


describe('Pruebas en el use Counter', () => {
     
    test('Debe retornar los valores por defecto', async () => { 

       const {result} = renderHook( ()=> useCounter());

      const {counter, incrementar, decrementar, reset} = result.current;

      expect(counter).toBe(10);
      
      expect(decrementar).toEqual(expect.any(Function));
      expect(incrementar).toEqual(expect.any(Function));
      expect(reset).toEqual(expect.any(Function));
      
    });


    test('Debe de generar el counter con el valor de 100', () => { 
        
        const {result} = renderHook( () => useCounter(100));

        const {counter} = result.current;

        expect(counter).toBe(100);



     });


     test('Debe incrementar el contador', () => {

        const {result} = renderHook( () => useCounter());

        const {counter, incrementar} = result.current;

        expect(counter).toBe(10);

        act(() =>{
            incrementar();
            incrementar(2);
        });

    
        expect(result.current.counter).toBe(13);


       });


       test('Debe decrementar el contador', () => {

        const {result} = renderHook( () => useCounter());

        const {counter, decrementar} = result.current;

        expect(counter).toBe(10);

        act(() =>{
            decrementar();
            decrementar(2);
        });

    
        expect(result.current.counter).toBe(7);


       });



       test('Debe de resetear el contador', () => {

        const {result} = renderHook( () => useCounter());

        const {counter, reset, decrementar} = result.current;

        expect(counter).toBe(10);

        act(() =>{

            decrementar();
            reset();
        });

    
        expect(result.current.counter).toBe(10);


       });
    
    
    
    });