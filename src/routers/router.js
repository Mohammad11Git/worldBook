import {
    createBrowserRouter,
  } from "react-router-dom";
import App from "../App";
import About from "../page/About";
import Blog from "../page/Blog";
import Home from '../page/Home';
import Shop from '../page/Shop';
import SingleBook from '../page/SingleBook';
import DashboardLayout from '../dashboard/DashboardLayout';
import Dashboard from "../dashboard/Dashboard";
import UpLoardBook from '../dashboard/UpLoadBook';
import ManageBook from "../dashboard/ManageBooks";
import EditBooks from "../dashboard/EditBooks";

  
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
            path:"/about",
            element: <About/>
        },
        {
            path:"/blog",
            element: <Blog/>
        },
        {
            path:"/book/:_id",
            element: <SingleBook/>
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
    }
  ]);

  export default router;