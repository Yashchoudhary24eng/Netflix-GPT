
import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Login from './Login';
import Browse from './Browse';

const route = createBrowserRouter([
        {
            path: "/",
            element: <Login/>
        },
        {
            path:"/browse",
            element: <Browse/>
        }
    ]);

const Body = () => {

  return (
    <div>
        <RouterProvider router={route}/>
    </div>
  )
}

export default Body

