import React, { Component } from "react";
import { MDBRow, MDBCol, MDBIcon } from "mdbreact";
import wallet from './Pictures/wallet.png';

export default class HomeContent extends Component{

    render() {
        return (
            <section className="text-center my-5">
                <h2 className="h1-responsive font-weight-bold my-5">
                    Where to get Started?
              </h2>
                <p className="lead grey-text w-responsive mx-auto mb-5">
                    You do not have an account yet ? Don't worry ! You can subscribe really fast to our service and start making payments or receive ones in only a few minutes...
              </p>
                <MDBRow>
                    <MDBCol md="4">
                        <img src={wallet} alt="" style={{maxWidth:'100px', maxHeight:'100px'}}></img>
                        <h5 className="font-weight-bold my-4">Wallet</h5>
                        <p className="grey-text mb-md-0 mb-5">
                            Customize your wallet. Add new cards. Proceed to transactions between other users and your bank.
                        </p>
                    </MDBCol>
                    <MDBCol md="4">
                        <MDBIcon icon="book" size="3x" className="cyan-text" />
                        <h5 className="font-weight-bold my-4">Tutorials</h5>
                        <p className="grey-text mb-md-0 mb-5">
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                            Reprehenderit maiores aperiam minima assumenda deleniti hic.
                  </p>
                    </MDBCol>
                    <MDBCol md="4">
                        <MDBIcon far icon="comments" size="3x" className="orange-text" />
                        <h5 className="font-weight-bold my-4">Support</h5>
                        <p className="grey-text mb-md-0 mb-5">
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                            Reprehenderit maiores aperiam minima assumenda deleniti hic.
                  </p>
                    </MDBCol>
                </MDBRow>
            </section>
        );
    }
}
