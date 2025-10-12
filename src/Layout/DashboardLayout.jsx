import { NavLink, Outlet, useNavigate } from "react-router-dom";
import {
    FaHome,
    FaUserCheck,
    FaSignOutAlt,
    FaChessQueen,
    FaHandHoldingHeart,
} from "react-icons/fa";
import Swal from "sweetalert2";
import useAuth from "../Hooks/useAuth";
import { FcAbout } from "react-icons/fc";
import { FaUserGroup } from "react-icons/fa6";
import { IoMdSettings } from "react-icons/io";
import { MdOutlineManageAccounts } from "react-icons/md";
import { SiPolymerproject } from "react-icons/si";


const DashboardLayout = () => {
    const { logOut } = useAuth() || {}; // your logout function (if available)
    const navigate = useNavigate();

    const linkClasses = ({ isActive }) =>
        `flex items-center gap-3 px-4 py-2 rounded-lg transition-colors duration-200
     ${isActive ? "bg-blue-100 font-semibold text-blue-700" : "hover:bg-gray-200"}`;

    const handleLogout = () => {
        Swal.fire({
            title: "Are you sure you want to logout?",
            icon: "warning",
            showCancelButton: true,
            confirmButtonText: "Yes, Logout",
            cancelButtonText: "Cancel",
            confirmButtonColor: "#d33",
            cancelButtonColor: "#3085d6",
        }).then((result) => {
            if (result.isConfirmed) {
                if (logOut)
                    logOut();
                navigate("/")
                Swal.fire("Logged Out!", "You have been logged out successfully.", "success");
            }
        });
    };

    return (
        <div className="drawer lg:drawer-open">
            <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
            {/* Main Content */}
            <div className="drawer-content flex flex-col">
                {/* Mobile Navbar */}
                <div className="navbar bg-base-300 w-full lg:hidden">
                    <div className="flex-none lg:hidden">
                        <label
                            htmlFor="my-drawer-2"
                            aria-label="open sidebar"
                            className="btn btn-square btn-ghost"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                className="inline-block h-6 w-6 stroke-current"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h16M4 18h16"
                                ></path>
                            </svg>
                        </label>
                    </div>
                </div>

                {/* Main Outlet */}
                <Outlet />
            </div>

            {/* Sidebar */}
            <div className="drawer-side">
                <label
                    htmlFor="my-drawer-2"
                    aria-label="close sidebar"
                    className="drawer-overlay"
                ></label>
                <ul className="menu bg-base-200 text-base-content min-h-full w-80 p-4 flex flex-col justify-between">
                    {/* Sidebar Top */}
                    <div>
                        <h1 className="text-3xl font-bold mb-6">TechLabs</h1>

                        <div className="flex flex-col space-y-2">
                            <NavLink to="/" className={linkClasses}>
                                <FaHome /> Home
                            </NavLink>
                            <NavLink to="/dashboard/user" className={linkClasses}>
                                <FaUserCheck /> User
                            </NavLink>
                            <NavLink to="/dashboard/hero" className={linkClasses}>
                                <FaChessQueen /> Hero Edit
                            </NavLink>
                            <NavLink to="/dashboard/projectEdit" className={linkClasses}>
                                <SiPolymerproject /> Project
                            </NavLink>
                            <NavLink to="/dashboard/hero" className={linkClasses}>
                                <MdOutlineManageAccounts /> About Edit
                            </NavLink>
                            <NavLink to="/dashboard/teamMemberEdit" className={linkClasses}>
                                <FaUserGroup /> Team Members
                            </NavLink>
                            <NavLink to="/dashboard/hero" className={linkClasses}>
                                <FaHandHoldingHeart /> Services
                            </NavLink>
                            <NavLink to="/dashboard/profileSetting" className={linkClasses}>
                                <IoMdSettings /> Setting
                            </NavLink>
                        </div>
                    </div>

                    {/* Sidebar Bottom (Logout Button) */}
                    
                    <div className="border-t pt-4">
                        <button
                            onClick={handleLogout}
                            className="btn btn-error w-full flex items-center justify-center gap-2 text-white"
                        >
                            <FaSignOutAlt />
                            Logout
                        </button>
                    </div>
                </ul>
            </div>
        </div>
    );
};

export default DashboardLayout;
