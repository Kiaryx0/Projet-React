import React from 'react';
import {Link} from 'react-router-dom';
import logo from './logo.png'; 
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink
} from 'reactstrap';

export default class HomeNavBar extends React.Component {
    constructor(props) {
        super(props);

        this.toggle = this.toggle.bind(this);
        this.state = {
            isOpen: false
        };
    }

    toggle() {
        this.setState({
            isOpen: !this.state.isOpen
        });
    }

    render() {
        return (
            <div>
                <Navbar color="light" light expand="md"> 
                    <NavbarBrand tag={Link} to="/"><img src={logo} alt="" style={{width: 40, height: 40}}/></NavbarBrand>
                    <NavbarBrand tag={Link} to="/">ECE WaterMelon</NavbarBrand>
                    <NavbarToggler onClick={this.toggle}/>
                    <Collapse isOpen={this.state.isOpen} navbar>
                        <Nav className="ml-auto" navbar>
                            <NavItem>
                                <NavLink tag={Link} to="/login">Sign in</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink tag={Link} to="/register">Sign up</NavLink>
                            </NavItem>
                        </Nav>
                    </Collapse>
                </Navbar>
            </div>
        );
    }
}