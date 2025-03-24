import {
    createBrowserRouter,
   
  } from "react-router-dom";
import MainLayouts from "../layouts/MainLayouts";
import Home from "../pages/Home/Home";
import Register from "../pages/Authentication/Register";
import Login from "../pages/Authentication/Login";

  const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayouts></MainLayouts>,
      children:[{
        path:'/',
        element:<Home></Home>
      },
    {
        path:'register',
        element:<Register></Register>
    },
    {
        path:'login',
        element:<Login></Login>
    },]
    },
  ]);

  export default router;