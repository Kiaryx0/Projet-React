import React from 'react';
import Footer from './Components/Footer';
import HomeNavBar from './Components/HomeNavBar';
import WalletContent from './Components/WalletContent';

const WalletPage = () => (


    <div style={{ minHeight: '100vh', position: 'relative' }}>
        <header><HomeNavBar /></header>
        <WalletContent/>
        <Footer/>
    </div>
);


export default WalletPage;