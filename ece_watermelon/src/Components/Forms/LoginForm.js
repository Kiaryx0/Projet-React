import React from "react";
import { MDBCard, MDBCardBody,
  MDBContainer, MDBRow, MDBCol, MDBInput, MDBBtn, MDBAlert } from 'mdbreact';
  import loginUser from "../../Database/DatabaseSession.js";

class LoginForm extends React.Component{

  constructor(props){
    super(props);
    this.state = {
      s_email: '',
      s_password: '',
      check_user: '',
      alert_visible: false,
    }
    this.handleEmail = this.handleEmail.bind(this);
    this.handlePassword = this.handlePassword.bind(this);
    this.handleSubmit= this.handleSubmit.bind(this);
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
    if(this.state.s_email === '' || this.state.s_password === ''){
      event.preventDefault();
    }
    else {
      this.setState({
        check_user: loginUser(this.state.s_email, this.state.s_password)
      });
      if (this.state.check_user === true){
        this.props.refresh();
      }
    }
  }


render() {
  return (
    <MDBContainer className="d-flex flex-column align-items-center">
      <div className="mt-3">
          {this.state.check_user ? <MDBAlert color="success" dismiss>Successfully Login !</MDBAlert> : <MDBAlert color="danger" dismiss>Wrong Login or Password !</MDBAlert>}          
          </div>
          <MDBCard className="mt-3" style={{backgroundColor:"rgba(150,150,150,0.3)"}}>
            <MDBCardBody className="white-text">
          <form className="white-text" onSubmit={this.handleSubmit}>
            <p className="h3 text-center mt-3">Sign in</p>
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
    
  );
};
}

export default LoginForm;