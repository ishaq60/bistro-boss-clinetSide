import { createBrowserRouter, RouterProvider } from "react-router-dom";
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
import Additem from "../Layout/Dashbord/Additem/Additem";
import AdminRoutes from "./AdminRoutes";
import ManageItem from "../Layout/Dashbord/ManageItem";
import UpdateItem from "../Layout/Dashbord/UpdateItem/UpdateItem";
import axios from "axios";
import UsePayment from "../Layout/Dashbord/UsePayment";
import PaymentHistory from "../Layout/Dashbord/PaymentHistory/PaymentHistory";
import AdminHome from "../Layout/Dashbord/AdminHome/AdminHome";
import UserHome from "../Layout/Dashbord/UserHome/UserHome";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "menu",
        element: <Menu />,
      },
      {
        path: "order/:category",
        element: <Order />,
      },
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "register",
        element: <Register></Register>,
      },
    ],
  },
  {
    path: "dashboard",
    element: (
      <PrivateRoutes>
        <Dashboard></Dashboard>,
      </PrivateRoutes>
    ),

    children: [
      {
        path: "cart",
        element: (
          <PrivateRoutes>
            <Dashbioardcart></Dashbioardcart>
          </PrivateRoutes>
        ),
      },
      {
        path: "/dashboard/payment",
        element: (
          <PrivateRoutes>
            <UsePayment></UsePayment>
          </PrivateRoutes>
        ),
      },
      {
        path: "/dashboard/paymenthistory",
        element: (
        
           <PaymentHistory></PaymentHistory>
         
        ),
      },
      {
        path:'/dashboard/userHome',
        element:<UserHome></UserHome>
      },
   
      {
        path: "admin/alluser",
        element: (
          <AdminRoutes>
            <AllUser></AllUser>
          </AdminRoutes>
        ),
      },
      {
        path: "/dashboard/admin/addItem",
        element: (
          <AdminRoutes>
            <Additem />
          </AdminRoutes>
        ), ///dashboard/admin/updateItem/
      },
      {
        path: "/dashboard/admin/mangeitem",
        element: (
          <PrivateRoutes>
            <ManageItem />
          </PrivateRoutes>
        ),
      
      },
      {
        path:'/dashboard/admin/AdminHome',
        element:<AdminHome/>

      },

      {
        path: "/dashboard/admin/updateItem/:id",
        element: (
          <PrivateRoutes>
            <UpdateItem />
          </PrivateRoutes>
        ),
        loader: ({ params }) => {
          console.log("Loading ID:", params.id); // ✅ check if it logs
          return fetch(`http://localhost:5000/menu/${params.id}`);
        },
      },

      //user
    ],
  },
]);

export default router;
