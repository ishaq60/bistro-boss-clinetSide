import {
    createBrowserRouter,
    RouterProvider,
  } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home";
import Menu from "../Pages/Menu/Menu";
import Order from "../Pages/Order/Order";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import PrivateRoutes from "./PrivateRoutes";
import Dashboard from "../Layout/Dashbord/Dashboard";
import Dashbioardcart from "../Dashboard page/cart/Dashbioardcart";
import AllUser from "../Layout/Dashbord/AllUsers/AllUser";



  const router = createBrowserRouter([
    {
      path: "/",
      element: <Main/>,
      children:[
        {
          path:"/",
          element:<Home/>

        },
        {
          path:"menu",
          element:<Menu/>
        },
        {
          path: 'order/:category',
          element:
 <Order/>
         
         
        
        },
        {
          path:'login',
          element:<Login/>
        },
        {
          path:'register',
          element:<Register></Register>
        }
    
      ]
    },
   {
    path:'dashboard',
    element:<PrivateRoutes>
  <Dashboard></Dashboard>,
    </PrivateRoutes>,
  
    children:[
      {
        path:'cart',
        element:<PrivateRoutes>
    <Dashbioardcart></Dashbioardcart>
        </PrivateRoutes>
     
      },
      {
        path:'admin/alluser',
        element:<AllUser></AllUser>
      }
    ]
   }
  ]);
  
  export default router