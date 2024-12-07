import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import Routes from './Routes/Routes.jsx'
import AuthProvider, { AuthContext } from './Provider/AuthProvider.jsx'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import MovieProvider from './Provider/MovieProvider.jsx'

//  this can cause problem 
// import 'leaflet/dist/leaflet.css';

createRoot(document.getElementById('root')).render(
  <StrictMode>

    <AuthProvider>
      <MovieProvider>
        <RouterProvider router={Routes} />
      </MovieProvider>
    </AuthProvider>

    <ToastContainer />
  </StrictMode>,
)