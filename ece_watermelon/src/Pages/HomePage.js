import React from 'react';
import NavBar from '../Components/NavBar'
import HomeCarousel from '../Components/HomeCarousel';
import HomeContent from '../Components/HomeContent';
import Footer from '../Components/Footer';

const HomePage = () => (
    <div style={{position:"relative"}}>
        <header><NavBar/></header>
        <div><HomeCarousel />
        <HomeContent />
        </div>
        <Footer/>
    </div>
);

export default HomePage;
