import React from 'react';
import HomeNavBar from './Components/Home/HomeNavBar'
import HomeCarousel from './Components/Home/HomeCarousel';
import Footer from './Components/Footer';
import HomeContent from './Components/Home/HomeContent';

const HomePage = () => (


    <div style={{ minHeight: '100%', position: 'relative' }}>
        <header><HomeNavBar /></header>
        <HomeCarousel />
        <div style={{paddingBottom:'70px'}}>
            <HomeContent />
        </div>
        <footer style={{ bottom: '0px', width: '100%', position: 'absolute', height:'50px'}}><Footer /> </footer>
    </div>
);


export default HomePage;
