import React, { Component } from "react";
import logo from '../Pictures/logo.png';
import { getSessionUser, logoutUser } from "../Database/DatabaseSession";
import {
    MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavItem, MDBNavLink, MDBNavbarToggler, MDBCollapse, MDBIcon
} from "mdbreact";

class NavBar extends Component {

    constructor(props) {
        super(props);
        this.state = { isOpen: false };
        this.content = this.content.bind(this);
    }

    toggleCollapse = () => {
        this.setState({ isOpen: !this.state.isOpen });
    }

    content() {

        var user = getSessionUser();

        // If the user isn't connected, show login / register navbar
        if (user === null) {
            return (
                <MDBNavbarNav right style={{ marginRight: '20px' }}>
                    <MDBNavItem>
                        <MDBNavLink to="/login" className="black-text" style={{ fontSize: '20px', fontWeight:"400"}}>Login</MDBNavLink>
                    </MDBNavItem>
                    <MDBNavItem>
                        <MDBNavLink to="/register" className="black-text" style={{ fontSize: '20px', fontWeight:"400"}}>Register</MDBNavLink>
                    </MDBNavItem>
                </MDBNavbarNav>
            );
        }
        // If an user is connected, show user navbar
        else{
            return (
                <MDBNavbarNav right style={{ marginRight: '20px' }}>
                    <MDBNavItem>
                        <p className="dark-grey-text nav-link Ripple-parent" style={{ fontSize: '20px', paddingRight:'10px'}}>Welcome {user.first_name} !</p>
                    </MDBNavItem>
                    <MDBNavItem>
                        <MDBNavLink to="/account" className="black-text" style={{ fontSize: '20px', fontWeight:"400"}}>Account</MDBNavLink>
                    </MDBNavItem>
                    <MDBNavItem>
                        <MDBNavLink to="/wallet" className="black-text" style={{ fontSize: '20px', fontWeight:"400"}}>Wallet</MDBNavLink>
                    </MDBNavItem>
                    <MDBNavItem>
                        <MDBNavLink to="/" onClick={logoutUser()}>
                            <MDBIcon className="nav-link black-text" icon="power-off" size="lg"/>
                        </MDBNavLink>
                    </MDBNavItem>
                </MDBNavbarNav>
            );
        }
    }

    render() {

        return (
            <MDBNavbar className="tempting-azure-gradient" dark expand="md" style={{ width: '100vw' }}>

                <MDBNavLink to="/">
                    <MDBNavbarBrand >
                        <img src={logo} alt="" style={{ width: '50px', height: '50px' }} />
                    </MDBNavbarBrand>
                    <MDBNavbarBrand>
                        <strong className="black-text" style={{ fontSize: '25px' }}>ECE WaterMelon</strong>
                    </MDBNavbarBrand>
                </MDBNavLink>

                <MDBNavbarToggler onClick={this.toggleCollapse} />
                <MDBCollapse id="navbarCollapse3" isOpen={this.state.isOpen} navbar>

                    {this.content()}
                </MDBCollapse>
            </MDBNavbar>
        );
    }
}

export default NavBar;