
import { MainApp } from '../09-useContext/MainApp';

import { Navigate} from "react-router-dom";
import { LoginPage } from '../09-useContext/LoginPage';
import { HomePage } from '../09-useContext/HomePage';
import { AboutPage } from '../09-useContext/AboutPage';


export const rutas =   [{
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
  }];