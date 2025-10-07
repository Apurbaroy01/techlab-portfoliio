import { createBrowserRouter } from "react-router-dom";
import Layout from "../Layout/Layout";
import Location from "../Components/Location/Location";
import Home from "../Components/Home/Home";
import Login from "../Components/DashBoard/Login/Login";
import AuthLayout from "../Layout/AuthLayout";
import DashboardLayout from "../Layout/DashboardLayout";
import DashBoard from "../Components/DashBoard/DashBoard";


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
                path:"location",
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
    {
        path: "/",
        Component: DashboardLayout,
        children: [
            {
                path:"dashboard",
                Component: DashBoard,
                
            },
           
        ]
    },
]);

export default router