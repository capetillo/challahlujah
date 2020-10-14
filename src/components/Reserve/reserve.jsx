import React from 'react';
import './Reserve.css';
import plain from '../Images/plain.jpg';
import poppyseed from '../Images/poppyseed.jpg';
import sesame from '../Images/sesame.jpg';
import zaatar from '../Images/zaatar.jpg';
import {Row, Col, Button} from 'react-bootstrap';

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
            <Row> 
                <Col className="d-flex align-items-center justify-content-center p-5">
                    <a href="https://gmail.us2.list-manage.com/subscribe?u=6a90ee103a39a8ea6e4b2d543&id=6cdfa69eb3" target="blank">
                        <Button className="collapsed justify-self-center" type="button">
                            order
                        </Button>
                    </a>
                </Col>
            </Row>
        </div>
    )
}

export default Reserve;