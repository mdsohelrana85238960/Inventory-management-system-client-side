import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../page/Home";
import Login from "../page/Login";
import Register from "../page/Register";

import PrivateRoute from "./PrivateRoute";
import CreateStore from "../page/CreateStore";
import ErrorPage from "../page/ErrorPage";
import Dashboard from "../Dashboard/Dashboard";
import DashboardHome from "../Dashboard/DashboardHome";
import ProductManagement from "../Dashboard/ProductManagement";
import Menu from "../Dashboard/Menu";
import AddProduct from "../Dashboard/AddProduct";
import UpdateProducts from "../Dashboard/UpdateProducts";
import SaleCollection from "../Dashboard/SaleCollection";
import CheckOut from "../Dashboard/CheckOut";
import ShopManagement from "../Dashboard/ShopManagement";
import WatchDemo from "../page/WatchDemo";
import Payment from "../Dashboard/Payments/Payment";
import SaleSummary from "../Dashboard/Payments/SaleSummary";


const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      errorElement:<ErrorPage></ErrorPage>,
      children:[
        {
            path: "/",
            element: <Home></Home>
        },
        {
            path: "/login",
            element: <Login></Login>
        },
        {
            path: "/register",
            element: <Register></Register>
        },
        {
            path: "/createStore",
            element: <PrivateRoute> <CreateStore></CreateStore> </PrivateRoute>
        },
        {
            path: "/watchDemo",
            element: <PrivateRoute> <WatchDemo></WatchDemo> </PrivateRoute>
        },

        // das
     
      ]
    },

    {
      path:'/dashboard',
      element:<PrivateRoute> <Dashboard></Dashboard> </PrivateRoute>,
      errorElement:<ErrorPage></ErrorPage>,
      children:[
        {
          index: true,
          element:<DashboardHome></DashboardHome>
        },
        {
          path:'management',
          element: <PrivateRoute> <ProductManagement></ProductManagement> </PrivateRoute>
        },
        {
          path:'addProduct',
          element:<AddProduct></AddProduct>
        },
       
        {
          path:'menu',
          element:<Menu></Menu>
        },
        {
          path:'updateProduct/:id',
          element: <PrivateRoute> <UpdateProducts></UpdateProducts> </PrivateRoute>
        },
        {
          path:'saleCollection',
          element:<SaleCollection></SaleCollection>
        },
        {
          path:'checkOut/',
          element:<CheckOut></CheckOut>
        },
        {
          path:'shopManagement',
          element:<ShopManagement></ShopManagement>
        },
        {
          path:'saleSummary',
          element:<SaleSummary></SaleSummary>
        },
        {
          path:'payments/:id',
          element:<Payment></Payment>,
          loader:({params})=>fetch(`http://localhost:5000/create-payment-intent/${params.id}`)
        },
        
      ]
    }



  ]);

  export default router;