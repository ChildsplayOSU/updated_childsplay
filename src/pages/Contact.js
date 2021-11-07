import React from "react";
import './pages.css';
import { Container } from "react-bootstrap";
import photo1 from './photos/playing2.jpg'

function Contact(){
    return(
        <div>
            <Container>
                {/* Not a huge fan of this picture, maybe find replacement? */}
                <img src={photo1} className='topImg'></img>
            </Container>
            <Container className='section'>
                <h1 className='headerFonts' style={{fontSize: 46}}> Contact </h1>
                <p>We’re happy to provide our educational material to you upon request.<br></br><br></br>
                Please reach out to us at <a href='mailto: parhammj@oregonstate.edu'>parhammj@oregonstate.edu</a> with your name and a description of what you would like to use our curriculum for. We’re also happy to answer any questions you may have as well.</p>
            </Container>
        </div>
    );
}

export default Contact;