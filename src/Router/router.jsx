import { createBrowserRouter } from "react-router-dom";
import Layout from "../Layout/Layout";
import Location from "../Components/Location/Location";
import Home from "../Components/Home/Home";


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
]);

export default router