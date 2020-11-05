import React from 'react';
import './ChallahHacks.css';
import {Row, Col, Image} from 'react-bootstrap';
import ScrollAnimation from 'react-animate-on-scroll';
import challahtopview from '../Images/challah-top-view.jpg';

const ChallahHacks = (props) => {
    return(
        <div className="challah-hacks" id="challahhacks">
             <ScrollAnimation animateOnce={true} duration={2} animateIn="fadeIn" animatePreScroll={false}>
                <Row className="d-flex justify-content-center pt-4 pb-2">
                    <Col className="d-flex justify-content-center">
                        <p className="hacks-title">#challahacks</p>
                    </Col>
                </Row>
                <div className="hacks">
                <Row className="d-flex justify-content-center align-items-center px-4 pb-5">
                    <Col md={1}></Col>
                    <Col md={5}>
                    <Col xs={12} className="px-5">
                            <h3 className="subheader">almost like you made it at home</h3>
                        </Col>
                        <Col xs={12} className="px-5 pb-md-5">
                            <p className="hack-context">to freshen up the loaf before eating, wrap it in foil and place it in a hot oven (200-300 degrees) for about 15 minutes or until warmed through.</p>
                        </Col>
                        <Col xs={12} className="px-5">
                            <h3 className="subheader">the freezer is your friend</h3>
                        </Col>
                        <Col xs={12} className="px-5 pb-md-5">
                            <p className="hack-context">challah freezes really well! you can place an entire loaf in the freezer or slice it before so you can toast off individual pieces whenever you have a craving. always put it in sealed plastic before freezing. to defrost the entire loaf I like to wrap mine in aluminum foil and place in a low heat oven until warm all the way through.</p>
                        </Col>
                        <Col xs={12} className="px-5">
                            <h3 className="subheader">best french toast of your life</h3>
                        </Col>
                        <Col xs={12} className="px-5 pb-md-5">
                            <p className="hack-context">did not come up with this one but do think it's the greatest thing ever. challah works especially well for french toast when it's not at its most fresh.</p>
                        </Col>
                        <Col xs={12} className="px-5">
                            <h3 className="subheader">challah in your salad: the crouton disguise</h3>
                        </Col>
                        <Col xs={12} className="px-5 pb-md-5">
                            <p className="hack-context">leftover challah chopped into small cubes and covered in olive oil, salt, and pepper will be the greatest addition to your next salad. bake around 350 until toasted and crunchy. you're welcome.</p>
                        </Col>
                    </Col>
                    <Col md={5}>
                        <Image src={challahtopview} alt="challah (aerial view)" id="challahtopview" />
                    </Col>
                    <Col md={1}></Col>
                </Row>
                </div>
             </ScrollAnimation>
        </div>
    )

}

export default ChallahHacks;