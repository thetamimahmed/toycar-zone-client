import {
    createBrowserRouter,
  } from "react-router-dom";
import Main from "../Layout/Main";
import AddToy from "../pages/AddToy/AddToy";
import AllToy from "../pages/AllToy/AllToy";
import Blogs from "../pages/Blogs/Blogs";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import Home from "../pages/Home/Home";
import Login from "../pages/LogIn/Login";
import MyToy from "../pages/MyToy/MyToy";
import UpdateToy from "../pages/MyToy/UpdateToy";
import Register from "../pages/Register/Register";
import SingleToy from "../pages/SingleToy/SingleToy";
import PrivateRoute from "./PrivateRoute";

  const router = createBrowserRouter([
    {
      path: "/",
      errorElement: <ErrorPage></ErrorPage>,
      element: <Main></Main>,
      children: [
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
            path: "/blogs",
            element: <Blogs></Blogs>
        },
        {
            path: "/toys",
            element: <AllToy></AllToy>,
            loader : ()=> fetch("https://toycar-zone-server.vercel.app/toys")
        },
        {
            path: "/toys/:id",
            element: <PrivateRoute><SingleToy></SingleToy></PrivateRoute>,
            loader : ({params})=> fetch(`https://toycar-zone-server.vercel.app/toys/${params.id}`)
        },
        {
            path: "/addToy",
            element: <PrivateRoute><AddToy></AddToy></PrivateRoute>
        },
        {
            path: "/myToy",
            element: <PrivateRoute><MyToy></MyToy></PrivateRoute>
        },
        {
            path: "/updateToy/:id",
            element: <UpdateToy></UpdateToy>,
            loader : ({params})=> fetch(`https://toycar-zone-server.vercel.app/toys/${params.id}`)
        },
      ]
    },
  ]);

  export default router