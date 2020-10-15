import React from 'react';
import './Footer.css';
import {Row, Col} from 'react-bootstrap';


const Footer = (props) => {
    return (
        <div className="footer">
            <Row className="p-3 ml-md-3 d-flex justify-content-start">
               
                <Col>
                    <p id="footer-line-1"  lg={12}>all organic. local honey. fresh. parve</p>
                </Col>
                </Row>
                <Row className="p-3 ml-md-3 d-flex justify-content-start">
                <Col>
                    <p id="footer-line-2"  lg={12}>santa barbara, ca</p>
                </Col>
            </Row>
        </div>
    )
}

export default Footer;