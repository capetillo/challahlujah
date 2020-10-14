import React from 'react';
import './Reserve.css';
import plain from '../Images/plain.jpg';
import plain2 from '../Images/plain2.jpg';
import poppyseed from '../Images/poppyseed.jpg';
import poppyseed2 from '../Images/poppyseed2.jpg';
import sesame from '../Images/sesame.jpg';
import sesame2 from '../Images/sesame2.jpg';
import zaatar from '../Images/zaatar.jpg';
import zaatar2 from '../Images/zaatar2.jpg'
import {Row, Col} from 'react-bootstrap';

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
                    <div className="plain">
                    <img src={plain} alt="plain challah" id="plain"/> 
                    </div>
                    <div className="plain2">
                    <img src={plain2} alt="plain challah" id="plain2"/> 
                    </div>  
                </Col>
                <Col sm={12} md={6} className="d-flex align-items-center justify-content-center pt-3">
                    <img src={poppyseed} alt="poppyseed challah" id="poppyseed"/>
                    <img src={poppyseed2} alt="poppyseed challah" id="poppyseed2"/>
                </Col>
            </Row>
            <Row>
                <Col sm={12} md={6} className="d-flex align-items-center justify-content-center py-3">
                    <img src={sesame} alt="sesame challah" id="sesame"/>
                    <img src={sesame2} alt="sesame challah" id="sesame2"/>
                </Col>
                <Col sm={12} md={6} className="d-flex align-items-center justify-content-center py-3">
                    <img src={zaatar} alt="za'atar challah" id="zaatar"/>  
                    <img src={zaatar2} alt="za'atar challah" id="zaatar2"/>  
                </Col>
            </Row>
        </div>
    )
}

export default Reserve;