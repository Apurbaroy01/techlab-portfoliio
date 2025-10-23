import NavBar from '../Share/Navbar/NavBar';
import { Outlet } from 'react-router-dom';
import Footer from '../Share/Footer/Footer';
import Dialbar from '../Share/Dialbar/Dialbar';
import NavBars from '../Share/Navbar/NavBars';

const Layout = () => {
    return (
        <div className="flex flex-col min-h-screen">
            <NavBar />
            {/* <NavBars></NavBars> */}
            <main className="flex-grow">
                <Outlet />
            </main>
            <Dialbar></Dialbar>
            <Footer />
        </div>
    );
};

export default Layout;
