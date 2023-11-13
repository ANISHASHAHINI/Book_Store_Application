import {
    createBrowserRouter,
    RouterProvider,
  } from "react-router-dom";
import App from "../App"
import Home from "../home/Home";
import Shop from "../shop/Shop";
import About from "../components/About"
import Blog from "../components/Blog"
import SingleBook from "../shop/SingleBook";
import DashboardLayout from "../dashboard/DashboardLayout";
import UploadBook from "../dashboard/UploadBook";
import MangeBooks from "../dashboard/MangeBooks";
import Editbooks from "../dashboard/Editbooks";
import Register from "../components/Register";
import Login from "../components/Login";
import PrivateRoute from "../privateroute/PrivateRoute";
import Dashboard from "../dashboard/Dashboard";
import Logout from "../components/Logout";




const router = createBrowserRouter([
    {
      path: "/",
      element: <App />,
      children:[
        {
            path: '/',
            element:<Home/>
        },{
          path:"/shop",
          element:<Shop />
        },{
          path:"/about",
          element:<About/>
        },
        {
          path:"/blog",
          element:<Blog/>
        },
        {
          path:"/books/:id",
          element:<SingleBook/>,
          loader:({params}) => fetch(`https://bookstoreappserver.onrender.com/books/${params.id}`)
        }
      ]
    },
    {
      path: "/admin/dashboard",
      element: <DashboardLayout />,
      children:[
        {
          path: "/admin/dashboard",
          element:<PrivateRoute> <Dashboard /> </PrivateRoute>
        },
        {
          path: "/admin/dashboard/upload",
          element: <UploadBook />
        },{
          path: "/admin/dashboard/manage",
          element:<MangeBooks />
        },{
          path: "/admin/dashboard/edit-books/:id",
          element: <Editbooks />,
          loader:({params}) => fetch(`https://bookstoreappserver.onrender.com/books/${params.id}`)
        }
      ]
    },
    {
      path: "sign-up",
      element: <Register/>
    },{
      path:"login",
      element:<Login />
    },{
      path:"logout",
      element:<Logout />
    }
  ]);

  export default  router;