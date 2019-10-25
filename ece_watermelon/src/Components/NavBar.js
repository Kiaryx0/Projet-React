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

    /**
     * Toggle the hamburger when necessary
     */
    toggleCollapse = () => {
        this.setState({ isOpen: !this.state.isOpen });
    }

    /**
     * This function generates the navbar items in function of the user connected
     * If no user is connected yet, the function returns a login / register component
     */
    content() {
        // Get the logged User
        var user = getSessionUser();

        // If the user isn't connected, show login / register navbar
        if (user === null) {
            return (
                <MDBNavbarNav right style={{ marginRight: '15px' }}>
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
                <MDBNavbarNav right style={{ marginRight: '15px' }}>
                    <MDBNavItem>
                        <p className="dark-grey-text nav-link Ripple-parent" style={{ fontSize: '20px'}}>Welcome {user.first_name} !</p>
                    </MDBNavItem>
                    
                    <MDBNavItem>
                        <MDBNavLink to="/account" className="black-text" style={{ fontSize: '20px', fontWeight:"400"}}>Account</MDBNavLink>
                    </MDBNavItem>
                    <MDBNavItem>
                        <MDBNavLink to="/wallet" className="black-text" style={{ fontSize: '20px', fontWeight:"400"}}>Wallet</MDBNavLink>
                    </MDBNavItem>
                    <MDBNavItem>
                        <MDBNavLink to="/" onClick={() => logoutUser()}>
                            <MDBIcon className="nav-link black-text" icon="power-off" size="lg"/>
                        </MDBNavLink>
                    </MDBNavItem>
                </MDBNavbarNav>
            );
        }
    }

    /**
     * Render method of the NavBar class
     */
    render() {

        return (
            <MDBNavbar className="tempting-azure-gradient" dark expand="md" style={{ minWidth: '100%' }}>

                <MDBNavLink to="/">
                    <MDBNavbarBrand >
                        <img src={logo} alt="" style={{ width: '40px', height: '40px' }} />
                    </MDBNavbarBrand>
                    <MDBNavbarBrand>
                        <strong className="black-text" style={{ fontSize: '20px' }}>ECE WaterMelon</strong>
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