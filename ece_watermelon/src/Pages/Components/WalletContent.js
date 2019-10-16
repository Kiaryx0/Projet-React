import React, { Component } from "react";
import { MDBRow, MDBCol, MDBListGroup, MDBBtn, MDBListGroupItem, MDBCard, MDBCardBody,
     MDBCardTitle, MDBCardText, MDBContainer, MDBModal, MDBModalBody, MDBModalHeader, MDBModalFooter } from "mdbreact";
import wallet from './Pictures/wallet.png';
import deposit from './Pictures/deposit.png';
import payment from './Pictures/payment.png';
import withdrawal from './Pictures/withdrawal.png';
import card from './Pictures/card.png';
import { Link } from 'react-router-dom';

export default class WalletContent extends Component {

    constructor(props) {
        super(props);
        this.state = {
            modalDeposit: false
        };
        this.toggleBankDeposit = this.toggleBankDeposit.bind(this);
    }

    toggleBankDeposit() {
        this.setState({
            modalDeposit: !this.state.modalDeposit
        });
    }

    render() {
        return (
            <div>
                <MDBContainer>
                    <h1 className="text-center" style={{ paddingTop: '40px', paddingBottom: '40px', fontSize: '40px', fontWeight: 'bold' }}>My Wallet Manager</h1>
                </MDBContainer>
                <MDBRow className="text-align-center" >
                    <MDBCol md="5" style={{ paddingLeft: '40px', paddingRight: '40px', paddingBottom: '100px', width: '100%' }}>
                        <MDBCard className="text-center">
                            <MDBCardBody>

                                <MDBCardTitle style={{ fontSize: '36px' }}>Wallet Activity</MDBCardTitle>
                                <MDBCardText className=" text-justify" style={{ fontSize: '18px' }}>
                                    Keep Track here of the last activities on your wallet. this includes payments to other users of WaterMelon, and Transfers From or To your Bank account.
                                </MDBCardText>

                                <MDBListGroup >
                                    <MDBListGroupItem hover style={{ paddingTop: '25px', paddingBottom: '25px' }}>
                                        <div className="d-flex w-100 justify-content-between">
                                            <h4 className="mb-1">Transfer From Bank</h4>
                                            <small>3 Days Ago</small>
                                        </div>
                                        <div className="d-flex w-100 justify-content-between">
                                            <p className="mb-1" style={{ verticalAlign: 'middle' }}>Using the card : ****-****-****-1234</p>
                                            <strong style={{ fontSize: '20px' }}>+12€</strong>
                                        </div>
                                    </MDBListGroupItem>

                                </MDBListGroup>

                                <MDBListGroup style={{ maxWidth: '80rem' }}>
                                    <MDBListGroupItem hover style={{ paddingTop: '25px', paddingBottom: '25px' }}>
                                        <div className="d-flex w-100 justify-content-between">
                                            <h4 className="mb-1">Transfer From Bank</h4>
                                            <small>3 Days Ago</small>
                                        </div>
                                        <div className="d-flex w-100 justify-content-between">
                                            <p className="mb-1" style={{ verticalAlign: 'middle' }}>Using the card : ****-****-****-1234</p>
                                            <strong style={{ fontSize: '20px' }}>+12€</strong>
                                        </div>
                                    </MDBListGroupItem>

                                </MDBListGroup>

                                <MDBListGroup style={{ maxWidth: '80rem' }}>
                                    <MDBListGroupItem hover style={{ paddingTop: '25px', paddingBottom: '25px' }}>
                                        <div className="d-flex w-100 justify-content-between">
                                            <h4 className="mb-1">Transfer From Bank</h4>
                                            <small>3 Days Ago</small>
                                        </div>
                                        <div className="d-flex w-100 justify-content-between">
                                            <p className="mb-1" style={{ verticalAlign: 'middle' }}>Using the card : ****-****-****-1234</p>
                                            <strong style={{ fontSize: '20px' }}>+12€</strong>
                                        </div>
                                    </MDBListGroupItem>

                                </MDBListGroup>

                                <MDBListGroup style={{ maxWidth: '80rem' }}>
                                    <MDBListGroupItem hover style={{ paddingTop: '25px', paddingBottom: '25px' }}>
                                        <div className="d-flex w-100 justify-content-between">
                                            <h4 className="mb-1">Transfer From Bank</h4>
                                            <small>3 Days Ago</small>
                                        </div>
                                        <div className="d-flex w-100 justify-content-between">
                                            <p className="mb-1" style={{ verticalAlign: 'middle' }}>Using the card : ****-****-****-1234</p>
                                            <strong style={{ fontSize: '20px' }}>+12€</strong>
                                        </div>
                                    </MDBListGroupItem>

                                </MDBListGroup>
                                <MDBBtn outline color="dark" size="lg" style={{ marginTop: '30px' }}>
                                    Show Older Activity
                                </MDBBtn>

                            </MDBCardBody>
                        </MDBCard>


                    </MDBCol>
                    <MDBCol md="1" className="text-center">
                    </MDBCol>
                    <MDBCol md="6" style={{ paddingRight: '100px', paddingLeft: '40px', paddingBottom: '100px' }}>
                        <MDBRow middle>

                            <MDBCol md="6" className="text-center">
                                <img src={wallet} alt="" style={{ width: '100%', maxWidth: '250px', minWidth: '100px', height: 'auto' }} className="image-fluid"></img>
                            </MDBCol>
                            <MDBCol md="6" middle className="text-center">
                                <h1 style={{ fontWeight: 'bold', fontSize: '50px', whiteSpace: 'nowrap' }}>Cash flow</h1>
                                <h1 style={{ fontSize: '60px' }}>126.90€</h1>
                            </MDBCol>
                        </MDBRow>
                        <MDBRow middle style={{ paddingTop: '50px' }}>
                            <MDBCol md="4" className="text-center">
                                <img src={deposit} alt="" style={{ width: '100%', maxWidth: '120px' }}></img>
                            </MDBCol>
                            <MDBCol md="8" className="text-center" middle>
                                <MDBBtn outline color="dark" size="lg" onClick={() => this.toggleBankDeposit()} style={{ width: '100%', fontSize: '20px' }}>
                                    Make a Bank Deposit
                                </MDBBtn>
                                <MDBModal isOpen={this.state.modalDeposit} toggle={() => this.toggleBankDeposit()} centered>
                                    <MDBModalHeader toggle={() => this.toggleBankDeposit()}>Make a Bank Deposit</MDBModalHeader>
                                    <MDBModalBody>
                                        Using this card
                                    </MDBModalBody>
                                    <MDBModalFooter>
                                        <MDBBtn color="warning" onClick={() => this.toggleBankDeposit()}>Cancel</MDBBtn>
                                        <MDBBtn color="default">Proceed</MDBBtn>
                                    </MDBModalFooter>
                                </MDBModal>
                            </MDBCol>
                        </MDBRow>
                        <MDBRow middle style={{ paddingTop: '20px' }}>
                            <MDBCol md="4" className="text-center">
                                <img src={withdrawal} alt="" style={{ width: '100%', maxWidth: '120px' }}></img>
                            </MDBCol>
                            <MDBCol md="8" className="text-center" middle>
                                <Link className="text-center">
                                    <MDBBtn outline color="dark" size="lg" style={{ width: '100%', fontSize: '20px' }}>
                                        Make a Bank Withdrawal
                                </MDBBtn>
                                </Link>
                            </MDBCol>
                        </MDBRow>
                        <MDBRow middle style={{ paddingTop: '20px' }}>
                            <MDBCol md="4" className="text-center">
                                <img src={payment} alt="" style={{ width: '100%', maxWidth: '120px' }}></img>
                            </MDBCol>
                            <MDBCol md="8" className="text-center" middle>
                                <Link className="text-center">
                                    <MDBBtn outline color="dark" size="lg" style={{ width: '100%', fontSize: '20px' }}>
                                        Make a Payment
                                </MDBBtn>
                                </Link>
                            </MDBCol>
                        </MDBRow>
                        <MDBRow middle style={{ paddingTop: '20px' }}>
                            <MDBCol md="4" className="text-center">
                                <img src={card} alt="" style={{ width: '100%', maxWidth: '120px' }}></img>
                            </MDBCol>
                            <MDBCol md="8" className="text-center" middle>
                                <Link className="text-center">
                                    <MDBBtn outline color="dark" size="lg" style={{ width: '100%', fontSize: '20px' }}>
                                        Manage Cards
                                </MDBBtn>
                                </Link>
                            </MDBCol>
                        </MDBRow>

                    </MDBCol>
                </MDBRow>
            </div>
        );
    }
}
