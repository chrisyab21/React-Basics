
import {todoReducer} from '../../src/08-useReducer/todoReducerV2'


type todo = {
    id: number,
    descripcion: string,
    done: boolean
    }

type action = {

    type:string,
    payload:todo
} 

describe('Pruebas en el todoReducer', () => { 

    const initialState = [{

        id: 1,
        descripcion: 'Demo Todo',
        done: false
    }]

    test('Debe de regresar el estado inicial', () => {

        const newState =  todoReducer(initialState, { type: '', payload: {
            id: 0,
            descripcion: '',
            done: false
        }})
        
        expect(newState).toBe(initialState);

     });

    
     test('Debe de agregar un Todo ', () => {

        const action:action = {        
            type: 'Add Todo',      
            payload: {
                id: 1,
                descripcion: 'Visitar a la burremp',
                done: false
            }
        }

        const action2 = {        
            type: null,      
            payload: null
        }

        const newState =  todoReducer(initialState, action)
        
        expect(newState.length).toBe(2);
        expect(newState).toContain(action.payload);
        console.log(newState);
     });


     test('Debe de eliminar un Todo ', () => {

        const action:action = {        
            type: 'Remove Todo',      
            payload: {
                id: 1,
                descripcion: '',
                done: false
            }
        }


        const newState =  todoReducer(initialState, action)
        
        expect(newState.length).toBe(0);
        console.log(newState);
     });



     test('Debe de realizar el Toggle del Todo ', () => {

        const action:action = {        
            type: 'Togle Todo',      
            payload: {
                id: 1,
                descripcion: '',
                done: false
            }
        }

        const newState =  todoReducer(initialState, action)      
        expect(newState[0].done).toBe(true);
        console.log(newState);
     });
     

 });