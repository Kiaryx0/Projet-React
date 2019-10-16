import React, { Component } from "react";
import logo from './Pictures/logo.png';
import {
    MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavItem, MDBNavLink, MDBNavbarToggler, MDBCollapse
} from "mdbreact";

class NavBar extends Component {

    constructor(props) {
        super(props);
        this.state = { isOpen: false };
    }

    toggleCollapse = () => {
        this.setState({ isOpen: !this.state.isOpen });
    }

    content(){
        
    }

    render() {

        return (
            <MDBNavbar className="tempting-azure-gradient" dark expand="md" style={{width:'100vw'}}>
                
                <MDBNavLink to="/">
                <MDBNavbarBrand >
                    <img src={logo} alt="" style={{ width: '50px', height: '50px' }} />
                </MDBNavbarBrand>
                    <MDBNavbarBrand>
                        <strong className="black-text" style={{fontSize:'25px'}}>ECE WaterMelon</strong>
                    </MDBNavbarBrand>
                </MDBNavLink>
                
                <MDBNavbarToggler onClick={this.toggleCollapse} />
                <MDBCollapse id="navbarCollapse3" isOpen={this.state.isOpen} navbar>
                    <MDBNavbarNav right style={{marginRight:'20px'}}>
                        <MDBNavItem>
                            <MDBNavLink to="/login" className="black-text" style={{fontSize:'20px'}}>Login</MDBNavLink>
                        </MDBNavItem>
                        <MDBNavItem>
                            <MDBNavLink to="/register" className="black-text" style={{fontSize:'20px'}}>Register</MDBNavLink>
                        </MDBNavItem>
                    </MDBNavbarNav>
                </MDBCollapse>
            </MDBNavbar>
        );
    }
}

export default NavBar;