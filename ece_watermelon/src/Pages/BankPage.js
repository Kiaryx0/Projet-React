import React from 'react';
import NavBar from '../Components/NavBar'
import BankContent from '../Components/BankContent'
import Footer from '../Components/Footer';


const BankPage = () => (
    <div style={{position: "relative"}}>
        <header><NavBar/></header>
        <div><BankContent/></div>
        <Footer/>
    </div>
);

export default BankPage;