import React from 'react';
import Navbar from '../Components/Navbar';
import { Outlet } from 'react-router';
import Footer from '../Components/Footer';

const RootLaout = () => {
    return (
        <div>
            <Navbar />
            <div className='min-h-screen bg-gray-200'>
                <Outlet />
            </div>
            <Footer />
        </div>
    );
};

export default RootLaout;