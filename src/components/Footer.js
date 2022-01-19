import React from 'react';
import { Row } from 'react-bootstrap';
import logo from '../pages/photos/OSU_vertical_1C_B.png';

function Footer(){

    return(
        <div>
            <div className='footerContainer'>
                <img src={logo} className='footerLogo'></img>
                <Row><a href="/#/contact">Questions? Contact Us</a></Row>
                <Row><p className='footerText'>© Childsplay Research Group 2022  |  Designed & Built at the School of EECS at Oregon State University</p>
                    <br></br>
                    <p>• • •</p>
                </Row>
            </div>
        </div>
    );

}

export default Footer;
