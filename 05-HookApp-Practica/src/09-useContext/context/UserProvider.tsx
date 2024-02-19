
import {UserContext} from './UserContext'

import {FC, useState} from 'react'

type Data = {
  
  children: React.ReactNode;
}

type user = {
    
  id: number,
  name: string,
  email: string
}



export const UserProvider:FC<Data> = ({children}) => {

        
      const [user, setUser] = useState<any>(
        
        {
          id: 1,
          name: 'Marco',
          email: 'marcoTarma@gmail.com'   
        }

      );


      const cambiarEstado = (parametro:user) => {

        setUser(parametro);
      }


  return (

    <UserContext.Provider value={{ user: user, setUser: cambiarEstado}}>
       {children}
    </UserContext.Provider>
  )
}



