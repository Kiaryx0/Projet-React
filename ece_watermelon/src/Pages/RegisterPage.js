import React from 'react';
import HomeNavBar from '../Components/NavBar.js';
import RegisterForm from './Components/Forms/RegisterForm.js';
import Footer from '../Components/Footer';
import "./acss.css";

const RegisterPage = () => (
    <div className="background" style={{ position:"relative", minHeight:"100vh" }}>
        <header><HomeNavBar/></header>
        <div><RegisterForm/></div>
        <Footer/>
    </div>
);

export default RegisterPage;
