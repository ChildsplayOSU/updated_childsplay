import React from 'react';
import { Container } from 'react-bootstrap';
import photo1 from './photos/level_1_preview.JPG'
import preview from './Unit_1_Preview.zip'

function PlayingPreview(props) {
    return (
        <div>
            <Container>
            <img src={photo1} className='topImg'></img>
            </Container>
            <Container className='section'>
            <p className='headerFonts'>Check out a lesson!</p>
            <p>This is the first lesson included in our unplugged curriculum. Here, students will get familiar with different representations of a familiar game- TicTacToe. They'll be introduced
                to this game through various story elements with a few unique twists on the rules, helping them to think about the game differently than they likely have before.
            </p>
            <p>Included in this lesson are the various graphics and slides needed to conduct in-class activities, as well as a lesson plan to help guide teachers. Worksheets are also available
                for students to use as learning aids. If you have questions about this lesson, or want to explore any of our other lessons, please contact us!
            </p>
            <br></br>
            <a href={preview}>Click here to download lesson</a>
            </Container>
            
        </div>
    );
}

export default PlayingPreview;