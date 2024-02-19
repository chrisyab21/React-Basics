import { string } from "prop-types";
import { returnArreglo } from "../../src/Bases/07-desestruc-arreglos";
import { number } from "prop-types";


describe('Pruebas 07-desestruc-arreglos', () => { 


    test('Debe retornar un string y un numero', () => { 


        const [letras, numeros] = returnArreglo();

        
        console.log(letras);

        expect(letras).toBe('ABC');
        expect(numeros).toBe(123);


        expect(typeof letras).toBe('string');
        expect(typeof numeros).toBe('number');

        expect(letras).toEqual(expect.any(String));

     });
 });