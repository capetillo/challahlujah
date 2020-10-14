import React, {Component} from 'react';
import './Navigation.css';
import { Link, animateScroll as scroll } from "react-scroll";
import {Nav,  Button} from 'react-bootstrap';



class Navigation extends Component {
    constructor (props) {
        super(props);
        if (typeof window !== 'undefined') {
            let prevScrollPos = window.pageYOffset;
            window.onscroll = function() {
                const maxScroll = document.body.clientHeight - window.innerHeight; //actual height - what's visible
                let currentScrollPos = window.pageYOffset; 
                if (
                    //for safari UX
                    //w3 schools helped a lot ! (i don't know why w3 gets so much hate)
                    (maxScroll > 0 && prevScrollPos > currentScrollPos && prevScrollPos <= maxScroll) ||
                    (maxScroll <= 0 && prevScrollPos > currentScrollPos) ||
                    (prevScrollPos <= 0 && currentScrollPos <= 0)
                ) {
                    document.getElementById("navbar").style.top = "0";
                } else {
                    // how many rems is the navbar hidden 
                    document.getElementById("navbar").style.top = "-5.0rem";
                }
                prevScrollPos = currentScrollPos
            }
        }
    }
        render () {
            return (
        <div className="links" id="navbar">
            <Nav className="navbar navbar-expand-md navbar-dark shadow">
            <div className="menu-links">
            <Button id ="boton" className="navbar-toggler collapsed" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span id="line1" className="line"></span> 
                <span id="line2" className="line"></span> 
                <span id="line3" className="line"></span>
            </Button>
            </div>
            <div className="navbar-collapse collapse" id="navbarNav">
                
                    <Link
                            className="nav-link"
                            activeClass="active"
                            to="about"
                            spy={true}
                            smooth={true}
                            offset={-70}
                            duration={700}
                        > 
                        about
                    </Link>

                    <Link
                            className="nav-link"
                            activeClass="active"
                            to="reserve"
                            spy={true}
                            smooth={true}
                            offset={-70}
                            duration={700}
                        > 
                       
                        reserve
                        
                    </Link>
            
                
                    <Link
                            className="nav-link"
                            activeClass="active"
                            to="contact"
                            spy={true}
                            smooth={true}
                            offset={-70}
                            duration={700}
                        > 
                        
                        contact 
                       
                    </Link>
                    <Link
                            className="nav-link"
                            activeClass="active"
                            to="subscribe"
                            spy={true}
                            smooth={true}
                            offset={-70}
                            duration={700}
                        > 
                        
                        subscribe
                       
                    </Link>
            </div>
         </Nav> 
        </div>
            )
        }
    }


 
 
 
    

export default Navigation;