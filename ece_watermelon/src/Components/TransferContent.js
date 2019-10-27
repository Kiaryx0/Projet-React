import React from 'react';
import {
    MDBView, MDBMask, MDBContainer, MDBCard, MDBRow, MDBCol, MDBListGroupItem, MDBListGroup,
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
            searchedUsers: '',
            wallet: parseFloat(getWalletAmount()).toFixed(2),
            transferAmount: '',
            searchInput: '',
            userSearch: false,
            userSelected: '',
            modalTransfer: false
        }
        this.isActive=this.isActive.bind(this);
        this.setSelectedUser = this.setSelectedUser.bind(this);
        this.handleAmountInput=this.handleAmountInput.bind(this);
        this.handleSearchInput=this.handleSearchInput.bind(this);
        this.handleSearch=this.handleSearch.bind(this);
        this.usersList=this.usersList.bind(this);
    }

    handleAmountInput(event) {
        this.setState({
            transferAmount: event.target.value
        })
    }
    
    handleSearchInput(event){
        this.setState({
            searchInput: event.target.value
        })
    }

    openTransfer(){
        this.setState({
            transferAmount: parseFloat(this.state.transferAmount).toFixed(2)
        });
        if (parseFloat(this.state.transferAmount) > 0.0){
            this.setState({
                modalTransfer: true
            });
        }
    }

    closeTransfer() {
        this.setState({
            modalTransfer: false,
        })
    }

    handleSearch(event) {
        event.preventDefault();
        const dbUsers = JSON.parse(localStorage.getItem("users"));
        const lowerCasedInput = this.state.searchInput.toString().toLowerCase();
        var matchedSearched = dbUsers.filter((user) => {
            const lowerCasedFN = user.first_name.toLowerCase();
            const lowerCasedLN = user.last_name.toLowerCase();
            if(lowerCasedFN.includes(lowerCasedInput) || lowerCasedLN.includes(lowerCasedInput)){
                return user;
            }
        });
        this.setState({
            userSearch: true,
            searchedUsers: matchedSearched
        });
        console.log(lowerCasedInput);
        console.log(matchedSearched);
    }

    isActive(userID) {
        if (userID === this.state.userSelected) {
            return 'active';
        } else {
            return 'hover';
        }
    }

    setSelectedUser(userID) {
        this.setState({
            userSelected: userID
        });
    }

    usersList(){
        return this.state.searchedUsers.map((user) =>
        <MDBListGroupItem key={user.id} className={this.isActive(user.id)} onClick={() => this.setSelectedUser(user.id)}>
            <div>
                <strong style={{ fontSize: '20px' }}>{user.first_name} {user.last_name}
                </strong>
            </div>
        </MDBListGroupItem>
        );
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
                                <MDBCardHeader>
                                    <MDBCardTitle className="white-text" style={{ fontSize: '36px', marginTop: '20px', marginBottom: '20px' }}>To who?</MDBCardTitle>
                                </MDBCardHeader>
                                <MDBCardBody>
                                    <MDBCardText className="text-justify" style={{ fontSize: '18px', color: "#9e9e9e" }}>
                                        Select a friend to who you want to transfer your money. You will be debit from your current wallet according to the amount you want to transfer.
                                    </MDBCardText>
                                    <form onSubmit={this.handleSearch}>
                                        <input required className="form-control" type="text" placeholder="Search a user" onChange={this.handleSearchInput}/>
                                        <MDBBtn className="mt-3" gradient="near-moon" rounded type="submit">Search</MDBBtn>
                                    </form>
                                </MDBCardBody>
                            </MDBCard>
                            {this.state.userSearch && 
                            <MDBCard className="text-center mt-3" style={{ backgroundColor: "rgba(125,125,140,0.5)" }}>
                                <MDBCardHeader>
                                    <MDBCardTitle className="white-text" style={{ fontSize: '36px', marginTop: '20px', marginBottom: '20px' }}>Search results</MDBCardTitle>
                                </MDBCardHeader>
                                <MDBCardBody>
                                    <MDBListGroup>
                                        {this.usersList()}
                                    </MDBListGroup>
                                </MDBCardBody>
                                </MDBCard>
                            }
                        </MDBCol>

                        <MDBCol style={{ paddingRight: '100px', paddingLeft: '40px', marginBottom: '100px' }}>
                            <MDBRow>
                                <MDBCol className="text-center">
                                    <img src={wallet} alt="" style={{ width: '100%', maxWidth: '250px', minWidth: '100px', height: 'auto' }} className="image-fluid"></img>
                                </MDBCol>
                                <MDBCol middle className="text-center">
                                    <h1 className="white-text" style={{ fontWeight: 'bold', fontSize: '50px', whiteSpace: 'nowrap' }}>Cash flow</h1>
                                    <h1 className="white-text" style={{ fontSize: '60px' }}>{this.state.wallet}€</h1>
                                </MDBCol>
                            </MDBRow>
                            <MDBRow style={{ paddingTop: '50px' }}>
                                <MDBCol className="d-flex">
                                    <MDBCard className="text-center" style={{ marginLeft: '20px', marginRight: '20px', backgroundColor: "rgba(125,125,140,0.5)" }}>
                                        <MDBCardHeader>
                                            <MDBCardTitle className="white-text">Transfer Amount</MDBCardTitle>
                                        </MDBCardHeader>
                                        <MDBCardBody className="text-left">
                                            <MDBInput label="Ex: 20.00" type="number" icon="euro-sign" value={this.state.transferAmount} onChange={this.handleAmountInput} />
                                        </MDBCardBody>
                                        <MDBCardFooter >
                                            <MDBBtn gradient="near-moon" onClick={this.handleTransfer}>Proceed</MDBBtn>
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