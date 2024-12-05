import { createBrowserRouter, Navigate } from "react-router-dom";

import Home from '../Layout/Home'
import ErrorPage from '../Routes/ErrorPage'
import AddMovies from "../Pages/AddMovies";


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
        path: "*",
        element: <ErrorPage></ErrorPage>
    }
])

export default Routes;