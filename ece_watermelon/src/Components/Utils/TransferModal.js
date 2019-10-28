import React from "react";
import { MDBModal, MDBModalHeader, MDBModalBody, MDBModalFooter, MDBBtn } from "mdbreact";
import { makeTransfer } from "../../Database/DatabaseWallet.js";
import { getSessionUser } from "../../Database/DatabaseSession.js";


class TransferModal extends React.Component{

    constructor(props) {
        super(props);
        this.proceed=this.proceed.bind(this);
        this.showInfos = this.showInfos.bind(this);
    }

    /**
     * Validate and update current user wallet and selected user wallet
     */
    proceed() {
        let money = this.props.transfer*100;
        let myID = getSessionUser().id;
        makeTransfer(money, myID, this.props.selectedUser);
        this.props.close();
    }

    /**
     * Confirmation for user to transfer amount to another wallet
     */
    showInfos() {
        if(this.props.selectedUser !== null) {
            let users = JSON.parse(localStorage.getItem("users"));
            let userName = users.filter((user) => {
                return user.id === this.props.selectedUser;
            });
            let userFirstName = userName[0];
            console.log(userFirstName);
            return(
                <div>
                     <h5>Are you sure you want to transfer {this.props.transfer}€ to {userFirstName.first_name} {userFirstName.last_name}?</h5>
                </div>
            );
        }
    }

    render() {
        return(
            <MDBModal centered isOpen={this.props.toggled} toggle={() => this.props.close()}>
                <MDBModalHeader toggle={() => this.props.close()}>Make a Transfer</MDBModalHeader>
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
export default TransferModal;