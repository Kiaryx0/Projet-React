import React from 'react';
import HomeNavBar from './Components/HomeNavBar.js';
import RegisterForm from './Components/Forms/RegisterForm.js';
import "./acss.css";

const RegisterPage = () => (
    <div className="background">
        <header><HomeNavBar/></header>
        <div><RegisterForm/></div>
    </div>
);

export default RegisterPage;
