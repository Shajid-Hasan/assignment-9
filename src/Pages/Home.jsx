import React from 'react';
import MyContainer from '../Components/MyContainer';
import Banner from './Banner';

const Home = () => {
    return (
        <div>
            <main>
                <MyContainer>
                    <Banner />
                    <h1 >Welcome home</h1>
                </MyContainer>
            </main>
        </div>
    );
};

export default Home;