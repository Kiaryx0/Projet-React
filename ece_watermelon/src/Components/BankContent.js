import React, { Component } from "react";
import {
    MDBRow, MDBCol, MDBListGroup, MDBBtn, MDBListGroupItem, MDBCard, MDBCardBody, MDBCardHeader, MDBCardFooter,
    MDBCardTitle, MDBCardText, MDBContainer, MDBInput
} from "mdbreact";
import wallet from '../Pictures/wallet.png';
import './style.css'
import { getWalletAmount } from "../Database/DatabaseWallet";
import getSessionCards, { getCardPictureSrc } from "../Database/DatabaseCard";
import CardAdder from "./Utils/CardAdder"

export default class WalletContent extends Component {

    constructor(props) {
        super(props);
        this.state = {
            modalAddCard: false,
            cardSelected: null,
            cards: getSessionCards()
        };
        this.isActive = this.isActive.bind(this);
        this.setSelectedCard = this.setSelectedCard.bind(this);
        this.cardList = this.cardList.bind(this);
    }

    /**
     * Used to set Adding Card modal state to active
     */
    showAddingCard() {
        this.setState({
            modalAddCard: true
        });
    }

    /**
     * Used to set Adding Card modal state to active
     */
    closeAddingCard() {
        this.setState({
            modalAddCard: false,
            cards: getSessionCards()
        });
    }

    /**
     * Return active css props if the card id item used in render is the one of the state
     * @param {*card id of the list item} cardID 
     */
    isActive(cardID) {
        if (cardID === this.state.cardSelected) {
            return 'active';
        } else {
            return 'hover';
        }
    }

    /**
     * Set Active css ID
     * @param {active card id} cardID 
     */
    setSelectedCard(cardID) {
        this.setState({
            cardSelected: cardID
        });
    }

    /**
     * Display the card list of the current user
     */
    cardList() {
        return this.state.cards.map((card) =>
            <MDBListGroupItem key={card.id} className={this.isActive(card.id)} onClick={() => this.setSelectedCard(card.id)} style={{ paddingTop: '25px', paddingBottom: '25px' }}>
                <div className="justify-content-between">
                    <img src={getCardPictureSrc(card)} alt="" style={{ width: '100%', maxWidth: '80px', display: 'inline' }}></img>
                    <h5 className="mb-1" style={{ display: 'inline', marginLeft: '20px' }}>Card : ****-****-****-{card.last_4}</h5>
                </div>
            </MDBListGroupItem>
        )
    }

    render() {
        return (
            <div>

                <CardAdder toggled={this.state.modalAddCard} closeAddingCard={() =>this.closeAddingCard()}/> 

                <MDBContainer style={{ marginBottom: '50px', marginTop: '50px' }}>
                    <h1 className="text-center" style={{ fontSize: '40px', fontWeight: 'bold' }}>My Bank Manager</h1>
                </MDBContainer>
                <MDBRow className="text-align-center" >

                    <MDBCol md="6" style={{ paddingLeft: '5%', paddingRight: '5%', marginBottom: '100px', width: '100%' }}>
                        <MDBCard className="text-center" >
                            <MDBCardBody>

                                <MDBCardHeader style={{ backgroundColor: "inherit" }}>
                                    <MDBCardTitle style={{ fontSize: '36px', marginTop: '20px', marginBottom: '20px' }}>My Card Manager</MDBCardTitle>
                                </MDBCardHeader>
                                <MDBCardText className=" text-justify" style={{ fontSize: '18px' }}>
                                    Select a Card among all the cards associated to your Watermelon Account. You may use this card to make deposit to your bank account as well as withdrawals
                                </MDBCardText>

                                <MDBListGroup >
                                    {this.cardList()}
                                </MDBListGroup>

                                <MDBCardFooter style={{ backgroundColor: "inherit" }}>
                                    
                                        <MDBBtn outline color="dark" size="lg" onClick={()=>this.showAddingCard()} style={{ marginTop: '30px' }}>Add New Card</MDBBtn>
                                    
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
                                <h1 style={{ fontSize: '60px' }}>{getWalletAmount()}</h1>
                            </MDBCol>
                        </MDBRow>
                        <MDBRow middle style={{ paddingTop: '50px' }}>
                            <MDBCol md="6" className="text-center" middle>
                                <MDBCard className="text-center" style={{ marginLeft: '20px', marginRight: '20px' }}>
                                    <MDBCardHeader style={{ backgroundColor: "inherit" }}>
                                        <MDBCardTitle >Select Deposit Amount</MDBCardTitle>
                                    </MDBCardHeader>
                                    <MDBCardBody className="text-left">
                                        <MDBInput label="Amount" type="number" icon="euro-sign" />
                                    </MDBCardBody>
                                    <MDBCardFooter style={{ backgroundColor: "inherit" }}>
                                        <MDBBtn outline color="default" size="lg" style={{ marginTop: '30px' }}>Proceed</MDBBtn>
                                    </MDBCardFooter>
                                </MDBCard>
                            </MDBCol>
                            <MDBCol md="6" className="text-center" middle>
                                <MDBCard className="text-center" style={{ marginLeft: '20px', marginRight: '20px' }}>
                                    <MDBCardHeader style={{ backgroundColor: "inherit" }}>
                                        <MDBCardTitle >Select Withdrawal Amount</MDBCardTitle>
                                    </MDBCardHeader>
                                    <MDBCardBody className="text-left">
                                        <MDBInput label="Amount" type="number" icon="euro-sign" />
                                    </MDBCardBody>
                                    <MDBCardFooter style={{ backgroundColor: "inherit" }}>
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
