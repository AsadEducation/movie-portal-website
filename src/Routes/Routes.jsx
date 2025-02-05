import { createBrowserRouter, Navigate } from "react-router-dom";

import Home from '../Layout/Home'
import ErrorPage from '../Routes/ErrorPage'
import AddMovies from "../Pages/AddMovies";
import AllMovies from "../Pages/AllMovies";
import Theaters from "../Pages/Theaters";
import AuthLayout from "../Layout/AuthLayout";
import Login from "../Pages/Login";
import Register from '../Pages/Register'
import Details from "../Pages/MovieDetails";
import Private from '../Routes/Private'
import FavMovies from "../Pages/FavMovies";


const Routes = createBrowserRouter([

  {
    path: '/',
    element: <Home></Home>,
    children: [
      {
        path: '/home',
        element: <Navigate to={'/'} />
      }
    ]
  },
  {
    path: 'addMovies',
    element: <AddMovies></AddMovies>
  },
  {
    path: 'allMovies',
    element: <AllMovies />
  },
  {
    path: 'theaters',
    element: <Theaters />

  },
  {
    path: 'auth',
    element: <AuthLayout />,
    children: [
      {
        path: 'login',
        element: <Login />
      },
      {
        path: 'register',
        element: <Register />
      }
    ]
  },
  {
    path: '/movieDetails/:id',
    loader: ({ params }) => fetch(`https://last-movie-portal.onrender.com/movies/${params.id}`),
    element: <Private><Details /></Private>,

  },
  {
    path: 'favMovies/:email',
    element: <Private><FavMovies /></Private>,
    loader: ({ params }) => fetch(`https://last-movie-portal.onrender.com/favMovies/${params.email}`),

  },
  {
    path: "*",
    element: <ErrorPage></ErrorPage>
  }
])

export default Routes;