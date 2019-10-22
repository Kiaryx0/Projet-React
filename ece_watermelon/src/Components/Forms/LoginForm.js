import React from "react";
import { MDBCard, MDBCardBody,
  MDBContainer, MDBRow, MDBCol, MDBInput, MDBBtn } from 'mdbreact';

const LoginForm = () => {
  return (
    <MDBContainer>
      <MDBRow>
        <MDBCol className="d-flex justify-content-center">
          <MDBCard style={{backgroundColor:"rgba(150,150,150,0.3)"}}>
            <MDBCardBody className="white-text">
          <form className="white-text">
            <p className="h3 text-center mt-3">Sign in</p>
            <hr className="hr-light" />
            <div>
              <MDBInput
                className="white-text"
                label="Your email"
                icon="envelope"
                type="email"
              />
              <MDBInput
                className="white-text"
                label="Your password"
                icon="lock"
                type="password"
              />
            </div>
            <div className="text-center">
              <MDBBtn color="indigo">Login</MDBBtn>
            </div>
          </form>
          </MDBCardBody>
          </MDBCard>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
    
  );
};

export default LoginForm;