import {
    createBrowserRouter,
  } from "react-router-dom";
import Main from "../Layout/Main";
import AddToy from "../pages/AddToy/AddToy";
import AllToy from "../pages/AllToy/AllToy";
import Home from "../pages/Home/Home";
import Login from "../pages/LogIn/Login";
import MyToy from "../pages/MyToy/MyToy";
import Register from "../pages/Register/Register";
import SingleToy from "../pages/SingleToy/SingleToy";
import PrivateRoute from "./PrivateRoute";

  const router = createBrowserRouter([
    {
      path: "/",
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
            path: "/toys",
            element: <AllToy></AllToy>,
            loader : ()=> fetch("http://localhost:5000/toys")
        },
        {
            path: "/toys/:id",
            element: <PrivateRoute><SingleToy></SingleToy></PrivateRoute>,
            loader : ({params})=> fetch(`http://localhost:5000/toys/${params.id}`)
        },
        {
            path: "/addToy",
            element: <PrivateRoute><AddToy></AddToy></PrivateRoute>
        },
        {
            path: "/myToy",
            element: <PrivateRoute><MyToy></MyToy></PrivateRoute>
        },
      ]
    },
  ]);

  export default router