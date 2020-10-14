import React from 'react';
import './About.css';
import ari from '../Images/ari.jpg'
import {Row, Col, Image} from 'react-bootstrap';

const About = (props) => {
    return (
        <div className="about" id="about">
            <Row className="d-flex align-items-center justify-content-center pt-3">
                <div className="about-header">
                    <p className="about-ari-header">about ari</p>
                </div>
            </Row>
            <Row className="px-5 no-gutters">
                <Col md={2}>
                </Col>
                <Col sm ={12} md={4} className="d-flex align-items-center justify-content-center mr-sm-5">
                    <p className="bio">
                    Ari is a Ventura native now living in Santa Barbara who has been baking challah 
                    for over 10 years! She first learned as an undergraduate 
                    student at UC Berkeley and took her love of making challah 
                    with her to New York City and Western MA before returning 
                    to the West Coast. 
                    This is her first venture into selling 
                    it to a larger audience: these strange pandemic times have 
                    inspired her to be of service to the community. The challah 
                    only has organic ingredients, and when possible local ones 
                    at that (like Dylan's raw hive honey!). Now more than ever, 
                    supporting our local and sustainable food system is a meaningful 
                    way to take care of ourselves and the earth. 
                    </p>
                </Col>
                <Col sm={12} md={4} className="d-flex align-items-center justify-content-center img-responsive ml-sm-5 pt-4">
                    <div className="photo">
                        <div className="ari-photo">
                            <Image src={ari} alt="ari, the baker" id="ari" />
                        </div>
                    </div>
                </Col>
                <Col md={2}>
                </Col>
            </Row>
        </div>
    )
}

export default About