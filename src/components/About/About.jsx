import React from 'react';
import './About.css';
import ari from '../Images/ari.jpg';
import baker1 from '../Images/baker1.jpg';
import baker2 from '../Images/baker2.jpg';
import baker3 from '../Images/baker3.jpg';
import baker4 from '../Images/baker4.jpg';
import baker5 from '../Images/baker5.jpg';
import {Row, Col, Container, Image} from 'react-bootstrap';
import ScrollAnimation from 'react-animate-on-scroll';

const About = (props) => {
    return (
        <div className="about" id="about">
            <ScrollAnimation animateOnce={true} duration={2} animateIn="fadeIn" animatePreScroll={false}>
                <Row className="d-flex align-items-center justify-content-center px-2">
                    <div className="about-header">
                        <p className="about-ari-header">about the baker</p>
                    </div>
                </Row>
                <Row className="px-5 pb-4 no-gutters">
                    <Col md={1}>
                    </Col>
                    <Col sm ={12} md={5} className="d-flex align-items-center justify-content-center mr-xl-5 pb-2">
                        <p className="bio">
                        ari is a ventura native now living in santa barbara who has been baking challah 
                        for over 10 years! she first learned as an undergraduate 
                        student at uc berkeley and took her love of making challah 
                        with her to new york city and western massachussets before returning 
                        to the west coast. 
                        this is her first venture into selling 
                        it to a larger audience: these strange pandemic times have 
                        inspired her to be of service to the community. the challah 
                        only has organic ingredients, and when possible local ones 
                        at that (like <a href="http://wyldeworks.com/dylansrawhivehoney" target="blank" id="dylan">dylan's raw hive honey!</a>). now more than ever, 
                        supporting our local and sustainable food system is a meaningful 
                        way to take care of ourselves and the earth. 
                        </p>
                    </Col>
                    <Col sm={12} md={5} className="d-flex align-items-center justify-content-center img-responsive ml-md-3 pt-xs-4 pb-2" >
                        <div className="photo">
                            <div className="ari-photo">
                                <Image src={ari} alt="ari, the baker" id="ari" />
                            </div>
                        </div>
                    </Col>
                    <Col md={1}>
                    </Col>
                </Row>
                <Row noGutters={true} className="pb-5 d-flex justify-content-center">
                    <Col md={1}>
                    </Col>
                    <div id="baker">
                        <Col md={2}>
                            <Image src={baker1} alt="ari, the baker, baking challah" id="baker-photo"/>
                        </Col>
                    </div>
                    <div id="baker" >
                        <Col md={2}>
                            <Image src={baker2} alt="ari, the baker, baking challah" id="baker-photo"/>
                        </Col>
                    </div>
                    <div id="baker1">
                        <Col md={2}>
                            <Image src={baker3} alt="ari, the baker, baking challah" id="baker-photo1"/>
                        </Col>
                    </div>
                    <div id="baker">
                        <Col md={2}>
                            <Image src={baker4} alt="ari, the baker, baking challah" id="baker-photo"/>
                        </Col>
                    </div>
                    <div id="baker">
                        <Col md={2}>
                            <Image src={baker5} alt="ari, the baker, baking challah" id="baker-photo"/>
                        </Col>
                    </div>
                    <Col md={1}>
                    </Col>
                </Row>
            </ScrollAnimation>
        </div>
    )
}

export default About