import { createContext } from "react";


 export type user = {
    
    id: number,
    name: string,
    email: string
}

export type ContextType = {

    user: user
    setUser: (parametro:user) => void
}





const inicial:ContextType = {

    user: {
        id: 1,
        name: 'Marco',
        email: 'marcoTarma21@gmail.com'

    },
    setUser: () => {}

}

 export const UserContext = createContext<ContextType | null>(inicial);