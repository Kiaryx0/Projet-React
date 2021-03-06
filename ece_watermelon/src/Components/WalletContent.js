import React, { Component } from "react";
import {
    MDBRow, MDBCol, MDBListGroup, MDBBtn, MDBListGroupItem, MDBCard, MDBCardBody,
    MDBCardTitle, MDBCardText, MDBContainer, MDBCardHeader, MDBView, MDBMask
} from "mdbreact";
import background from '../Pictures/backgroundmain.jpg'
import wallet from '../Pictures/wallet.png';
import deposit from '../Pictures/deposit.png';
import payment from '../Pictures/payment.png';
import withdrawal from '../Pictures/withdrawal.png';
import card from '../Pictures/card.png';
import { Link } from 'react-router-dom';
import getSessionWallet, { getWalletAmount, getUserWithWallet, getSessionWithdrawals, getSessionTransfers, getSessionDeposits } from "../Database/DatabaseWallet";
import "./style.css"


export default class WalletContent extends Component {

    constructor(props) {
        super(props)
        this.state = {
            history: "deposit",
            array: getSessionDeposits()
        }
        this.switchToDeposit = this.switchToDeposit.bind(this);
        this.switchToWithdrawal = this.switchToWithdrawal.bind(this);
        this.switchToTransfer = this.switchToTransfer.bind(this);
        this.buttonSize = this.buttonSize.bind(this);
    }

    /**
     * Set the display mode to the deposit
     */
    switchToDeposit() {
        this.setState({
            history: "deposit",
            array: getSessionDeposits()
        });
    }

    /**
     * Set the display mode to the withdrawal
     */
    switchToWithdrawal() {
        this.setState({
            history: "withdrawal",
            array: getSessionWithdrawals()
        });
    }

    /**
     * Set the display mode to the transfer
     */
    switchToTransfer() {
        this.setState({
            history: "transfer",
            array: getSessionTransfers()
        });
    }

    /**
     * Button Size 
     */
    buttonSize(button) {
        if (button === this.state.history) {
            return { fontSize: "28px", display: "inline-block", margin: "10px", cursor: "pointer" };
        } else {
            return { fontSize: "22px", display: "inline-block", margin: "10px", cursor: "pointer" };
        }
    }

    content() {

        let walletID = getSessionWallet().id
        if (this.state.history === "deposit") {
            return this.state.array.map((deposit) =>
                <MDBListGroupItem key={deposit.id} style={{ paddingTop: '25px', paddingBottom: '25px', backgroundColor:"rgba(125,125,140,0.4)" }}>
                    <div className="d-flex w-100 justify-content-between">
                        <h4 className="mb-1 white-text">Deposit to Bank</h4>
                    </div>
                    <div className="d-flex w-100 justify-content-between">
                        <strong className="white-text" style={{ fontSize: '20px' }}>-{(deposit.amount / 100).toFixed(2)}€</strong>
                    </div>
                </MDBListGroupItem>
            );
        } else if (this.state.history === "withdrawal") {
            return this.state.array.map((withdrawal) =>
                <MDBListGroupItem key={withdrawal.id} style={{ paddingTop: '25px', paddingBottom: '25px', backgroundColor:"rgba(125,125,140,0.4)" }}>
                    <div className="d-flex w-100 justify-content-between">
                        <h4 className="white-text mb-1">Withdrawal from Bank</h4>
                    </div>
                    <div className="d-flex w-100 justify-content-between">
                        <strong className="white-text" style={{ fontSize: '20px' }}>+{(withdrawal.amount / 100).toFixed(2)}€</strong>
                    </div>
                </MDBListGroupItem>
            );
        } else if (this.state.history === "transfer") {
            return this.state.array.map((transfer) => {
                if (transfer.credited_wallet_id === walletID) {
                    return (
                        <MDBListGroupItem key={transfer.id} style={{ paddingTop: '25px', paddingBottom: '25px', backgroundColor:"rgba(125,125,140,0.4)" }}>
                            <div className="d-flex w-100 justify-content-between">
                                <h4 className="mb-1 white-text">Got money from {getUserWithWallet(transfer.debited_wallet_id)}</h4>
                            </div>
                            <div className="d-flex w-100 justify-content-between">
                                <strong className="white-text" style={{ fontSize: '20px' }}>+{(transfer.amount / 100).toFixed(2)}€</strong>
                            </div>
                        </MDBListGroupItem>
                    );
                } else {
                    return (
                        <MDBListGroupItem key={transfer.id} style={{ paddingTop: '25px', paddingBottom: '25px', backgroundColor:"rgba(125,125,140,0.4)" }}>
                            <div className="d-flex w-100 justify-content-between">
                                <h4 className="mb-1 white-text">Sent money to {getUserWithWallet(transfer.credited_wallet_id)}</h4>
                            </div>
                            <div className="d-flex w-100 justify-content-between">
                                <strong className="white-text" style={{ fontSize: '20px' }}>-{(transfer.amount / 100).toFixed(2)}€</strong>
                            </div>
                        </MDBListGroupItem>
                    );
                }
            }

            );
        }
    }

    render() {
        return (
            <MDBView>
                <img src={background} alt="" style={{ backgroundRepeat: "cover", width: "100vw" }} />
                <MDBMask overlay="black-light">
                    <div>
                        <MDBContainer style={{ marginBottom: '50px', marginTop: '50px' }}>
                            <h1 className="text-center white-text" style={{ fontSize: '40px', fontWeight: 'bold' }}>My Wallet Manager</h1>
                        </MDBContainer>
                        <MDBRow className="text-align-center" >
                            <MDBCol md="5" style={{ paddingLeft: '5%', paddingRight: '5%', width: '100%' }}>
                                <MDBCard className="text-center" style={{ maxWidth: "90%", backgroundColor: "rgba(125,125,140,0.5)" }}>
                                    <MDBCardHeader style={{ backgroundColor: "inherit" }}>
                                        <MDBCardTitle className="white-text" style={{ fontSize: '36px' }}>Wallet Activity</MDBCardTitle>
                                        <MDBCardText className="white-text text-justify" style={{ fontSize: '18px' }}>
                                            Keep track here of the last activities on your wallet. This includes payments to other users of WaterMelon, and Transfers From or To your Bank account.
                                </MDBCardText>

                                    </MDBCardHeader>
                                    <MDBCardHeader style={{ backgroundColor: "rgba(125,125,140,0.3)" }}>
                                        <h2 className="white-text" style={this.buttonSize("deposit")} onClick={() => this.switchToDeposit()}>Deposits</h2>
                                        <h2 className="white-text" style={this.buttonSize("withdrawal")} onClick={() => this.switchToWithdrawal()}>Withdrawals</h2>
                                        <h2 className="white-text" style={this.buttonSize("transfer")} onClick={() => this.switchToTransfer()}>Transfers</h2>
                                    </MDBCardHeader>
                                    <MDBCardBody>
                                        <MDBListGroup>
                                            {this.content()}
                                        </MDBListGroup>
                                    </MDBCardBody>
                                </MDBCard>


                            </MDBCol>
                            <MDBCol md="1" className="text-center">
                            </MDBCol>
                            <MDBCol md="6" style={{ paddingRight: '100px', paddingLeft: '40px', paddingBottom: '100px' }}>
                                <MDBRow middle>

                                    <MDBCol md="6" className="text-center">
                                        <img src={wallet} alt="" style={{ width: '100%', maxWidth: '250px', minWidth: '100px', height: 'auto' }} className="image-fluid"></img>
                                    </MDBCol>
                                    <MDBCol md="6" middle className="text-center">
                                        <h1 className="white-text" style={{ fontWeight: 'bold', fontSize: '50px', whiteSpace: 'nowrap' }}>Cash flow</h1>
                                        <h1 className="white-text" style={{ fontSize: '60px' }}>{getWalletAmount()}€</h1>
                                    </MDBCol>
                                </MDBRow>
                                <MDBRow middle style={{ paddingTop: '50px' }}>
                                    <MDBCol md="4" className="text-center">
                                        <img src={deposit} alt="" style={{ width: '100%', maxWidth: '120px' }}></img>
                                    </MDBCol>
                                    <MDBCol md="8" className="text-center" middle>
                                        <Link className="text-center" to="/bank">
                                            <MDBBtn className="black-text" gradient="near-moon" style={{ width: '100%', fontSize: '20px' }}>
                                                Make a Bank Deposit
                                    </MDBBtn>
                                        </Link>
                                    </MDBCol>
                                </MDBRow>
                                <MDBRow middle style={{ paddingTop: '20px' }}>
                                    <MDBCol md="4" className="text-center">
                                        <img src={withdrawal} alt="" style={{ width: '100%', maxWidth: '120px' }}></img>
                                    </MDBCol>
                                    <MDBCol md="8" className="text-center" middle>
                                        <Link className="text-center" to="/bank">
                                            <MDBBtn className="black-text" gradient="near-moon" style={{ width: '100%', fontSize: '20px' }}>
                                                Make a Bank Withdrawal
                                </MDBBtn>
                                        </Link>
                                    </MDBCol>
                                </MDBRow>
                                <MDBRow middle style={{ paddingTop: '20px' }}>
                                    <MDBCol md="4" className="text-center">
                                        <img src={payment} alt="" style={{ width: '100%', maxWidth: '120px' }}></img>
                                    </MDBCol>
                                    <MDBCol md="8" className="text-center" middle>
                                        <Link className="text-center" to="/transfer">
                                            <MDBBtn className="black-text" gradient="near-moon" style={{ width: '100%', fontSize: '20px' }}>
                                                Make a Payment
                                </MDBBtn>
                                        </Link>
                                    </MDBCol>
                                </MDBRow>
                                <MDBRow middle style={{ paddingTop: '20px' }}>
                                    <MDBCol md="4" className="text-center">
                                        <img src={card} alt="" style={{ width: '100%', maxWidth: '120px' }}></img>
                                    </MDBCol>
                                    <MDBCol md="8" className="text-center" middle>
                                        <Link className="text-center" to="/account">
                                            <MDBBtn className="black-text" gradient="near-moon" style={{ width: '100%', fontSize: '20px' }}>
                                                Manage Cards
                                </MDBBtn>
                                        </Link>
                                    </MDBCol>
                                </MDBRow>

                            </MDBCol>
                        </MDBRow>
                    </div>
                </MDBMask>
            </MDBView>
        );
    }
}
