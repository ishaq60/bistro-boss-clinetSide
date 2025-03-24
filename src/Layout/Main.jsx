import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../Pages/share/Footer';
import Navbar from '../Pages/share/Navbar';

const Main = () => {
    return (
        <div>
            <Navbar/>
            <Outlet/>
            <Footer/>

        </div>
    );
};

export default Main;