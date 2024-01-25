import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import { Home } from './pages/Home/index.jsx'
import { Sobre } from './pages/Sobre/index.jsx';
import { Clientes } from './pages/Clientes/index.jsx';
import { Contato } from './pages/Contato/index.jsx';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Home/>,
  },
  {
    path:"/sobre",
    element:<Sobre/>
  },
  {
    path:"/clientes",
    element:<Clientes/>
  },
  {
    path:"/contato",
    element:<Contato/>
  }
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <RouterProvider router={router} />
  </React.StrictMode>,
)
