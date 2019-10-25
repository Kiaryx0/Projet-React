import React, { Component } from "react";
import { MDBModal, MDBInput, MDBModalHeader, MDBModalBody, MDBModalFooter, MDBBtn } from "mdbreact"
import { getCardPictureSrc, getCard} from "../../Database/DatabaseCard";

export default class CardEditor extends Component {

    constructor(props) {
        super(props);
        this.toggled = true;
        this.closeEditingCard = null;
        this.state ={
            last_4: "0000",
            brand: "jcb",
            month: "01",
            year: 2018
        };
        this.showEditedCard = this.showEditedCard.bind(this);
        this.generateMonthOption = this.generateMonthOption.bind(this);
        this.generateYearOption = this.generateYearOption.bind(this);
        this.updateLast4 = this.updateLast4.bind(this);
        this.updateBrand = this.updateBrand.bind(this);
        this.updateMonth = this.updateMonth.bind(this);
        this.updateYear = this.updateYear.bind(this);
        this.submit = this.submit.bind(this);

        
    }

     // Validate form and update the card
     submit(event){
        event.preventDefault();
        let cards = JSON.parse(localStorage.getItem("cards"));
        for(var i= 0; i<cards.length; i++){
            if(cards[i].id === this.props.selectedID){
                cards[i].last_4 = this.state.last_4;
                cards[i].brand = this.state.brand;
                cards[i].expired_at = this.state.year + "-" + this.state.month + "-01";
            }
        }
        localStorage.setItem("cards", JSON.stringify(cards));
        this.props.closeEditingCard();
    };

    showEditedCard() {
        if (this.props.selectedID !== 0) {

            let card = getCard(this.props.selectedID);
            if (card !== null) {
                return (
                    <div>
                        <p>Are you sure you want to edit the following card ?</p>
                        <img src={getCardPictureSrc(card)} alt="" style={{ width: '50%', maxWidth: '80px', display: 'inline-block' }}></img>
                        <div style={{ display: 'inline-block', marginLeft: '20px', verticalAlign:'bottom' }}>
                            <h5 style={{textAlign:"left"}}>Card : ****-****-****-{card.last_4}</h5>
                            <p style={{textAlign:"left"}}>Expired at : {card.expired_at}</p>
                        </div>
                    </div>
                )
            }
        }
    }

    updateLast4(event) {
        this.setState({ last_4:  event.target.value});
    };

    updateBrand(event){
        this.setState({ brand:  event.target.value});
    };

    updateMonth(event){
        this.setState({ month:  event.target.value});
    }

    updateYear(event){
        this.setState({ year:  event.target.value});
    }

    generateMonthOption() {
        var lis = [];
        for (var i = 1; i < 13; i++) {
            if(i<10){
                lis.push(<option value={"0"+i} key={i}>{i}</option>);
            }
            else{
                lis.push(<option value={i} key={i}>{i}</option>);
            }
        }
        return lis;
    }

    generateYearOption() {
        var lis = [];
        for (var i = 2018; i < 2040; i++) {
            lis.push(<option value={i} key={i}>{i}</option>);
        }
        return lis;
    }

    render() {
        return (
            <form onSubmit={this.submit}>
            <MDBModal centered isOpen={this.props.toggled} toggle={() => this.props.closeEditingCard()}>
                <MDBModalHeader toggle={() => this.props.closeEditingCard()}>Edit this Card</MDBModalHeader>
                <MDBModalBody>

                    {this.showEditedCard()}
                    <MDBInput value={this.state.last_4} onChange={this.updateLast4} type="number" className="form-control" label="Last Four numbers of your card" required/>
                        <div style={{ marginBottom: '15px' }}>
                            <p className="dark-grey-text" style={{ fontSize: '14px' }}>Card Brand</p>
                            <select className="browser-default custom-select" label="Card Brand" onChange={this.updateBrand}>
                                <option value='jcb'>CB</option>
                                <option value='master_card'>MasterCard</option>
                                <option value='visa'>Visa</option>
                                <option value='american_express'>American Express</option>
                                <option value='union_pay'>Union Pay</option>
                            </select>
                        </div>
                        
                        <p className="dark-grey-text" style={{ fontSize: '14px' }}>Expiration Date</p>

                        <div style={{ width: '45%', display: 'inline-block' }}>
                            <select className="browser-default custom-select" onChange={this.updateMonth}>
                                {this.generateMonthOption()}
                            </select>
                        </div>

                        <div style={{ width: '45%', display: 'inline-block', marginLeft: '20px' }}>
                            <select className="browser-default custom-select" onChange={this.updateYear}>
                                {this.generateYearOption()}
                            </select>
                        </div>

                </MDBModalBody>
                <MDBModalFooter>
                    <MDBBtn color="secondary" onClick={() => this.props.closeEditingCard()}>Close</MDBBtn>
                    <MDBBtn color="primary" type="submit">Proceed</MDBBtn>
                </MDBModalFooter>
            </MDBModal>
            </form>
        );
    }
}