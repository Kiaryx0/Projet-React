import React from 'react';
import { Route } from 'react-router-dom';
import HomePage from './Pages/HomePage';
import LoginPage from './Pages/LoginPage';
import RegisterPage from './Pages/RegisterPage';
import WalletPage from './Pages/WalletPage';
import BankPage from './Pages/BankPage';
import AccountPage from './Pages/AccountPage';
import TransferPage from './Pages/TransferPage';


const App = () => (
    <div>
        <Route path="/" exact component={HomePage} />
        <Route path="/login" exact component={LoginPage}/>
        <Route path="/register" exact component={RegisterPage}/>
        <Route path="/wallet" exact component={WalletPage}/>
        <Route path="/bank" exact component={BankPage}/>
        <Route path="/account" exact component={AccountPage}/>
        <Route path="/transfer" exact component={TransferPage}/>
    </div>
);
        
export default App;
