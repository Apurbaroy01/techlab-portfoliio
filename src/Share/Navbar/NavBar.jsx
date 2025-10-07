
import { Link, NavLink } from 'react-router-dom';


const Navbar = () => {




    const Navitem = <>
        <li><NavLink to="#">Home</NavLink></li>
        <li><NavLink to="#">Contact</NavLink></li>
        <li><NavLink to="/location">Location</NavLink></li>
        <li><NavLink to="#">About</NavLink></li>

    </>
    return (
        <div className="navbar  shadow-sm justify-between fixed top-0 left-0 w-full z-50 bg-transparent text-white border-b border-gray-700 backdrop-blur-lg p-3">
            <div className="navbar-start ">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                        {Navitem}
                    </ul>
                </div>
                <div className=" text-xl p-1">
                    <span  className='relative text-5xl font-bold text-teal-500'>T</span>
                    <p className='absolute font-semibold top-8 left-10 text-2xl '>ECHLABS</p>
                </div>
            </div>

            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {Navitem}
                </ul>
            </div>

        </div>
    );
};

export default Navbar;