import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './components/Home';
import Banner from './components/Banner';
import AddCoffee from './components/AddCoffee';
import UpdateCoffee from './components/updateCoffee';


const router = createBrowserRouter([
  {
    path: "/",
    element:<Home/>,
    // errorElement: <ErrorPage/>,
    children: [
      {
        path: "/",
        element: <Banner/>,
        loader:()=>fetch('http://localhost:5000/coffee')
        
      },
      {
        path: "addCoffee",
        element:<AddCoffee/>
      },
      {
        path: "updateCoffe",
        element:<UpdateCoffee/>
      }
    ]
  },
  // {
  //   path: "*",
  //   element:<ErrorPage/>

  // }
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
