import React, { Component } from "react";
import {
    MDBRow, MDBCol, MDBListGroup, MDBBtn, MDBListGroupItem, MDBCard, MDBCardBody, MDBCardHeader, MDBCardFooter,
    MDBCardTitle, MDBContainer
} from "mdbreact";
import cb from '../Pictures/cb.png';
import visa from '../Pictures/visa.png';
import mastercard from '../Pictures/mastercard.png';
import './style.css'

export default class AccountContent extends Component {

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
                    <h1 className="text-center" style={{ fontSize: '40px', fontWeight: 'bold' }}>My Account Manager</h1>
                </MDBContainer>
                <MDBRow className="text-align-center" >


                    <MDBCol md="6" style={{ paddingLeft: '5%', paddingRight: '5%', marginBottom: '150px', width: '100%' }}>
                        <MDBCard className="text-center" >

                            <MDBCardHeader style={{ backgroundColor: "inherit" }}>
                                <MDBCardTitle style={{ fontSize: '36px', marginTop: '20px', marginBottom: '20px' }}>My Card Manager</MDBCardTitle>
                            </MDBCardHeader>
                            <MDBCardBody style={{ margin: '50px' }}>


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

                                <MDBCardFooter style={{ backgroundColor: "inherit" }}>
                                    <MDBRow middle>
                                        <MDBCol md="6">
                                            <MDBBtn outline color="success" size="lg" style={{ marginTop: '30px' }}>Add Card</MDBBtn>
                                        </MDBCol>
                                        <MDBCol md="6">
                                            <MDBBtn outline color="danger" size="lg" style={{ marginTop: '30px' }}>Delete Card</MDBBtn>
                                        </MDBCol>
                                    </MDBRow>
                                </MDBCardFooter>

                            </MDBCardBody>
                        </MDBCard>
                    </MDBCol>

                    <MDBCol md="6" style={{ paddingRight: '40px', paddingLeft: '100px', marginBottom: '150px' }}>
                        <p>
                            Ici la modif des infos
                        </p>
                    </MDBCol>

                </MDBRow>
            </div>
        );
    }
}
