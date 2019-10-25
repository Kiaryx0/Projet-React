import React, { Component } from "react";
import {
    MDBRow, MDBCol, MDBListGroup, MDBBtn, MDBListGroupItem, MDBCard, MDBCardBody, MDBCardHeader, MDBCardFooter,
    MDBCardTitle, MDBContainer
} from "mdbreact";
import './style.css';
import getSessionCards, { getCardPictureSrc } from "../Database/DatabaseCard";
import CardAdder from "./Utils/CardAdder";
import CardDeleter from "./Utils/CardDeleter";
import CardEditor from "./Utils/CardEditor";
import AccountEditor from "./Utils/AccountEditor";

export default class AccountContent extends Component {

    constructor(props) {
        super(props);
        this.state = {
            modalAddCard: false,
            modalDeleteCard: false,
            modalEditCard: false,
            cardSelected: null,
            cards: getSessionCards()
        };
        this.toggle = this.toggle.bind(this);
        this.isActive = this.isActive.bind(this);
        this.setSelectedCard = this.setSelectedCard.bind(this);
        this.cardList = this.cardList.bind(this);
        this.showAddingCard = this.showAddingCard.bind(this);
        this.closeAddingCard = this.closeAddingCard.bind(this);
        this.showDeletingCard = this.showDeletingCard.bind(this);
        this.closeDeletingCard = this.closeDeletingCard.bind(this);
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
     * Used to set Adding Card modal state to normal
     */
    closeAddingCard() {
        this.setState({
            modalAddCard: false,
            cards: getSessionCards()
        });
    }

    /**
     * Used to set Editing Card modal state to active
     */
    showEditingCard() {
        if(this.state.cardSelected !== null){
            this.setState({
                modalEditCard: true
            });
        }
    }

    /**
     * Used to set Editing Card modal state to normal
     */
    closeEditingCard() {
        this.setState({
            modalEditCard: false,
            cards: getSessionCards()
        });
    }

    /**
     * Used to set Adding Card modal state to active
     */
    showDeletingCard() {
        if(this.state.cardSelected !== null){
            this.setState({
                modalDeleteCard: true
            });
        }
    }

    /**
     * Used to set Deleting Card modal state to normal
     */
    closeDeletingCard() {
        this.setState({
            modalDeleteCard: false,
            cards: getSessionCards()
        });
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
                    <img src={getCardPictureSrc(card)} alt="" style={{ width: '100%', maxWidth: '80px', display: 'inline-block' }}></img>
                    <div style={{ display: 'inline-block', marginLeft: '20px', verticalAlign:'bottom' }}>
                        <h5 style={{ display: 'inline', marginLeft: '20px', textAlign:"left" }}>Card : ****-****-****-{card.last_4}</h5>
                        <p style={{marginLeft: '20px',textAlign:"left"}}>Expired at : {card.expired_at}</p>
                    </div>
                </div>
            </MDBListGroupItem>
        )
    }

    render() {
        return (

            <div>
                <CardAdder toggled={this.state.modalAddCard} closeAddingCard={() =>this.closeAddingCard()}/> 
                <CardDeleter  toggled={this.state.modalDeleteCard} selectedID={this.state.cardSelected} closeDeletingCard={() =>this.closeDeletingCard()}/>
                <CardEditor  toggled={this.state.modalEditCard} selectedID={this.state.cardSelected} closeEditingCard={() =>this.closeEditingCard()}/>
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
                            </MDBCardBody>
                                <MDBCardFooter style={{ backgroundColor: "inherit" }}>
                                    <MDBRow middle>
                                        <MDBCol md="4">
                                            <MDBBtn outline color="success" size="lg"onClick={()=>this.showAddingCard()}>Add Card</MDBBtn>
                                        </MDBCol>
                                        <MDBCol md="4">
                                            <MDBBtn outline color="warning" size="lg" onClick={()=>this.showEditingCard()}>Edit Card</MDBBtn>
                                        </MDBCol>
                                        <MDBCol md="4">
                                            <MDBBtn outline color="danger" size="lg" onClick={()=>this.showDeletingCard()}>Delete Card</MDBBtn>
                                        </MDBCol>
                                    </MDBRow>
                                </MDBCardFooter>

                            
                        </MDBCard>
                    </MDBCol>

                    <MDBCol md="6" style={{ paddingLeft: '5%', paddingRight: '5%', marginBottom: '150px', width: '100%' }}>
                        <AccountEditor refresh={this.props.refresh}/>
                    </MDBCol>

                </MDBRow>
            </div>
        );
    }
}
