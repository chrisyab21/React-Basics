import { getSaludo } from "../../src/Bases/02-templateStrings";


describe('´Pruebas en 02-templateString', () => { 
    
   test('getSaludo debe Retornar Hola Christian', () => {

        const name =  'Marcow';
        const message = getSaludo(name);

            expect(message).toBe(`Hola ${name}`)
    })


});