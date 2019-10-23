
import React from 'react';
import {
  MDBCard, MDBCardBody, MDBContainer, MDBRow, MDBCol, MDBInput, MDBBtn, MDBFormInline,
} from 'mdbreact';
import Stepper from 'react-stepper-horizontal';

class RegisterForm extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      currentStep: 0,
      steps: [{ title: 'Personal Informations' },
      { title: 'Payment Infos' }],
      radio: '',
    };
    this.handleNextBtn=this.handleNextBtn.bind(this);
    this.handlePrvsBtn=this.handlePrvsBtn.bind(this);
    this.handleSubmission=this.handleSubmission.bind(this);
    this.radioCardClick=this.radioCardClick.bind(this);
  }

  handleNextBtn() {
    this.setState({
      currentStep: this.state.currentStep + 1,
    });
  }

  handlePrvsBtn() {
    this.setState({
      currentStep: this.state.currentStep - 1,
    });
  }

  handleSubmission() {
    this.setState({
      currentStep: 0,
    });
  }

  radioCardClick = (myClick) => () => {
    this.setState({
      radio: myClick,
    });
  }

  render() {
    return (
      <MDBContainer>
        <MDBRow>
          <MDBCol className="d-flex justify-content-center">
            <MDBCard className="my-5 p-3" style={{ backgroundColor: "rgba(150,150,150,0.3)" }}>
              <MDBCardBody className="white-text">
                <form className="white-text" method="post" action="">
                  <p className="h3 text-center mt-3">Sign up</p>
                  <hr className="hr-light" />
                  <Stepper steps={this.state.steps} activeStep={this.state.currentStep} defaultTitleColor={"ffffff"} activeTitleColor={"#5096FF"} />

                  {this.state.currentStep === 0 &&
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
                      <div>
                        <MDBBtn color="indigo" onClick={this.handleNextBtn}>Next</MDBBtn>
                      </div>
                    </div>
                  }

                  {this.state.currentStep === 1 &&
                    <div>
                      <MDBFormInline>
                        <MDBInput
                        onClick={this.radioCardClick(1)}
                        checked={this.state.radio === 1 ? true : false}
                        label='Visa'
                        type='radio'
                        id='Visa'
                        containerClass='mx-3'
                        />
                        <MDBInput
                        onClick={this.radioCardClick(2)}
                        checked={this.state.radio === 2 ? true : false}
                        label='MasterCard'
                        type='radio'
                        id='MasterCard'
                        containerClass='mx-3'
                        />
                        <MDBInput
                        onClick={this.radioCardClick(3)}
                        checked={this.state.radio === 3 ? true : false}
                        label='CB'
                        type='radio'
                        id='CB'
                        containerClass='mx-3'
                        />
                      </MDBFormInline>
                      <MDBInput
                        className="white-text"
                        label="Your card number"
                        type="number"
                      />
                      <MDBInput
                        className="white-text"
                        label="Card holder name"
                        type="text"
                      />
                      <MDBInput
                        className="white-text"
                        label="CVC (Card Validation Code)"
                        type="number"
                      />

                      <div className="text-center">
                        <MDBBtn color="indigo" onClick={this.handlePrvsBtn}>Previous</MDBBtn>
                        <MDBBtn color="indigo" onClick={this.handleSubmission}>Create your account</MDBBtn>
                      </div>
                    </div>
                  }

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