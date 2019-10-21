import React from 'react';
import "./acss.css";
import HomeNavBar from './Components/HomeNavBar.js';
import LoginForm from './Components/Forms/LoginForm.js';


const LoginPage = () => (
    <div className="background">
        <header><HomeNavBar/></header>
        <div><LoginForm/></div>
    </div>
);

export default LoginPage;
