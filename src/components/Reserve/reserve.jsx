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
                    </Col>
                    <Col sm={12} md={6} className="d-flex align-items-center justify-content-center pt-3">
                        <div className="poppyseed">
                            <img src={poppyseed} alt="poppyseed challah" id="poppyseed"/>
                        </div> 
                    </Col>
             
            </Row>
            <Row>
                <Col sm={12} md={6} className="d-flex align-items-center justify-content-center py-3">
                    <div className="sesame">
                        <img src={sesame} alt="sesame challah" id="sesame"/>
                    </div> 
                </Col>
                <Col sm={12} md={6} className="d-flex align-items-center justify-content-center py-3">
                    <div className="zaatar">
                        <img src={zaatar} alt="za'atar challah" id="zaatar"/>   
                    </div>
                </Col>
            </Row>
        </div>
    )
}

export default Reserve;