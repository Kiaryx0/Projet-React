import React from 'react';
import HomeNavBar from './Components/HomeNavBar'
import HomeCarousel from './Components/HomeCarousel';
import Footer from './Components/Footer';
import HomeContent from './Components/HomeContent';

const HomePage = () => (
    <div style={{ minHeight: '100vh', position: 'relative' }}>
        <header><HomeNavBar /></header>
        <HomeCarousel />
        <HomeContent />
        <Footer/>
    </div>
);

export default HomePage;
