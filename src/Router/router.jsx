import { createBrowserRouter } from "react-router-dom";
import Layout from "../Layout/Layout";
import Location from "../Components/Location/Location";
import Home from "../Components/Home/Home";
import DashBoard from "../Layout/AuthLayout";
import Login from "../Components/DashBoard/Login/Login";
import AuthLayout from "../Layout/AuthLayout";


const router = createBrowserRouter([
    {
        path: "/",
        Component: Layout,
        children: [
            {
                index: true,
                Component: Home
                
            },
            {
                path:"/location",
                Component: Location
            }
        ]
    },
    {
        path: "/",
        Component: AuthLayout,
        children: [
            {
                path:"login",
                Component: Login,
                
            }
           
        ]
    },
]);

export default router