import React from 'react';
import './Header.css';
import challah from '../Images/challah.jpg';
import logo from '../Images/logo.jpg';
import challahheader from '../Images/challahheader.jpg';
import {Row, Col, Image} from 'react-bootstrap';

const Header = (props) => {
    return (
        <div className="header" id="home">
            <Row className="mt-5 pt-5">
                <Col sm={12} className="mt-5 mb-3">
                    <h1 className="challah-by-ari">challah by ari</h1>
                </Col>
                <Col sm={12}>
                    <p className="ingredients">all organic ingredients, including local honey</p>
                </Col>
            </Row>
            <Row >
                <Col sm={12} md={4} className="d-flex align-items-center justify-content-center pl-md-5 pb-3">
                    <div className="photo-header1">
                        <Image src={challah} alt="challah" id="photo-header1"/>
                    </div>
                </Col>
                <Col sm={12} md={4} className="d-flex align-items-center justify-content-center pb-3">
                    <div className="photo-header2"> 
                        <Image src={logo} alt="logo challah by ari" id="photo-header2"/>
                    </div>
                </Col>
                <Col sm={12} md={4} className="d-flex align-items-center justify-content-center pr-md-5 pb-3">
                    <div className="photo-header3"> 
                        <Image src={challahheader} alt="challah with flowers" id="photo-header3"/>
                    </div>
                </Col>
            </Row>
            <Row className="pb-5"> 
                <Col className="py-3">
                    <p className="catchphrase">#challahlujah there’s good challah in santa barbara!</p>
                </Col>
            </Row>
        </div>
    )
}

export default Header;