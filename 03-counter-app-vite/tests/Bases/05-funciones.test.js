import { getUser, getUsurarioActivo} from "../../src/Bases/05-funciones";


describe('Pruebas en 05-funciones', () => {
    
    test('TgetUser debe retornar un objeto', () => { 


        const testUser = {

            uid: 'Abcde',
            userName: 'El_PapuDj'
        }

        const user = getUser();

        expect(testUser).toEqual(user);

        console.log(user);

     }); 



     test('getUserActivo debe retornar un objeto con el nombre', () => { 
        
        

        const name = 'Dereck Malcom'


        const user = getUsurarioActivo(name);

        expect(user).toEqual({

            uid: 'Abcde',
            userName: name
        });

        console.log(user.userName);
        
       });

 });