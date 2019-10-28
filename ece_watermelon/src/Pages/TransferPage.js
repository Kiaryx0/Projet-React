import React from 'react';
import NavBar from '../Components/NavBar';
import TransferContent from '../Components/TransferContent.js';
import Footer from '../Components/Footer';
import './mdformlabel.css';

const TransferPage = () => (
    <div style={{position:"relative", minHeight: "100vh"}}>
        <header><NavBar/></header>
        <div><TransferContent/></div>
        <Footer/>
    </div>
);

export default TransferPage;