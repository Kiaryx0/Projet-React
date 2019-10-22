import React, { Component } from "react";
import {
    MDBRow, MDBCol, MDBListGroup, MDBBtn, MDBListGroupItem, MDBCard, MDBCardBody, MDBCardHeader, MDBCardFooter,
    MDBCardTitle, MDBContainer
} from "mdbreact";
import './style.css'
import getSessionCards, { getCardPictureSrc } from "../Database/DatabaseCard";

export default class AccountContent extends Component {

    constructor(props) {
        super(props);
        this.state = {
            modal: false,
            cardSelected: null,
            cards: getSessionCards()
        };
        this.toggle = this.toggle.bind(this);
        this.isActive = this.isActive.bind(this);
        this.setSelectedCard = this.setSelectedCard.bind(this);
        this.cardList = this.cardList.bind(this);

    }

    /**
     * Used to toggle modal state and activate it when a deposit / withdrawal has to be done
     */
    toggle() {
        this.setState({
            modal: !this.state.modal
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
            <MDBListGroupItem key={card.id}  className={this.isActive(card.id)} onClick={() => this.setSelectedCard(card.id)} style={{ paddingTop: '25px', paddingBottom: '25px' }}>
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
                                    {this.cardList()}
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
