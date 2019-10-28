import React, { Component } from "react";
import { MDBModal, MDBModalHeader, MDBModalBody, MDBModalFooter, MDBBtn } from "mdbreact"
import { getCardPictureSrc, getCard } from "../../Database/DatabaseCard";
import { makeDeposit } from "../../Database/DatabaseWallet";

export default class DepositModal extends Component {

    constructor(props) {
        super(props);
        this.toggled = false;
        this.close = null;
        this.selectedID = 0;
        this.deposit = 0;
        this.proceed = this.proceed.bind(this);
        this.showInfos = this.showInfos.bind(this);
    }

    /**
     * Validate and update wallet
     * */
    proceed() {
        let money = this.props.deposit*100;
        let card = getCard(this.props.selectedID);
        makeDeposit(money, card);
        this.props.close();
    };

    /**
     * Confirmation for user to deposit amount in his wallet
     */
    showInfos() {
        if (this.props.selectedID !== 0) {
            var cards = JSON.parse(localStorage.getItem("cards"));
            var array = cards.filter(card => {
                return card.id === this.props.selectedID
            });
            let card = null;
            if (array.length === 1) {
                card = array[0];
                return (
                    <div>
                        <p>You are about to make a deposit of {this.props.deposit}€ using the following card</p>
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
                <MDBModalHeader toggle={() => this.props.close()}>Make a Deposit</MDBModalHeader>
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