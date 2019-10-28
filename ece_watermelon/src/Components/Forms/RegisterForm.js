
import React from 'react';
import { Redirect } from "react-router-dom"
import {
  MDBCard, MDBCardBody, MDBContainer, MDBAlert, MDBInput,
  MDBBtn, MDBIcon, MDBMask, MDBView
} from 'mdbreact';
import Stepper from 'react-stepper-horizontal';
import background from '../../Pictures/forms_background.jpg';
import loginUser from '../../Database/DatabaseSession.js';

class RegisterForm extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      currentStep: 0,
      steps: [{
        title: 'Personal Informations', onClick: () => {
          this.handleStepperClick(0);
        }
      },
      {
        title: 'Payment Infos', onClick: () => {
          this.handleStepperClick(1);
        }
      }],
      inputEmail: "",
      inputPassword: "",
      inputFirstName: "",
      inputLastName: "",
      inputCardType: "",
      inputCVC: "",
      inputExpirationDate: "",
      redirect: false,
      userExist: false,
      invalidForm: false
    };
    this.handleNextBtn = this.handleNextBtn.bind(this);
    this.handlePrvsBtn = this.handlePrvsBtn.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleRadioBtn = this.handleRadioBtn.bind(this);
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

  /**
   * retrieve users input in form
   */
  handleInputChange(event) {
    const target = event.target;
    const name = target.name;
    const value = target.value;

    this.setState({
      [name]: value
    });
  }

  handleRadioBtn = (argCard) => () => {
    this.setState({
      inputCardType: argCard
    });
  }

  handleStepperClick(stepClick) {
    this.setState({
      currentStep: stepClick
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    if (this.state.inputCVC.length === 4 &&
      this.state.inputEmail.match(/^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/)) {
      let users = JSON.parse(localStorage.getItem("users"));
      let cards = JSON.parse(localStorage.getItem("cards"));
      console.log("stateinput:" + this.state.inputEmail);
      for (let i = 0; i < users.length; i++) {
        console.log(users[i].email);
        if (users[i].email === this.state.inputEmail) {
          this.setState({
            userExist: true,
            invalidForm: false
          });
        }
      }
      if (this.state.userExist.toString() === false) {
        let newIdUser = users[users.length - 1].id + 1;
        let newIdCard = cards[cards.length - 1].id + 1;
        users.push({
          id: newIdUser,
          first_name: this.state.inputFirstName,
          last_name: this.state.inputLastName,
          email: this.state.inputEmail,
          password: this.state.inputPassword,
          isAdmin: false
        });
        localStorage.setItem("users", JSON.stringify(users));
        cards.push({
          id: newIdCard,
          last_4: this.state.inputCVC,
          brand: this.state.inputCardType,
          expired_at: this.state.inputExpirationDate + "-01",
          user_id: newIdUser
        });
        localStorage.setItem("cards", JSON.stringify(cards));
        loginUser(this.state.inputEmail, this.state.inputPassword);
        this.setState({
          redirect: true
        });
      }
    }
    else {
      this.setState({
        userExist: false,
        invalidForm: true
      });
    }
  }

  render() {
    return (
      <MDBView>
        <img src={background} alt="" style={{ backgroundRepeat: "cover", width: "100vw" }} />
        <MDBMask overlay="black-light">
          <MDBContainer className="d-flex flex-column align-items-center">
              {this.state.invalidForm && <MDBAlert className="mt-3" color="danger" dismiss>There are some errors in your sign up form!</MDBAlert>}
              {this.state.userExist && <MDBAlert className="mt-3" color="danger" dismiss>User with this email address already exists!</MDBAlert>}
            <MDBCard className="mt-3" style={{ backgroundColor: "rgba(150,150,150,0.3)" }}>
              <MDBCardBody className="white-text">
                <form className="white-text" onSubmit={this.handleSubmit}>
                  <p className="h3 text-center mt-3">Sign up</p>
                  <hr className="hr-light" />
                  <Stepper steps={this.state.steps} activeStep={this.state.currentStep} defaultTitleColor={"ffffff"} activeTitleColor={"#5096FF"} />

                  {this.state.currentStep === 0 &&
                    <div>
                      <MDBInput
                        required
                        name="inputEmail"
                        className="white-text"
                        value={this.state.inputEmail}
                        label="Your email"
                        type="email"
                        icon="envelope"
                        onChange={this.handleInputChange}
                      />
                      <MDBInput
                        required
                        name="inputPassword"
                        className="white-text"
                        label="Your password"
                        value={this.state.inputPassword}
                        type="password"
                        icon="lock"
                        onChange={this.handleInputChange}
                      />
                      <MDBInput
                        required
                        name="inputFirstName"
                        className="white-text"
                        value={this.state.inputFirstName}
                        label="Your first name"
                        type="text"
                        icon="user"
                        onChange={this.handleInputChange}
                      />
                      <MDBInput
                        required
                        name="inputLastName"
                        className="white-text"
                        label="Your last name"
                        value={this.state.inputLastName}
                        type="text"
                        icon="id-card"
                        onChange={this.handleInputChange}
                      />
                      <div>
                        <MDBBtn color="indigo" onClick={this.handleNextBtn}>Next</MDBBtn>
                      </div>
                    </div>
                  }

                  {this.state.currentStep === 1 &&
                    <div>
                      <div className="d-flex align-items-center mt-3">
                        <MDBIcon fab icon="cc-visa" size="3x" />
                        <MDBInput
                          className="d-flex w-auto position-relative"
                          required
                          name="inputCardType"
                          type='radio'
                          id='Visa'
                          containerClass='mx-2'
                          value={this.state.inputCardType}
                          checked={this.state.inputCardType === "visa"}
                          onClick={this.handleRadioBtn("visa")}
                        />
                        <MDBIcon fab icon="cc-mastercard" size="3x" />
                        <MDBInput
                          className="d-flex w-auto position-relative"
                          name="inputCardType"
                          type='radio'
                          id='MasterCard'
                          containerClass='mx-2'
                          value={this.state.inputCardType}
                          checked={this.state.inputCardType === "master_card"}
                          onClick={this.handleRadioBtn("master_card")}
                        />
                        <MDBIcon fab icon="cc-jcb" size="3x" />
                        <MDBInput
                          className="d-flex w-auto position-relative"
                          name="inputCardType"
                          type='radio'
                          id='JCB'
                          containerClass='mx-2'
                          value={this.state.inputCardType}
                          checked={this.state.inputCardType === "jcb"}
                          onClick={this.handleRadioBtn("jcb")}
                        />
                        <MDBIcon fab icon="cc-amex" size="3x" />
                        <MDBInput
                          className="d-flex w-auto position-relative"
                          name="inputCardType"
                          type='radio'
                          id='American Express'
                          containerClass='mx-2'
                          value={this.state.inputCardType}
                          checked={this.state.inputCardType === "american_express"}
                          onClick={this.handleRadioBtn("american_express")}
                        />
                      </div>
                      <MDBInput
                        required
                        name="inputExpirationDate"
                        className="white-text"
                        label="Expiration Date"
                        value={this.state.inputExpirationDate}
                        type="month"
                        icon="credit-card"
                        onChange={this.handleInputChange}
                      />
                      <MDBInput
                        required
                        name="inputCVC"
                        className="white-text"
                        label="Card Validation Code (4 digits)"
                        value={this.state.inputCVC}
                        type="number"
                        icon="shield-alt"
                        onChange={this.handleInputChange}
                      />
                      <div className="text-center">
                        <MDBBtn color="indigo" onClick={this.handlePrvsBtn}>Previous</MDBBtn>
                        <MDBBtn color="indigo" type="submit">Create your account</MDBBtn>
                        {this.state.redirect && <Redirect to='/' />}
                      </div>
                    </div>
                  }

                </form>
              </MDBCardBody>
            </MDBCard>
          </MDBContainer>
        </MDBMask>
      </MDBView>
    );
  };
}

export default RegisterForm;