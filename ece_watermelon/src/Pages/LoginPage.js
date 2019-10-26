import React from 'react';
import HomeNavBar from '../Components/NavBar.js';
import LoginForm from '../Components/Forms/LoginForm.js';
import Footer from '../Components/Footer';
import './acss.css'


const LoginPage = () => (
    <div style={{minHeight:"100vh", position:"relative"}}>
        <header><HomeNavBar/></header>
            <div><LoginForm/></div>
            <Footer/>
    </div>
);

export default LoginPage;
