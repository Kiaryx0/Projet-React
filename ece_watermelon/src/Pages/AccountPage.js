import React from 'react';
import NavBar from './Components/NavBar'

import Footer from './Components/Footer';
import AccountContent from './Components/AccountContent';

const AccountPage = () => (
    <div>
        <header><NavBar/></header>
        <AccountContent/>
        <Footer/>
    </div>
);

export default AccountPage;