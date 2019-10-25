import React, { Component } from 'react';
import NavBar from '../Components/NavBar'

import Footer from '../Components/Footer';
import AccountContent from '../Components/AccountContent';

export default class AccountPage extends Component{
   
    constructor(props){
        super(props);
        this.state = {
            reload: false
        }
        this.refresh = this.refresh.bind(this);
    }

    /**
     * Callback used to refres navbar when changing name of session user
     */
    refresh(){
        this.setState({
            reload: true
        })
    }

    render(){
        return (
            <div style={{position: 'relative'}}>
                <header><NavBar/></header>
                <div><AccountContent refresh={this.refresh}/></div>
                <Footer/>
            </div>
        );
    }
}
