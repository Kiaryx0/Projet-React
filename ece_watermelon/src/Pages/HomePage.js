import React from 'react';
import HomeNavBar from './Components/Home/HomeNavBar'
import HomeCarousel from './Components/Home/HomeCarousel';
import Footer from './Components/Footer';
import HomeContent from './Components/Home/HomeContent';
import { MDBContainer } from 'mdbreact';

const HomePage = () => (


    <div style={{ minHeight: '100vh', position: 'relative' }}>
        <header><HomeNavBar /></header>
        <HomeCarousel />
        <HomeContent />
        <MDBContainer fluid>

        </MDBContainer>
        <Footer/>
    </div>
);


export default HomePage;
