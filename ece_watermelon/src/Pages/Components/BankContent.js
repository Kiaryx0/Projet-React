import React, { Component } from "react";
import { MDBRow, MDBCol, MDBListGroup, MDBBtn, MDBListGroupItem, MDBCard, MDBCardBody,
    MDBCardTitle, MDBCardText, MDBContainer } from "mdbreact";

export default class WalletContent extends Component {

    constructor(props) {
        super(props);
        this.state = {
            modal: false
        };
        this.toggle = this.toggle.bind(this);
    }

    toggle() {
        this.setState({
            modal: !this.state.modal
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
                        
                    </MDBCol>
                </MDBRow>
            </div>
        );
    }
}
