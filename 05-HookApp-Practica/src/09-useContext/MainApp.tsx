
import { Outlet } from 'react-router-dom'
import { Navbar } from './Navbar'
import { UserProvider } from './context/UserProvider'


export const MainApp = () => {
  return (
    
    <UserProvider>

        <Navbar></Navbar>

        <hr></hr>

        {/* <a href='/login'> Hola</a> */}
        <Outlet></Outlet>

    </UserProvider>
   
  )
}
