import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './layouts/Root.jsx';
import Home from './pages/home/Home.jsx';
import Login from './pages/login/Login.jsx';
import Register from './pages/register/Register.jsx';
import AuthProvider from './providers/AuthProvider';
import Details from './pages/home/details/Details';
import PrivateRoute from './providers/PrivateRoute/PrivateRoute';
import About from './pages/about/About';
import Awards from './pages/awards/Awards';
import Notfound from './pages/notfount/Notfound';



const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement:<Notfound></Notfound>,
    children:[
      {
        path:'/',
        element:<Home></Home>,
        loader:()=>fetch('/event.json')
      },
      {
        path:'/event/:id',
        element:<PrivateRoute><Details></Details></PrivateRoute>,
        loader:()=>fetch('../event.json')
      },
      {
        path:'/login',
        element:<Login></Login>
      },
      {
        path:'/register',
        element:<Register></Register>
      },
      {
        path:'/about',
        element:<PrivateRoute><About></About></PrivateRoute>
      },
      {
        path:'/awards',
        element:<PrivateRoute><Awards></Awards></PrivateRoute>
      },
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <AuthProvider>
      <RouterProvider router={router} />
      </AuthProvider>
  </React.StrictMode>,
)
