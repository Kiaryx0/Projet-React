import React, { Component } from "react";
import { MDBModal, MDBModalHeader, MDBModalBody, MDBModalFooter, MDBBtn } from "mdbreact"
import { getCardPictureSrc } from "../../Database/DatabaseCard";

export default class CardDeleter extends Component {

    constructor(props) {
        super(props);
        this.toggled = true;
        this.closeDeletingCard = null;
        this.selectedID = 0;
        this.delete = this.delete.bind(this);
        this.showDeletedCard = this.showDeletedCard.bind(this);
    }

    /** 
    * Validate form and update the card
    * */
    delete() {
        var cards = JSON.parse(localStorage.getItem("cards"));
        var array = cards.filter(card => {
            return card.id !== this.props.selectedID
        })
        localStorage.setItem("cards", JSON.stringify(array));
        this.props.closeDeletingCard();
    };

    /**
     * Confirmation for card selected to delete
     */
    showDeletedCard() {
        if (this.props.selectedID !== 0) {

            var cards = JSON.parse(localStorage.getItem("cards"));
            var array = cards.filter(card => {
                return card.id === this.props.selectedID
            })

            let card = null;
            if (array.length === 1) {
                card = array[0];
                return (

                    <div>
                        <p>Are you sure you want to delete the following card ?</p>
                        <img src={getCardPictureSrc(card)} alt="" style={{ width: '50%', maxWidth: '80px', display: 'inline' }}></img>
                        <h5 className="mb-1" style={{ display: 'inline', marginLeft: '20px' }}>Card : ****-****-****-{card.last_4}</h5>
                    </div>
                )
            }
        }
    }

    render() {
        return (
            <MDBModal centered isOpen={this.props.toggled} toggle={() => this.props.closeDeletingCard()}>
                <MDBModalHeader toggle={() => this.props.closeDeletingCard()}>Add a new Card</MDBModalHeader>
                <MDBModalBody>

                    {this.showDeletedCard()}

                </MDBModalBody>
                <MDBModalFooter>
                    <MDBBtn color="secondary" onClick={() => this.props.closeDeletingCard()}>Close</MDBBtn>
                    <MDBBtn color="primary" onClick={() => this.delete()}>Proceed</MDBBtn>
                </MDBModalFooter>
            </MDBModal>
        );
    }
}