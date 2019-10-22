import React from 'react';
import {
  MDBCard, MDBCardBody, MDBContainer, MDBRow, MDBCol, MDBInput, MDBBtn
} from 'mdbreact';
import Stepper from 'react-stepper-horizontal';

class RegisterForm extends React.Component {
  /* Version for MDBootstrap */
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     formActivePanel1: 1,
  //     formActivePanel1Swapped: false,
  //   }
  // }

  // swapActivePanel = (a) => (param) => (e) => {
  //   this.setState({
  //     ['formActivePanel' + a]: param,
  //     ['formActivePanel' + a + 'Swapped']: true
  //   });
  // }

  // handlePrevNextBtn = (i) => (sth) => (j) => {
  //   this.setState({
  //     ['formActivePanel' + i]: sth,
  //     ['formActivePanel' + a + 'Swapped']: true
  //   });
  // }

  // handleSubmission = () => {
  //   alert('Form submitted!');
  // }

  // calculateAutofocus = (i) => {
  //   if (this.state['formActivePanel' + a + 'Swapped']) {
  //     return true
  //   }
  // }
  render() {
    return (
      <MDBContainer>
        <MDBRow>
          <MDBCol className="d-flex justify-content-center">
            <div>
              <Stepper steps={ [{title: 'Personal Informations'}, {title: 'Payment Infos'}]} activeStep={1}/>
            </div>
            <MDBCard style={{ backgroundColor: "rgba(150,150,150,0.3)" }}>
              <MDBCardBody className="white-text">
                {/* Version for MDBootstrap
                 <MDBStepper form>
              <MDBStep form>
                <a href="#formstep1" onClick={this.swapActivePanel(1)(1)}>
                  <MDBBtn floating circle gradient={ this.state.formActivePanel1==1 ? "morpheus-den-gradient" : "near-moon-gradient" }>
                    <MDBIcon far icon="id-card" />
                  </MDBBtn>
                </a>
              </MDBStep>
              <MDBStep form>
                <a href="#formstep2" onClick={this.swapActivePanel(1)(2)}>
                  <MDBBtn floating circle gradient={ this.state.formActivePanel1==2 ? "morpheus-den-gradient" : "near-moon-gradient"}>
                    <MDBIcon far icon="credit-card" />
                  </MDBBtn>
                </a>
              </MDBStep>
            </MDBStepper> */}

                <form className="white-text" method="post" action="">
                  <p className="h3 text-center mt-3">Sign up</p>
                  <hr className="hr-light" />
                  <p className="h4 text-center">Informations personnelles</p>
                  <div>
                    <MDBInput
                      className="white-text"
                      label="Your email"
                      type="email"
                    />
                    <MDBInput
                      className="white-text"
                      label="Your password"
                      type="password"
                    />
                    <MDBInput
                      className="white-text"
                      label="Your first name"
                      type="text"
                    />
                    <MDBInput
                      className="white-text"
                      label="Your last name"
                      type="text"
                    />
                    <MDBInput
                      className="white-text"
                      label="Your address"
                      type="text"
                    />
                    <MDBInput
                      className="white-text"
                      label="State Code"
                      type="number"
                    />
                    <MDBInput
                      className="white-text"
                      label="Phone Number"
                      type="tel"
                    />
                  </div>
                  <hr className="hr-light" />
                  <p className="h4 text-center">Informations de paiement</p>
                  <div className="text-center">
                    <MDBBtn color="indigo">Create your account</MDBBtn>
                  </div>
                </form>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    );
  };
}
export default RegisterForm;