import { getHeroeByIdAsync } from "../../src/Bases/09-promesas";

describe('Pruebas en 09-promesas', () => {

    test('getHeroeByIDAsync debe retornar un heroe', (done) => { 

        const id = 1;

        getHeroeByIdAsync(id).then(
            (hero)=>{

                expect(hero).toEqual(
                    {
                        id: 1,
                        name: 'Batman',
                        owner: 'DC'            
                    }
                );

              done();      
            }
        );

     });

     test('getHeroeByIDAsync debe obtener un error si heroe no existe', (done) => { 

        const id = 100;

        getHeroeByIdAsync(id).catch(
            (error)=>{

                expect(error).toBe(`No se pudo encontrar el heroe ${id}`);

              done();      
            }
        );

     });
});