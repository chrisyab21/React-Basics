
import ReactDOM from 'react-dom/client'
import 'bootstrap/dist/css/bootstrap.css';
//import './index.css'
//import { SimpleForm } from './02-UseEffect/SimpleForm'
//import { FormCustomHook } from './02-UseEffect/FormCustomHook';
//import { MultipleCustomHooks } from './03-Examples/MultipleCustomHooks';
//import { FocusScreen } from './04-UseRef/FocusScreen';
//import { Layout } from './05-LayoutEffect/Layout';
//import { Memorize } from './06-memos/Memorize';
//import { MemorizeHook } from './06-memos/MemorizeHook';
//import { CallbackHook } from './06-memos/CallbackHook';
//import { Padre } from './07-tarea-memo/Padre';
//import { HooksApp } from './HooksApp.tsx'
//import { CounterApp } from './01-UseState/CounterApp.tsx'
//import { CounterCustomHook } from './01-UseState/CounterCustomHook.tsx'
//import { TodoApp } from './08-useReducer/TodoApp';
import { MainApp } from './09-useContext/MainApp';

import { createBrowserRouter, Navigate, RouterProvider} from "react-router-dom";
import { LoginPage } from './09-useContext/LoginPage';
import { HomePage } from './09-useContext/HomePage';
import { AboutPage } from './09-useContext/AboutPage';


const router = createBrowserRouter([
  {
    path: "/",
    element: <MainApp></MainApp>,
    children: [

      {

        path: "/",
        element: <HomePage></HomePage>
      },      
      {

        path: "/login",
        element: <LoginPage></LoginPage>
      },

      {

        path: "/about",
        element: <AboutPage></AboutPage>
      },
      {

        path: "/*",
        element: <Navigate to={"/login"}></Navigate>
      }
    ]
    
  },
]);


ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(


  
  //  <HooksApp  />
 
  //  <CounterApp></CounterApp>

  //  <CounterCustomHook name='Super'></CounterCustomHook>

  //  <SimpleForm></SimpleForm>

  //  <FormCustomHook></FormCustomHook>

  //  <MultipleCustomHooks></MultipleCustomHooks>

  //  <FocusScreen></FocusScreen>

  //  <Layout></Layout> 
  
  //  <Memorize></Memorize> 

  //  <MemorizeHook></MemorizeHook> 

  //  <CallbackHook></CallbackHook>
  
  //  <Padre></Padre>

  //  <TodoApp></TodoApp>

  //  <MainApp></MainApp>

  <RouterProvider router={router}/>

) 
