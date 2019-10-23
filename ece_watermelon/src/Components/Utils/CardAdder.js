import React, { Component } from "react";
import { MDBInput, MDBModal, MDBModalHeader, MDBModalBody, MDBModalFooter, MDBBtn } from "mdbreact"
import { getSessionUser } from "../../Database/DatabaseSession";

export default class CardAdder extends Component {

    constructor(props) {
        super(props);
        this.toggled = true;
        this.closeAddingCard = null;
        this.state = {
            last_4: "0000",
            brand: "jcb",
            month: "01",
            year: 2018
        }
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
        if(this.state.last_4.length === 4 && /^\d+$/.test(this.state.last_4.length)){
            console.log(this.state.last_4 +" " + this.state.brand + " "+ this.state.month + " "+ this.state.year);
            let cards = JSON.parse(localStorage.getItem("cards"));
            let identifier = cards.length+1;
            cards.push({id: identifier,
                        last_4: this.state.last_4, 
                        brand: this.state.brand, 
                        expired_at: this.state.year + "-" + this.state.month + "-01", 
                        user_id: getSessionUser().id});
            localStorage.setItem("cards", JSON.stringify(cards));
            this.close();
        }
    };

    close(){
        this.setState({
            last_4: "0000",
            brand: "jcb",
            month: "01",
            year: 2018
        });
        this.props.closeAddingCard();
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
            
            <form className="needs-validation" onSubmit={this.submit}>
            <MDBModal centered isOpen={this.props.toggled} toggle={() => this.close()}>
                <MDBModalHeader toggle={() => this.close()}>Add a new Card</MDBModalHeader>
                <MDBModalBody>

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
                    <MDBBtn color="secondary" onClick={() => this.close()}>Close</MDBBtn>
                    <MDBBtn color="primary" type="submit">Proceed</MDBBtn>
                </MDBModalFooter>
            </MDBModal>
            </form>
        );
    }
}