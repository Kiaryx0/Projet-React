import React from 'react';
import NavBar from '../Components/NavBar'
import HomeCarousel from '../Components/HomeCarousel';
import HomeContent from '../Components/HomeContent';
import Footer from '../Components/Footer';

const HomePage = () => (
    <div>
        <header><NavBar /></header>
        <HomeCarousel />
        <HomeContent />
        <Footer/>
    </div>
);

export default HomePage;
