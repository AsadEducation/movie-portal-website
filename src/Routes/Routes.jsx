import { createBrowserRouter, Navigate } from "react-router-dom";

import Home from '../Layout/Home'
import ErrorPage from '../Routes/ErrorPage'
import AddMovies from "../Pages/AddMovies";
import AllMovies from "../Pages/AllMovies";
import Theaters from "../Pages/Theaters";
import AuthLayout from "../Layout/AuthLayout";
import Login from "../Pages/Login";
import Register from '../Pages/Register'


const Routes = createBrowserRouter([

    {
      path:'',
      element:<Home></Home>,
      children:[
        {
            path:'/home',
            element:<Navigate to={'/'}/>
        }
      ]
    },
    {
        path:'addMovies',
        element:<AddMovies></AddMovies>
    },
    {
        path:'allMovies',
        element:<AllMovies/>
    },
    {
        path:'theaters',
        element:<Theaters/>

    },
    {
      path:'auth',
      element:<AuthLayout/>,
      children:[
         {
            path:'login',
            element:<Login/>
         },
         {
            path:'register',
            element:<Register/>
         }
      ]
    },
    {
        path: "*",
        element: <ErrorPage></ErrorPage>
    }
])

export default Routes;