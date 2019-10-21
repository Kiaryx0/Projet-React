import React from 'react';
import {Component} from 'react';
import { Route } from 'react-router-dom';
import HomePage from './Pages/HomePage';
import LoginPage from './Pages/LoginPage';
import RegisterPage from './Pages/RegisterPage';
import WalletPage from './Pages/WalletPage';
import BankPage from './Pages/BankPage';
import AccountPage from './Pages/AccountPage';
import TransferPage from './Pages/TransferPage';
import importUsers from './Database/DatabaseImport'
import loginUser from './Database/DatabaseSession';


class App extends Component{

    constructor(props){
        super(props);
        importUsers();
        loginUser("louis.deveze@edu.ece.fr", "framboise");
    }

    componentDidMount(){
        document.title = "ECE Watermelon"
      }

    render(){
        return (
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
    }
    
}
        
export default App;
