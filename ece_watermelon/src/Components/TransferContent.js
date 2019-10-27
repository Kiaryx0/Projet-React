import React from 'react';
import {
    MDBView, MDBMask, MDBContainer, MDBCard, MDBRow, MDBCol,
    MDBCardHeader, MDBCardTitle, MDBCardBody, MDBCardText, MDBBtn, MDBInput, MDBCardFooter
} from 'mdbreact'
import wallet from '../Pictures/wallet.png';
import background from '../Pictures/backgroundmain.jpg'
import './style.css';
import { getWalletAmount, getSessionTransfers } from '../Database/DatabaseWallet.js';

class TransferContent extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            dbUsers: JSON.parse(localStorage.getItem("users")),
            wallet: parseFloat(getWalletAmount()).toFixed(2),
            transferAmount: ''
        }
    }

    handleAmountChange(event) {
        this.setState({
            transferAmount: event.target.value
        })
    }

    handleSubmit(event) {
        event.preventDefault();

    }

    render() {
        return (
            <MDBView>
                <img src={background} alt="" style={{ backgroundRepeat: "cover" }} />
                <MDBMask overlay="black-light">
                    <MDBContainer style={{ marginBottom: '50px', marginTop: '50px' }}>
                        <h1 className="text-center white-text" style={{ fontSize: '40px', fontWeight: 'bold' }}>Transfer Manager</h1>
                    </MDBContainer>
                    <MDBRow className="text-align-center">
                        <MDBCol md="6" style={{ paddingLeft: '5%', paddingRight: '5%', marginBottom: '100px', width: '100%' }}>
                            <MDBCard className="text-center" style={{ backgroundColor: "rgba(125,125,140,0.5)" }}>
                                <MDBCardHeader style={{ backgroundColor: "inherit" }}>
                                    <MDBCardTitle className="white-text" style={{ fontSize: '36px', marginTop: '20px', marginBottom: '20px' }}>To who?</MDBCardTitle>
                                </MDBCardHeader>
                                <MDBCardBody>
                                    <MDBCardText className="text-justify" style={{ fontSize: '18px', color: "#9e9e9e" }}>
                                        Select a friend to who you want to transfer your money. You will be debit from your current wallet according to the amount you want to transfer.
                                    </MDBCardText>
                                    <form onSubmit={this.handleSubmit}>
                                        <input className="form-control" type="text" placeholder="Search a user" onChange={this.handleSearchInput}/>
                                        <MDBBtn gradient="near-moon" rounded type="submit">Search</MDBBtn>
                                    </form>
                                </MDBCardBody>
                            </MDBCard>
                        </MDBCol>

                        <MDBCol style={{ paddingRight: '100px', paddingLeft: '40px', marginBottom: '100px' }}>
                            <MDBRow middle>
                                <MDBCol md="6" className="text-center">
                                    <img src={wallet} alt="" style={{ width: '100%', maxWidth: '250px', minWidth: '100px', height: 'auto' }} className="image-fluid"></img>
                                </MDBCol>
                                <MDBCol md="6" middle className="text-center">
                                    <h1 className="white-text" style={{ fontWeight: 'bold', fontSize: '50px', whiteSpace: 'nowrap' }}>Cash flow</h1>
                                    <h1 style={{ fontSize: '60px' }}>{this.state.wallet}€</h1>
                                </MDBCol>
                            </MDBRow>
                            <MDBRow middle style={{ paddingTop: '50px' }}>
                                <MDBCol md="6" className="text-center" middle>
                                    <MDBCard className="text-center" style={{ marginLeft: '20px', marginRight: '20px' }}>
                                        <MDBCardHeader>
                                            <MDBCardTitle className="white-text">Transfer Amount</MDBCardTitle>
                                        </MDBCardHeader>
                                        <MDBCardBody className="text-left">
                                            <MDBInput label="ex:17.65" type="number" icon="euro-sign" value={this.state.transferAmount} onChange={this.handleAmountChange} />
                                        </MDBCardBody>
                                        <MDBCardFooter >
                                            <MDBBtn gradient="near moon">Proceed</MDBBtn>
                                        </MDBCardFooter>
                                    </MDBCard>
                                </MDBCol>
                            </MDBRow>
                        </MDBCol>
                    </MDBRow>
                </MDBMask>
            </MDBView>
        );
    };
}
export default TransferContent;