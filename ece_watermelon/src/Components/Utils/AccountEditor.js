import React, { Component } from "react";
import loginUser, { getSessionUser } from "../../Database/DatabaseSession";
import {
    MDBRow, MDBCol, MDBBtn, MDBCard, MDBCardBody, MDBCardHeader, MDBCardFooter,
    MDBCardTitle,
    MDBInput
} from "mdbreact";
export default class AccountEditor extends Component {

    constructor(props) {
        super(props);

        let user = getSessionUser();
        this.state = {
            first_name: user.first_name,
            last_name: user.last_name,
            email: user.email,
            password: user.password,
            show_password: false
        }

        this.onFirstNameUpdate = this.onFirstNameUpdate.bind(this);
        this.onLastNameUpdate = this.onLastNameUpdate.bind(this);
        this.onEmailUpdate = this.onEmailUpdate.bind(this);
        this.onPasswordUpdate = this.onPasswordUpdate.bind(this);
        this.onCheck = this.onCheck.bind(this);
        this.showPassword = this.showPassword.bind(this);
        this.submit = this.submit.bind(this);
    }

    submit(event){
        event.preventDefault();
        // Modify user in users table
        let users = JSON.parse(localStorage.getItem("users"))
        let session = getSessionUser()
        for(var i=0; i<users.length; i++){
            if(users[i].id === session.id){
                users[i].first_name = this.state.first_name;
                users[i].last_name = this.state.last_name;
                users[i].email = this.state.email;
                users[i].password = this.state.password;
            }
        }
        localStorage.setItem("users", JSON.stringify(users));
        // Modify session user
        loginUser(this.state.email, this.state.password);
        // Refresh navbar
        this.props.refresh();

        // Updated to be sure
        let user = getSessionUser();
        this.setState ({
            first_name: user.first_name,
            last_name: user.last_name,
            email: user.email,
            password: user.password
        });

    }

    onFirstNameUpdate(event) {
        this.setState({ first_name: event.target.value });
    }

    onLastNameUpdate(event) {
        this.setState({ last_name: event.target.value });
    }

    onEmailUpdate(event) {
        this.setState({ email: event.target.value });
    }

    onPasswordUpdate(event) {
        this.setState({ password: event.target.value });
    }

    onCheck(event) {
        this.setState({ show_password: !this.state.show_password });
    }

    showPassword() {
        if (this.state.show_password) {
            return "text";
        } else {
            return "password";
        }
    }

    render() {
        return (
            <form onSubmit={this.submit}>
                <MDBCard className="text-center" >

                    <MDBCardHeader style={{ backgroundColor: "inherit" }}>
                        <MDBCardTitle style={{ fontSize: '36px', marginTop: '20px', marginBottom: '20px' }}>My Account Informations</MDBCardTitle>
                    </MDBCardHeader>
                    <MDBCardBody style={{ margin: '50px' }}>
                        <MDBRow>
                            <MDBCol md="6">
                                <h4 style={{ textAlign: "left" }}>First Name :</h4>
                                <div style={{ textAlign: "left" }}>
                                    <MDBInput label="firstName" type="text" icon="pen" value={this.state.first_name} onChange={this.onFirstNameUpdate} />
                                </div>
                            </MDBCol>
                            <MDBCol md="6">
                                <h4 style={{ textAlign: "left" }}>Last Name :</h4>
                                <div style={{ textAlign: "left" }}>
                                    <MDBInput label="firstName" type="text" icon="pen" value={this.state.last_name} onChange={this.onLastNameUpdate} />
                                </div>
                            </MDBCol>
                        </MDBRow>
                        <h4 style={{ textAlign: "left" }}>Email:</h4>
                        <div style={{ textAlign: "left" }}>
                            <MDBInput label="firstName" type="email" icon="pen" value={this.state.email} onChange={this.onEmailUpdate} />
                        </div>

                        
                        <h4 style={{ textAlign: "left" }}>Password</h4>
                        <MDBRow>
                            <MDBCol md="7">
                                <div style={{ textAlign: "left" }}>
                                    <MDBInput label="firstName" type={this.showPassword()} icon="pen" value={this.state.password} onChange={this.onPasswordUpdate} />
                                </div>
                            </MDBCol>
                            <MDBCol md="3">
                                <p  style={{ display: "inline-block"}}>Show password?</p>
                            </MDBCol>
                            <MDBCol md="2">
                                <MDBInput type="checkbox" id="checkbox2" onChange={this.onCheck} style={{width:"20px"}}/>
                            </MDBCol>
                        </MDBRow>                      

                    </MDBCardBody>
                    <MDBCardFooter style={{ backgroundColor: "inherit" }} >
                        <MDBRow middle>
                            <MDBCol md="12" >
                                <MDBBtn outline color="black" size="lg" type="submit">Save Changes</MDBBtn>
                            </MDBCol>
                        </MDBRow>
                    </MDBCardFooter>
                </MDBCard>
            </form>
        );
    }
}