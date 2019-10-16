import React, { Component } from "react";
import {
    MDBRow, MDBCol, MDBListGroup, MDBBtn, MDBListGroupItem, MDBCard, MDBCardBody, MDBCardHeader, MDBCardFooter,
    MDBCardTitle, MDBCardText, MDBContainer, MDBInput
} from "mdbreact";
import { Link } from 'react-router-dom'
import cb from './Pictures/cb.png';
import visa from './Pictures/visa.png';
import mastercard from './Pictures/mastercard.png';
import wallet from './Pictures/wallet.png';
import './style.css'

export default class WalletContent extends Component {

    constructor(props) {
        super(props);
        this.state = {
            modal: false,
            cardSelected: 0
        };
        this.toggle = this.toggle.bind(this);
        this.isActive = this.isActive.bind(this);
        this.setSelectedCard = this.setSelectedCard.bind(this);
    }

    toggle() {
        this.setState({
            modal: !this.state.modal
        });
    }

    isActive(cardID) {
        if (cardID === this.state.cardSelected) {
            return 'active';
        } else {
            return 'hover';
        }
    }

    setSelectedCard(cardID) {
        this.setState({
            cardSelected: cardID
        });
    }

    render() {
        return (
            <div>
                <MDBContainer style={{ marginBottom: '50px', marginTop: '50px' }}>
                    <h1 className="text-center" style={{ fontSize: '40px', fontWeight: 'bold' }}>My Bank Manager</h1>
                </MDBContainer>
                <MDBRow className="text-align-center" >

                    <MDBCol md="6" style={{ paddingLeft: '5%', paddingRight: '5%', marginBottom: '100px', width: '100%' }}>
                        <MDBCard className="text-center" >
                            <MDBCardBody>

                                <MDBCardHeader style={{backgroundColor:"inherit"}}>
                                    <MDBCardTitle style={{ fontSize: '36px', marginTop: '20px', marginBottom: '20px' }}>My Card Manager</MDBCardTitle>
                                </MDBCardHeader>
                                <MDBCardText className=" text-justify" style={{ fontSize: '18px' }}>
                                    Select a Card among all the cards associated to your Watermelon Account. You may use this card to make deposit to your bank account as well as withdrawals
                                </MDBCardText>

                                <MDBListGroup >
                                    <MDBListGroupItem className={this.isActive(1)} onClick={() => this.setSelectedCard(1)} style={{ paddingTop: '25px', paddingBottom: '25px' }}>
                                        <div className="justify-content-between">
                                            <img src={cb} alt="" style={{ width: '100%', maxWidth: '80px', display: 'inline' }}></img>
                                            <h5 className="mb-1" style={{ display: 'inline', marginLeft: '20px' }}>Card : 1234-****-****-1234</h5>
                                        </div>
                                    </MDBListGroupItem>
                                    <MDBListGroupItem className={this.isActive(2)} onClick={() => this.setSelectedCard(2)} style={{ paddingTop: '25px', paddingBottom: '25px' }}>
                                        <div className="justify-content-between">
                                            <img src={mastercard} alt="" style={{ width: '100%', maxWidth: '80px', display: 'inline' }}></img>
                                            <h5 className="mb-1" style={{ display: 'inline', marginLeft: '20px' }}>Card : 1234-****-****-1234</h5>
                                        </div>
                                    </MDBListGroupItem>
                                    <MDBListGroupItem className={this.isActive(3)} onClick={() => this.setSelectedCard(3)} style={{ paddingTop: '25px', paddingBottom: '25px' }}>
                                        <div className="justify-content-between">
                                            <img src={visa} alt="" style={{ width: '100%', maxWidth: '80px', display: 'inline' }}></img>
                                            <h5 className="mb-1" style={{ display: 'inline', marginLeft: '20px' }}>Card : 1234-****-****-1234</h5>
                                        </div>
                                    </MDBListGroupItem>
                                </MDBListGroup>

                                <MDBCardFooter style={{backgroundColor:"inherit"}}>
                                    <Link to="/account">
                                        <MDBBtn outline color="dark" size="lg" style={{ marginTop: '30px' }}>Add New Card</MDBBtn>
                                    </Link>
                                </MDBCardFooter>


                            </MDBCardBody>
                        </MDBCard>
                    </MDBCol>

                    
                    <MDBCol md="6" style={{ paddingRight: '100px', paddingLeft: '40px', marginBottom: '100px' }}>
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
                            <MDBCol md="6" className="text-center" middle>
                                <MDBCard className="text-center" style={{ marginLeft: '20px', marginRight: '20px' }}>
                                    <MDBCardHeader style={{backgroundColor:"inherit"}}>
                                        <MDBCardTitle >Select Deposit Amount</MDBCardTitle>
                                    </MDBCardHeader>
                                    <MDBCardBody className="text-left">
                                        <MDBInput label="Amount"  type="number" icon="euro-sign" />
                                    </MDBCardBody>
                                    <MDBCardFooter  style={{backgroundColor:"inherit"}}>
                                        <MDBBtn outline color="default" size="lg" style={{ marginTop: '30px' }}>Proceed</MDBBtn>
                                    </MDBCardFooter>
                                </MDBCard>
                            </MDBCol>
                            <MDBCol md="6" className="text-center" middle>
                                <MDBCard className="text-center" style={{ marginLeft: '20px', marginRight: '20px' }}>
                                    <MDBCardHeader style={{backgroundColor:"inherit"}}>
                                        <MDBCardTitle >Select Withdrawal Amount</MDBCardTitle>
                                    </MDBCardHeader>
                                    <MDBCardBody className="text-left">
                                        <MDBInput  label="Amount" type="number" icon="euro-sign" />
                                    </MDBCardBody>
                                    <MDBCardFooter  style={{backgroundColor:"inherit"}}>
                                        <MDBBtn outline color="default" size="lg" style={{ marginTop: '30px' }}>Proceed</MDBBtn>
                                    </MDBCardFooter>
                                </MDBCard>
                            </MDBCol>
                        </MDBRow>
                    </MDBCol>
                </MDBRow>
            </div>
        );
    }
}
