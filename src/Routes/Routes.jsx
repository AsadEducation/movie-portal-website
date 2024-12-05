import { createBrowserRouter, Navigate } from "react-router-dom";

import Home from '../Layout/Home'
import ErrorPage from '../Routes/ErrorPage'
import AddMovies from "../Pages/AddMovies";
import AllMovies from "../Pages/AllMovies";
import Theaters from "../Pages/Theaters";


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
        path: "*",
        element: <ErrorPage></ErrorPage>
    }
])

export default Routes;