import React from 'react';
import './ChallahHacks.css';
import {Row, Col} from 'react-bootstrap';
import ScrollAnimation from 'react-animate-on-scroll';

const ChallahHacks = (props) => {
    return(
        <div className="challah-hacks" id="challahhacks">
             <ScrollAnimation animateOnce={true} duration={2} animateIn="fadeIn" animatePreScroll={false}>
                <Row className="d-flex justify-content-center">
                    <Col>
                        <p className="hacks-title">#challahhacks</p>
                    </Col>
                </Row>
                <Row className="d-flex justify-content-center">
                    <Col>
                        <p>the freezer is your friend</p>
                    </Col>
                    <Col>
                        <p>best french toast of your life</p>
                    </Col>
                    <Col>
                        <p>best french toast of your life</p>
                    </Col>
                </Row>

             </ScrollAnimation>
        </div>
    )

}

export default ChallahHacks;