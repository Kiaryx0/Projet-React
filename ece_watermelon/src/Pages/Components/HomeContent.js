import React, { Component } from "./node_modules/react";
import { MDBRow, MDBCol, MDBBtn } from "./node_modules/mdbreact";
import wallet from './Pictures/wallet.png';
import account from './Pictures/account.png';
import money from './Pictures/money.png';
import {Link} from './node_modules/react-router-dom';

export default class HomeContent extends Component {

    render() {
        return (
            <section className="text-center my-5" style={{paddingBottom:'100px'}}>
                <h2 className="h1-responsive font-weight-bold my-5">
                    Where to get Started?
            </h2>
                <p className="lead grey-text w-responsive mx-auto mb-5" style={{paddingLeft:'50px', paddingRight:'50px'}}>
                    You do not have an account yet ? Don't worry ! You can subscribe really fast to our service and start making payments or receive ones in only a few minutes...
                </p>
                <MDBRow className="text-align-center">
                    <MDBCol md="4"  style={{paddingBottom:'50px'}}>
                        <img src={wallet} alt="" style={{ maxWidth: '150px', maxHeight: '150px' }} className="image-fluid"></img>
                        <h5 className="font-weight-bold my-4">Wallet</h5>
                        <p className="grey-text text-justify" style={{paddingLeft:"50px", paddingRight:"50px", paddingBottom:"20px"}}>
                            Customize your wallet. Add new cards to pay with. Proceed to transactions between other users and your bank from this menu.
                        </p>
                        <Link to="/wallet" style={{ paddingBottom:"50px"}}>
                            <MDBBtn outline color="default" size="lg" >
                                Check Wallet
                            </MDBBtn>
                        </Link>
                        
                    </MDBCol>
                    <MDBCol md="4" style={{paddingBottom:'50px'}}>
                        <img src={account} alt="" style={{ maxWidth: '150px', maxHeight: '150px' }} className="image-fluid"></img>
                        <h5 className="font-weight-bold my-4">Profile</h5>
                        <p className="grey-text text-justify" style={{paddingLeft:"50px", paddingRight:"50px", paddingBottom:"20px"}}>
                            Complete your profile to be able to send and receive Money from your friends who already use WaterMelon. A well documented profile is a must!
                        </p>
                        <Link to="/login" style={{ paddingBottom:"50px"}}>
                            <MDBBtn outline color="default" size="lg" >
                                See Profile
                            </MDBBtn>
                        </Link>
                    </MDBCol>
                    <MDBCol md="4" style={{paddingBottom:'50px'}}>
                        <img src={money} alt="" style={{ maxWidth: '150px', maxHeight: '150px' }} className="image-fluid"></img>
                        <h5 className="font-weight-bold my-4">Transfer</h5>
                        <p className="grey-text text-justify" style={{paddingLeft:"50px", paddingRight:"50px", paddingBottom:"20px"}}>
                            Send money to your friends or ask them to pay you using our App ! Transfer money from your wallet to your bank account or vice versa
                        </p>
                        <Link to="/login" style={{ paddingBottom:"50px"}}>
                            <MDBBtn outline color="default" size="lg" >
                                Transfer Money
                            </MDBBtn></Link>
                    </MDBCol>
                </MDBRow>
            </section>
        );
    }
}
