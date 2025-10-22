import React from 'react';
import { Outlet } from 'react-router';
import NavBar from '../Components/NavBar';

const MainLayout = () => {
    return (
        <>
            <NavBar></NavBar>
            <Outlet />
        </>
    );
};

export default MainLayout;