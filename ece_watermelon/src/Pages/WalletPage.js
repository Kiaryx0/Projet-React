import React from 'react';
import Footer from '../Components/Footer';
import NavBar from '../Components/NavBar';
import WalletContent from '../Components/WalletContent';

const WalletPage = () => (


    <div style={{position:"relative"}}>
        <header><NavBar /></header>
        <div><WalletContent/></div>
        <Footer/>
    </div>
);


export default WalletPage;