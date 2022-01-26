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
                <p>We’re happy to provide our educational material to you upon request. Please fill out the following form to receive curriculum:<br></br><br></br>
                 <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSeqMPt3_FRNojkGPW1kLEyp45BdtbUSy4ndYm-e8Dr7czxQ4w/viewform?embedded=true" width="640" height="760" frameborder="0" marginheight="0" marginwidth="0">Loading…</iframe>
                
                <br></br><br></br>Please reach out to us at <a href='mailto: parhammj@oregonstate.edu'>parhammj@oregonstate.edu</a> with any additional questions you may have as well.</p>
            </Container>
        </div>
    );
}

export default Contact;