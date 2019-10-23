import React from 'react';
import "./acss.css";
import HomeNavBar from '../Components/NavBar.js';
import LoginForm from '../Components/Forms/LoginForm.js';
import Footer from '../Components/Footer';


const LoginPage = () => (
    <div className="background" style={{minHeight:"100vh"}}>
        <header><HomeNavBar/></header>
        <div><LoginForm/></div>
        <Footer/>
    </div>
);

export default LoginPage;
