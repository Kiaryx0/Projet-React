import React from "react";
import { MDBModal, MDBModalHeader, MDBModalBody, MDBModalFooter, MDBBtn } from "mdbreact";
import { makeTransfer } from "../../Database/DatabaseWallet.js";
import { getSessionUser } from "../../Database/DatabaseSession.js";


class TransferModal extends React.Component{

    constructor(props) {
        super(props);
        this.toggled = false;
        this.close = null;
        this.selectedUser = 0;
        this.transfer = 0;
        this.proceed=this.proceed.bind(this);
        this.showInfos = this.showInfos.bind(this);
    }

    proceed() {
        let money = this.props.deposit*100;
        let myID = getSessionUser().id;
        makeTransfer(money, myID, this.props.selectedUser);
        this.props.close();
    }

    showInfos() {
        if(this.props.selectedUser !== 0) {
            let users = JSON.parse(localStorage.getItem("users"));
            let userName = users.filter((user) => {
                return user.id === this.props.selectedUser
            });
            // let userFirstName = userName[0].first_name;
            // let userLastName = userName[0].last_name;
            // return(
            //     <div>
            //         <h5>Are you sure you want to transfer {this.props.transfer}€ to {userFirstName} {userLastName}?</h5>
            //     </div>
            // );
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