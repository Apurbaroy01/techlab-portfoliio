import { Link, NavLink } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";
import { HiOutlineMenuAlt1 } from "react-icons/hi";
import { motion } from "framer-motion";

const Navbar = () => {
  const { user } = useAuth();

  const Navitem = (
    <>
      {user && (
        <li>
          <NavLink
            to="/dashboard"
            className="text-sm font-medium hover:text-teal-400 transition-colors duration-300"
          >
            Admin
          </NavLink>
        </li>
      )}
      <li>
        <a
          href="/"
          className="text-sm font-medium hover:text-teal-400 transition-colors duration-300"
        >
          Home
        </a>
      </li>
      <li>
        <a
          href="#about"
          className="text-sm font-medium hover:text-teal-400 transition-colors duration-300"
        >
          About
        </a>
      </li>
      <li>
        <a
          href="#projects"
          className="text-sm font-medium hover:text-teal-400 transition-colors duration-300"
        >
          Projects
        </a>
      </li>
      <li>
        <a
          href="#services"
          className="text-sm font-medium hover:text-teal-400 transition-colors duration-300"
        >
          Services
        </a>
      </li>
      <li>
        <a
          href="#contact"
          className="text-sm font-medium hover:text-teal-400 transition-colors duration-300"
        >
          Contact
        </a>
      </li>
    </>
  );

  return (
    <motion.nav
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="navbar fixed top-0 left-0 w-full z-50 border-b border-white/10 bg-white/10 backdrop-blur-xl shadow-lg text-white font-[Poppins]"
    >
      {/* ✅ Left Section — Logo */}
      <div className="navbar-start flex items-center gap-3">
        {/* Drawer for Mobile */}
        <div className="drawer">
          <input id="my-drawer-1" type="checkbox" className="drawer-toggle" />
          <div className="drawer-content">
            <label
              htmlFor="my-drawer-1"
              className="btn btn-ghost text-white text-2xl lg:hidden"
            >
              <HiOutlineMenuAlt1 />
            </label>
          </div>
          <div className="drawer-side">
            <label
              htmlFor="my-drawer-1"
              aria-label="close sidebar"
              className="drawer-overlay"
            ></label>
            <ul className="menu bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 text-gray-200 min-h-full w-72 p-5 space-y-4">
              <h2 className="text-xl font-semibold text-teal-400 mb-3 border-b border-gray-600 pb-2">
                TechLabs Menu
              </h2>
              {Navitem}
            </ul>
          </div>
        </div>

        {/* 🌈 Logo */}
        <Link
          to="/"
          className="flex items-center text-left gap-2 text-lg md:text-xl font-bold"
        >
          <span className="bg-gradient-to-r from-teal-400 to-indigo-400 bg-clip-text text-transparent">
            TechLabs
          </span>
        </Link>
      </div>

      {/* ✅ Center Nav (Desktop) */}
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal gap-6 px-1">{Navitem}</ul>
      </div>

      {/* ✅ Right Section (Empty for clean layout) */}
      <div className="navbar-end"></div>
    </motion.nav>
  );
};

export default Navbar;
