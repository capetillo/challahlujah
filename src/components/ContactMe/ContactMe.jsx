import React from 'react';
import './ContactMe.css';
import emailjs from 'emailjs-com';
import {Row, Col, Button, Collapse} from 'react-bootstrap';
import ScrollAnimation from 'react-animate-on-scroll';

export default function ContactMe() {
    function sendEmail(e) {
    e.preventDefault();
    
    emailjs.sendForm('gmail', process.env.REACT_APP_TEMPLATE_ID, e.target, process.env.REACT_APP_USER_ID)
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset()
}

    return (
        <div className="contact">
            <div id="test">
            <ScrollAnimation animateOnce={true} duration={2} animateIn="fadeIn" animatePreScroll={false}>
                <Row className="d-flex justify-content-center py-4">
                    <Col sm={12}>
                        <p className="contact-header">contact me!</p>
                    </Col>
                    <Col xs={12}>
                        <p className="contact-info">would love to hear from you</p>
                    </Col>
                </Row>
                <div className="contact-buttons">
                    <Row className="no-gutters">
                        <Col sm={3}></Col>
                        <Col sm={3} className="pb-3">
                            
                                <Button className="collapsed justify-self-center" type="button" data-toggle="collapse" data-target="#form-collapse-text" aria-controls="form-collapse-text" aria-expanded="false" aria-label="Toggle button" id="button">
                                    challah at me
                                </Button>
                            <Collapse in={true}>
                                <form onSubmit={sendEmail} >
                                    <div className="paddingpurposes">
                                        <Row className="mx-auto collapse" id="form-collapse-text">
                                        <div className="email-form">
                                            <Col className="form-group mx-auto" sm={12} >
                                                <input type="text" className="form-control" placeholder="name" name="name" id="textarea"/>
                                            </Col>
                                            <Col className="form-group mx-auto " sm={12}>
                                                <input type="email" className="form-control" placeholder="email address" name="email" id="textarea"/>
                                            </Col>
                                            <Col className="form-group mx-auto" sm={12}>
                                                <input type="text" className="form-control" placeholder="subject" name="subject"id="textarea"/>
                                            </Col>
                                            <Col className="form-group pt-2 mx-auto" sm={12}>
                                                <textarea className="form-control" cols="40" rows="6" placeholder="your message" name="message" id="textarea"></textarea>
                                            </Col>
                                            <Col className="form-group pt-3 mx-auto" sm={12}>
                                                <input type="submit" className="btn" value="send message" id="button"/>
                                            </Col>
                                            </div>
                                        </Row>
                                        </div>
                                    </form>
                                </Collapse>
                                </Col>
                                <Col sm={3} className="justify-self-center pb-5">
                                    <a href="https://gmail.us2.list-manage.com/subscribe?u=6a90ee103a39a8ea6e4b2d543&id=6cdfa69eb3" target="blank">
                                        <Button  type="button" id="button"> 
                                            subscribe
                                        </Button>
                                    </a>
                                </Col>
                                <Col sm={3}></Col>
                            </Row>
                        </div>
                    </ScrollAnimation>
                    </div>
                </div>
    )
    
}