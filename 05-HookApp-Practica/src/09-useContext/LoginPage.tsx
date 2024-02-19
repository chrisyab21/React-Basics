 import  {useContext} from 'react'
import { UserContext } from './context/UserContext';

export const LoginPage = () => {

     const FuncX = () => {}

     const user =  useContext(UserContext)?.user;
     const setUser = useContext(UserContext)?.setUser || FuncX;
    // console.log(user);


  return (
    
    <>
        <h1>LoginPage</h1>
        <hr></hr>

        
        <pre aria-label='pre'>
          {    JSON.stringify(user, null, 3)  }
        </pre>

        <button 
          className='btn btn-primary ms-2'
          onClick={() => setUser(
              {
              id: 7,
              name: 'Vegeta',
              email: 'yoSoyunGuerreroSayayin!@gmail.com'
              }
          )}
          >

          Activar 
        </button>
    </>
  )
}
