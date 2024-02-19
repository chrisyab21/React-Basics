

type todo = {
    id: number,
    descripcion: string,
    done: boolean
    }




type Tipo1 = todo[];

type action = {

    type:string,
    payload:todo
} | {

    type:null,
    payload:null
} 



const init:Tipo1 = [{
    id: 0,
    descripcion: 'aloja perro',
    done: false
}]





export const todoReducer = (initialState:Tipo1,action:action) => {



        switch (action.type) {
            case 'Add Todo':
                
               return [...initialState, action.payload];

            case 'Remove Todo':
                
               return initialState.filter((todo) => todo.id != action.payload.id);
            
            case 'Togle Todo':
               
               return initialState.map( (todo) => {

                    if(todo.id == action.payload.id){

                        const newTodo:todo = {
                            ...todo,
                            done: !todo.done
                        }

                        return newTodo;
                    }

                return todo;

               });


            default:
                return initialState;
        }

}