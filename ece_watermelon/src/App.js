import React from 'react';
import { Route } from 'react-router-dom';
import HomePage from './Pages/HomePage';
import LoginPage from './Pages/LoginPage';
import RegisterPage from './Pages/RegisterPage';
import WalletPage from './Pages/WalletPage';


const App = () => (
    <div>
        <Route path="/" exact component={HomePage} />
        <Route path="/login" exact component={LoginPage}/>
        <Route path="/register" exact component={RegisterPage}/>
        <Route path="/wallet" exact component={WalletPage}/>
    </div>
);
        
export default App;
