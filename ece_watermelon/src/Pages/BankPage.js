import React from 'react';
import NavBar from './Components/NavBar'
import BankContent from './Components/BankContent'
import Footer from './Components/Footer';

const BankPage = () => (
    <div>
        <header><NavBar/></header>
        <BankContent/>
        <Footer/>
    </div>
);

export default BankPage;