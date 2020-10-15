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
            <div className="get-in-touch">
                <Button className="collapsed justify-self-center" type="button" data-toggle="collapse" data-target="#form-collapse-text" aria-controls="form-collapse-text" aria-expanded="false" aria-label="Toggle button">
                    challah at me
                </Button>
            </div>
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
                  
                </div>
    )
    
}