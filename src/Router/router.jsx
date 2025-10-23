import { createBrowserRouter } from "react-router-dom";
import Layout from "../Layout/Layout";
import Location from "../Components/Location/Location";
import Home from "../Components/Home/Home";
import Login from "../Components/DashBoard/Login/Login";
import AuthLayout from "../Layout/AuthLayout";
import DashboardLayout from "../Layout/DashboardLayout";
import DashBoard from "../Components/DashBoard/DashBoard";
import UserTable from "../Components/DashBoard/UserTable/UserTable";
import EditHeroSection from "../Components/DashBoard/EditHeroSection/EditHeroSection";
import ProfileSettings from "../Components/DashBoard/ProfileSettings/ProfileSettings";
import teamMemberEdit from "../Components/DashBoard/TeamMemberEdit/teamMemberEdit";
import EditProjectSection from "../Components/DashBoard/TeamMemberEdit/EditProjectSection/EditProjectSection";
import EditSevices from "../Components/DashBoard/EditServices/EditSevices";
import AboutEdit from "../Components/DashBoard/AboutEdit/AboutEdit";
import message from "../Components/DashBoard/Message/message";
import UserCreate from "../Components/DashBoard/UserCreate/UserCreate";
import PrivateRoute from "../PrivateRoute/PrivateRoute";



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
        path: "/dashboard",
        element: <PrivateRoute><DashboardLayout></DashboardLayout></PrivateRoute>,
        children: [
            {
                index: true,
                Component: DashBoard,
                
            },
            {
                path:"user",
                Component: UserTable,
                
            },
            {
                path:"createUser",
                Component: UserCreate,
                
            },
            {
                path:"hero",
                Component: EditHeroSection,
                
            },
            {
                path:"profileSetting",
                Component: ProfileSettings,
                
            },
            {
                path:"teamMemberEdit",
                Component: teamMemberEdit,
                
            },
            {
                path:"projectEdit",
                Component: EditProjectSection,
                
            },
            {
                path:"serviceEdit",
                Component: EditSevices,
                
            },
            {
                path:"aboutEdit",
                Component: AboutEdit,
                
            },
            {
                path:"message",
                Component: message,
                
            },
           
        ]
    },
]);

export default router