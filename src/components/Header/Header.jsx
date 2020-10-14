import React from 'react';
import './Header.css';
import {Row, Col} from 'react-bootstrap';

const Header = (props) => {
    return (
        <div className="header">
            <Row className="mt-5">
                <Col className="mt-5">
                    <p className="challah-by-ari">challah by ari</p>
                </Col>
            </Row>
        </div>
    )
}

export default Header;