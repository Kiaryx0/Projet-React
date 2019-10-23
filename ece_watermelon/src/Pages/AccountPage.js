import React from 'react';
import NavBar from '../Components/NavBar'

import Footer from '../Components/Footer';
import AccountContent from '../Components/AccountContent';

const AccountPage = () => (
    <div style={{position: 'relative'}}>
        <header><NavBar/></header>
        <div><AccountContent/></div>
        <Footer/>
    </div>
);

export default AccountPage;