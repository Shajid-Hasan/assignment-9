import React from 'react';
import MyContainer from '../Components/MyContainer';
import Banner from './Banner';
import { useLoaderData } from 'react-router';

const Home = () => {
    const data = useLoaderData()
    console.log(data)
    return (
        <>
            <main>
                <MyContainer>
                    <Banner />

                </MyContainer>
            </main>
        </>
    );
};

export default Home;