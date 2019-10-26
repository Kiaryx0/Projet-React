import React from "react";
import { Redirect } from "react-router-dom";
import {
  MDBCard, MDBCardBody, MDBMask, MDBView,
  MDBContainer, MDBInput, MDBBtn, MDBAlert, MDBIcon
} from 'mdbreact';
import loginUser from "../../Database/DatabaseSession.js";
import background from '../../Pictures/forms_background.jpg';

class LoginForm extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      s_email: '',
      s_password: '',
      check_user: '',
      alert_invisible: true,
    }
    this.handleEmail = this.handleEmail.bind(this);
    this.handlePassword = this.handlePassword.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleEmail(event) {
    this.setState({
      s_email: event.target.value
    });
  }

  handlePassword(event) {
    this.setState({
      s_password: event.target.value
    })
  }

  handleSubmit(event) {
    this.setState({
      alert_invisible: false,
      check_user: loginUser(this.state.s_email, this.state.s_password)
    });
    event.preventDefault();
  }

  render() {
    return (
      <MDBView>
        <img src={background} alt="" style={{ backgroundRepeat: "cover" }} />
        <MDBMask overlay="black-light">
          <MDBContainer className="d-flex flex-column align-items-center">
            {this.state.alert_invisible ? <div className="invisible"></div> : <div className="visible mt-3">
              {this.state.check_user ? <Redirect to='/' /> : <MDBAlert color="danger" dismiss>Wrong Login or Password!</MDBAlert>}
            </div>}
            <MDBCard className="mt-3 w-50" style={{ backgroundColor: "rgba(150,150,150,0.3)" }}>
              <MDBCardBody className="white-text">
                <form className="white-text" onSubmit={this.handleSubmit}>
                  <p className="h3 text-center mt-2">
                    <MDBIcon icon="sign-in-alt" /> Sign in
              </p>
                  <hr className="hr-light" />
                  <div>
                    <MDBInput
                      className="white-text"
                      label="Your email"
                      icon="envelope"
                      type="email"
                      onChange={this.handleEmail}
                      required
                    />
                    <MDBInput
                      className="white-text"
                      label="Your password"
                      icon="lock"
                      type="password"
                      onChange={this.handlePassword}
                      required
                    />
                  </div>
                  <div className="text-center">
                    <MDBBtn color="indigo" type="submit">Login</MDBBtn>
                  </div>
                </form>
              </MDBCardBody>
            </MDBCard>
          </MDBContainer>
        </MDBMask>
      </MDBView>
    );
  };
}

export default LoginForm;