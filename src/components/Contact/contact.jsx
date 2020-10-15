import React from 'react';
import './Contact.css';
import emailjs from 'emailjs-com';
import {Row, Col, Button, Collapse} from 'react-bootstrap';

export default function Contact() {
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
            <Row className="d-flex justify-content-center">
                <Col sm={12}>
                    <p className="contact-header">contact me!</p>
                </Col>
                <Col xs={12}>
                    <p className="contact-info">do you want to let me know something? do you want to subscribe?</p>
                </Col>
            </Row>
            <div className="contact-buttons">
            <Row className="no-gutters">
                <Col sm={3}></Col>
                <Col sm={3}>
                   
                        <Button className="collapsed justify-self-center" type="button" data-toggle="collapse" data-target="#form-collapse-text" aria-controls="form-collapse-text" aria-expanded="false" aria-label="Toggle button" id="challah-at-me">
                            challah at me
                        </Button>
                 
                    <Collapse in={true}>
                        <form onSubmit={sendEmail} >
                            <div className="paddingpurposes">
                                <Row className="mx-auto collapse" id="form-collapse-text">
                                <div className="email-form">
                                    <Col className="form-group mx-auto" sm={12} >
                                        <input type="text" className="form-control" placeholder="name" name="name"/>
                                    </Col>
                                    <Col className="form-group mx-auto " sm={12}>
                                        <input type="email" className="form-control" placeholder="email address" name="email"/>
                                    </Col>
                                    <Col className="form-group mx-auto" sm={12}>
                                        <input type="text" className="form-control" placeholder="subject" name="subject"/>
                                    </Col>
                                    <Col className="form-group pt-2 mx-auto" sm={12}>
                                        <textarea className="form-control" cols="40" rows="6" placeholder="your message" name="message"></textarea>
                                    </Col>
                                    <Col className="form-group pt-3 mx-auto" sm={12}>
                                        <input type="submit" className="btn" value="send message" id="send-message-button"/>
                                    </Col>
                                    </div>
                                </Row>
                                </div>
                            </form>
                        </Collapse>
                        </Col>
                        <Col sm={3} className="justify-self-center">
                            <a href="https://gmail.us2.list-manage.com/subscribe?u=6a90ee103a39a8ea6e4b2d543&id=6cdfa69eb3" target="blank">
                                <Button  type="button" id="subscribe-button"> 
                                    subscribe
                                </Button>
                            </a>
                        </Col>
                        <Col sm={3}></Col>
                    </Row>
                    </div>
                </div>
    )
    
}