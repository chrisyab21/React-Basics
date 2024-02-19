import { getHeroeById, getHeroeByOwner } from "../../src/Bases/08-import-export";
 import heroes from "../../src/Bases/data/heroes";


describe('Pruebas en 08-import-export', () => { 
    
    test('getHeroeById debe retornar un heroe por id', () => { 

        const id = 1; 

        const heroe = getHeroeById(id);
        console.log(heroe);

        expect(heroe).toEqual({
            id: 1,
            name: 'Batman',
            owner: 'DC'
        });
     });

     test('getHeroeById debe retornar undefined si el heroe no existe', () => { 

        const id = 100; 

        const hero = getHeroeById(id);
        console.log(hero);

        //Lo que hace el toBeFalsy es comparar si el valor
        //del expect es nulo, undefinend o false;
        expect(hero).toBeFalsy();
     });




     test('getHeroeByOwner debe retornar heroes de Dc', () => { 

        const owner = 'DC'; 

        const heros = getHeroeByOwner(owner);
        console.log(heroes);

        expect(heros.length).toBe(3);

        expect(heros).toEqual([ 
            {
                id: 1,
                name: 'Batman',
                owner: 'DC'
             },
            {
                id: 3,
                name: 'Superman',
                owner: 'DC'
             },
            {
                id: 4,
                name: 'Flash',
                owner: 'DC'
             },
        
        ]);


        expect(heros).toEqual(heroes.filter((heroe)=>{
            return  heroe.owner === owner;
         }))

     });


     test('getHeroeByOwner debe retornar heroes de Marvel', () => { 

        const owner = 'Marvel'; 

        const heros = getHeroeByOwner(owner);
        console.log(heros);

        expect(heros.length).toBe(2);

        expect(heros).toEqual([ 
            {
                id: 2,
                name: 'Spiderman',
                owner: 'Marvel'
             },
            {
                id: 5,
                name: 'Wolverine',
                owner: 'Marvel'
             },
        
        ]);


        expect(heros).toEqual(heroes.filter((heroe)=>{
           return  heroe.owner === owner;
        }))

     });









 });