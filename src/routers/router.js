import {
    createBrowserRouter,
  } from "react-router-dom";
import App from "../App";
import Home from '../page/Home';
import Shop from '../page/Shop';
import SingleBook from '../page/SingleBook';
import DashboardLayout from '../dashboard/DashboardLayout';
import Dashboard from "../dashboard/Dashboard";
import UpLoardBook from '../dashboard/UpLoadBook';
import ManageBook from "../dashboard/ManageBooks";
import EditBooks from "../dashboard/EditBooks";
import SignUP from "../page/Signup";
import Login from "../page/Login";
import Favourite from "../page/favourite";
import Search from "../page/Search";

  
const router = createBrowserRouter([
    {
      path: "/",
      element: <App/>,
      children: [
        {
            path:'/',
            element: <Home/>
        },
        {
            path:"/shop",
            element: <Shop/>
        },
        {
            path:"/book/:_id",
            element: <SingleBook/>
        },
        {
            path:"/Favourite",
            element:<Favourite/>
        },
        {
            path:"/Search",
            element:<Search/>
        }
      ]
    },
    {
        path: "/admin/dashboard",
        element: <DashboardLayout/>,
        children: [
            { 
                path: "/admin/dashboard",
                element: <Dashboard/>
            },
            {
                path: "/admin/dashboard/upload",
                element: <UpLoardBook/>
            },
            {
                path: "/admin/dashboard/manage",
                element: <ManageBook/>
            },
            {
                path: "/admin/dashboard/edit-books/:id",
                element: <EditBooks/>,
                loader: ({params}) => fetch(`http://localhost:5000/books/${params.id}`)
            }
        ]
    },{
        path: "sign-up",
        element:<SignUP/>
    },{
        path: "Login",
        element: <Login/>
    }
  ]);

  export default router;