import React from 'react';
import HomeNavBar from '../Components/NavBar.js';
import RegisterForm from '../Components/Forms/RegisterForm.js';
import Footer from '../Components/Footer';
import './mdformlabel.css';

const RegisterPage = () => (
    <div style={{ position:"relative", minHeight:"100vh" }}>
        <header><HomeNavBar/></header>
        <div><RegisterForm/></div>
        <Footer/>

    </div>
);

export default RegisterPage;
