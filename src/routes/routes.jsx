import {
    createBrowserRouter,
  } from "react-router-dom";
import Main from "../Layout/Main";
import AllToy from "../pages/AllToy/AllToy";
import Home from "../pages/Home/Home";
import Login from "../pages/LogIn/Login";
import Register from "../pages/Register/Register";
import SingleToy from "../pages/SingleToy/SingleToy";

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
            element: <SingleToy></SingleToy>,
            loader : ({params})=> fetch(`http://localhost:5000/toys/${params.id}`)
        },
      ]
    },
  ]);

  export default router