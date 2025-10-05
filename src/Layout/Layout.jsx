import NavBar from '../Share/Navbar/NavBar';
import { Outlet } from 'react-router-dom';
import Footer from '../Share/Footer/Footer';

const Layout = () => {
    return (
        <div className="flex flex-col min-h-screen">
            <NavBar />
            <main className="flex-grow">
                <Outlet />
            </main>
            <Footer />
        </div>
    );
};

export default Layout;
