import React, { Component } from "react";
import { MDBCarousel, MDBCarouselInner, MDBCarouselItem, MDBView, MDBContainer, MDBMask, MDBCarouselCaption } from "mdbreact";

import slide1 from './CarrouselSlide/slide1.jpg';
import slide2 from './CarrouselSlide/slide2.jpg';
import slide3 from './CarrouselSlide/slide3.png';


class HomeCarousel extends Component {
    render() {
        return (
            
            <MDBContainer style={{ maxWidth: '100%' }} className="px-0">
                <MDBCarousel activeItem={1} length={3} showControls={false} showIndicators={false} className="z-depth-1" slide>
                    <MDBCarouselInner>
                        <MDBCarouselItem itemId="1">
                            <MDBView>
                                <img className="d-block w-100" src={slide2} alt="Second slide" />
                                <MDBMask overlay="black-light" />
                            </MDBView>
                            <MDBCarouselCaption>
                                <h1 className="h1-responsive">Pay Fast Your Friends !</h1>
                                <h5 className="h5-responsive">Our solution is really fast and designed to do micro-payments to your friends !</h5>
                            </MDBCarouselCaption>
                        </MDBCarouselItem>
                        <MDBCarouselItem itemId="2">
                            <MDBView>
                                <img className="d-block w-100" src={slide1} alt="First slide" />
                                <MDBMask overlay="black-light" />
                            </MDBView>
                            <MDBCarouselCaption>
                                <h1 className="h1-responsive">Online Payments with WaterMelon !</h1>
                                <h5 className="h5-responsive">WaterMelon is an online micropayments platform that allows you to manage a virtual wallet. Use our tools to manage payments between friends, family or anyone! </h5>
                            </MDBCarouselCaption>
                        </MDBCarouselItem>
                        <MDBCarouselItem itemId="3">
                            <MDBView>
                                <img className="d-block w-100" src={slide3} alt="First slide" />
                                <MDBMask overlay="black-light" />
                            </MDBView>
                            <MDBCarouselCaption>
                                <h1 className="h1-responsive">Security is our Priority</h1>
                                <h5 className="h5-responsive">WaterMelon guarantees the Security of the transactions and the Privacy of your personal data. Your wallet is safe with us ! </h5>
                            </MDBCarouselCaption>
                        </MDBCarouselItem>
                    </MDBCarouselInner>
                </MDBCarousel>
            </MDBContainer>
        );
    }

}


export default HomeCarousel;