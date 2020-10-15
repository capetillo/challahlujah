import React from 'react';
import './Footer.css';
import instagram from '../Images/instagram.png';
import {Row, Col, Image} from 'react-bootstrap';


const Footer = (props) => {
    return (
        <div className="footer">
            <Row className="p-3 ml-md-3 d-flex justify-content-start">
                <Col xs={6} className="p-3 ml-md-3 d-flex justify-content-start">
                    <p id="footer-line-1" >all organic. local honey. parve.</p>
                </Col>
                <Col className="p-3 mr-md-4 d-flex justify-content-end">
                    <a href="https://www.instagram.com/challahbyari/" target="blank">
                        <Image src={instagram} alt="instagram" id="ig-logo" />
                    </a>
                </Col>
                <Col xs={12} className="p-3 ml-md-3 d-flex justify-content-start">
                    <p id="footer-line-2">made fresh in santa barbara, ca</p>
                </Col>
            </Row>
        </div>
    )
}

export default Footer;