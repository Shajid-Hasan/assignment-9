import React from 'react';
import { Outlet } from 'react-router';
import NavBar from '../Components/NavBar';
import Footer from '../Pages/Footer';
import MyContainer from '../Components/MyContainer';

const MainLayout = () => {
    return (
        <div>
            <NavBar></NavBar>

            <MyContainer>

                <main className='min-h-[calc(100vh-289px)]'>
                    <Outlet />
                </main>
            </MyContainer>

            <Footer></Footer>
        </div >
    );
};

export default MainLayout;