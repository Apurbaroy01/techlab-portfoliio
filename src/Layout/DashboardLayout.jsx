import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../Share/Navbar/NavBar';
import Footer from '../Share/Footer/Footer';
import Backround from '../Components/TechLabsProfile/Backround';

const DashboardLayout = () => {
    return (
        <div className="flex flex-col min-h-screen">
            {/* Content area */}
            <Backround className="flex-1 flex flex-col">
                <Navbar />
                
                <main className="flex-1">
                    <Outlet />
                </main>
            </Backround>

            {/* Footer always at the bottom */}
            <Footer />
        </div>
    );
};

export default DashboardLayout;
