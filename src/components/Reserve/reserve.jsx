import React from 'react';
import './Reserve.css';
import plain from '../Images/plain.jpg';
import poppyseed from '../Images/poppyseed.jpg';
import sesame from '../Images/sesame.jpg';
import zaatar from '../Images/zaatar.jpg'
import {Row, Col, Image} from 'react-bootstrap';

const Reserve = (props) => {
    return (
        <div className="reserve">
             <Row className="d-flex align-items-center justify-content-center pt-3">
                <div className="reserve-header">
                    <p className="reserve-header">reserve your challah</p>
                </div>
            </Row>
            <Row>
                <Col sm={12} md={6} className="d-flex align-items-center justify-content-center pt-3">
                    <Image src={plain} alt="plain challah" id="plain"/>    
                </Col>
                <Col sm={12} md={6} className="d-flex align-items-center justify-content-center pt-3">
                    <Image src={poppyseed} alt="poppyseed challah" id="poppyseed"/>
                </Col>
            </Row>
            <Row>
                <Col sm={12} md={6} className="d-flex align-items-center justify-content-center py-3">
                    <Image src={sesame} alt="sesame challah" id="sesame"/>
                </Col>
                <Col sm={12} md={6} className="d-flex align-items-center justify-content-center py-3">
                    <Image src={zaatar} alt="za'atar challah" id="zaatar"/>    
                </Col>
            </Row>
        </div>
    )
}

export default Reserve;