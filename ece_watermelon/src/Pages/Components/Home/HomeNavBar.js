import React, { Component } from "react";
import { Link } from 'react-router-dom'
import logo from './Pictures/logo.png'
import {
    MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavItem, MDBNavLink, MDBNavbarToggler, MDBCollapse
} from "mdbreact";

class HomeNavBar extends Component {

    constructor(props) {
        super(props);
        this.state = { isOpen: false };
        this.toggleOr = this.bind
    }

    toggleCollapse = () => {
        this.setState({ isOpen: !this.state.isOpen });
    }

    render() {

        return (
            <MDBNavbar className="tempting-azure-gradient" dark expand="md">
                <MDBNavbarBrand >
                    <img src={logo} alt="" style={{ width: 40, height: 40 }} />
                </MDBNavbarBrand>
                <MDBNavbarBrand tag={Link} to="/">
                    <strong className="black-text">ECE WaterMelon</strong>
                </MDBNavbarBrand>
                <MDBNavbarToggler onClick={this.toggleCollapse} />
                <MDBCollapse id="navbarCollapse3" isOpen={this.state.isOpen} navbar>
                    <MDBNavbarNav right>
                        <MDBNavItem>
                            <MDBNavLink to="/login" className="black-text">Login</MDBNavLink>
                        </MDBNavItem>
                        <MDBNavItem>
                            <MDBNavLink to="/register" className="black-text">Register</MDBNavLink>
                        </MDBNavItem>
                    </MDBNavbarNav>
                </MDBCollapse>
            </MDBNavbar>
        );
    }
}

export default HomeNavBar;