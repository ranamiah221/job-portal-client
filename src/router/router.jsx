import {
  createBrowserRouter,

} from "react-router-dom";
import MainLayouts from "../layouts/MainLayouts";
import Home from "../pages/Home/Home";
import Register from "../pages/Authentication/Register";
import Login from "../pages/Authentication/Login";
import JobDetails from "../pages/JobDetails/JobDetails";
import PrivateRoute from "./PrivateRoute";
import ApplyJob from "../pages/ApplyJob/ApplyJob";
import MyApplications from "../pages/MyApplications/MyApplications";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayouts></MainLayouts>,
    children: [{
      path: '/',
      element: <Home></Home>
    },
    {
      path: 'register',
      element: <Register></Register>
    },
    {
      path: 'login',
      element: <Login></Login>
    },
    {
      path: 'jobs/:id',
      element: <PrivateRoute><JobDetails></JobDetails></PrivateRoute>,
      loader:({params})=>fetch(`http://localhost:5000/jobs/${params.id}`)
    },
    {
      path: '/applyJob/:id',
      element: <PrivateRoute><ApplyJob></ApplyJob></PrivateRoute>
    },
    {
      path: '/myApplications',
      element: <PrivateRoute><MyApplications></MyApplications></PrivateRoute>
    },

    ]
  },
]);

export default router;