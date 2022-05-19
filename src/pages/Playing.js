import React from "react";
import { Container } from 'react-bootstrap';
import { Link } from "react-router-dom";
import photo1 from './photos/playing1.jpg';
import photo2 from './photos/playing2.jpg';

function Playing(){

    return(
        <div>
            <Container>
            <img src={photo1} className='topImg'></img>
            </Container>
            <Container className='section'>
                <h1 className='headerFonts' style={{fontSize: 46}}> Playing </h1>
                <p>Focused on problem solving-skills and understanding Representations, Algorithms, and Computation.</p>
                <h2 className='headerFonts'>About</h2>
                <p>The Unplugged curriculum aims to teach concepts of computer science without a programming language. The main concepts taught are: representation, abstraction, algorithms, input, output, instructions, conditions, types, names, values, computation, computer, resources, and bindings.</p>
                <h2 className='headerFonts'>An Unplugged Example</h2>
                <p>One of the topics we cover in our unplugged curriculum is the game of Tic Tac Toe. This makes a great example to get students thinking about computer science, but in a way that’s familiar and fun for them. We start by talking about a very abstract idea of what Tic Tac Toe is. This helps to challenge what students already know about the game, and connect it the important CS concepts we want to teach. You can see our initial presentation of tic tac toe below.</p>
                
            </Container>
            <Container style={{textAlign: "center"}}>
                <img src={photo2} className='tictactoeImg'></img>
            </Container>
            <Container>
                <h2 className='headerFonts'>Unit 1 Preview</h2>
                <p><Link to='/playing/preview'>Click here</Link> to see an example piece of our CS unplugged curriculum</p>
                <h2 className='headerFonts'>Interested?</h2>
                <p>You can contact us to find out how you can use our curriculum in your classroom.</p>
            </Container>

        </div>
    );
}

export default Playing