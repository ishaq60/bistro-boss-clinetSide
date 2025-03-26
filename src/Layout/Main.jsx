import React from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Footer from '../Pages/share/Footer';
import Navbar from '../Pages/share/Navbar';

const Main = () => {
    const location=useLocation()
    console.log(location)
    const noheaderfooter=location.pathname.includes('login') ||
     location.pathname.includes('register')
    return (
        <div>
            {noheaderfooter|| <Navbar/>}
            <Outlet/>
            {noheaderfooter|| <Footer/>}
            

        </div>
    );
};

export default Main;