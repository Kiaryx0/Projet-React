import React, { Component } from "react";
import { MDBModal, MDBModalHeader, MDBModalBody, MDBModalFooter, MDBBtn } from "mdbreact"
import { getCardPictureSrc, getCard } from "../../Database/DatabaseCard";
import { makeWithdrawal } from "../../Database/DatabaseWallet";

export default class WithdrawalModal extends Component {

    constructor(props) {
        super(props);
        this.toggled = false;
        this.close = null;
        this.selectedID = 0;
        this.withdrawal = 0;
        this.proceed = this.proceed.bind(this);
        this.showInfos = this.showInfos.bind(this);
    }

    /**
     * Validate and update wallet
     *  */ 
    proceed() {
        let money = this.props.withdrawal*100;
        let card = getCard(this.props.selectedID);
        makeWithdrawal(money, card)
        this.props.close();
    };

    /**
     * Confirmation for user to withdraw amount from card
     */
    showInfos() {
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
                        <p>You are about to make a withdrawal of {this.props.withdrawal}€ using the following card</p>
                        <img src={getCardPictureSrc(card)} alt="" style={{ width: '50%', maxWidth: '80px', display: 'inline' }}></img>
                        <h5 className="mb-1" style={{ display: 'inline', marginLeft: '20px' }}>Card : ****-****-****-{card.last_4}</h5>
                    </div>
                )
            }
        }
    }

    render() {
        return (
            <MDBModal centered isOpen={this.props.toggled} toggle={() => this.props.close()}>
                <MDBModalHeader toggle={() => this.props.close()}>Make a Withdrawal from bank</MDBModalHeader>
                <MDBModalBody>
                    {this.showInfos()}

                </MDBModalBody>
                <MDBModalFooter>
                    <MDBBtn color="secondary" onClick={() => this.props.close()}>Close</MDBBtn>
                    <MDBBtn color="primary" onClick={() => this.proceed()}>Proceed</MDBBtn>
                </MDBModalFooter>
            </MDBModal>
        );
    }
}