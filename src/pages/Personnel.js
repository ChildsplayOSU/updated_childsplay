import React from "react";
import { Container, Image } from 'react-bootstrap';
import './pages.css';
import photo1 from './photos/personnel1.jpg';
import photo2 from './photos/jennifer.jpg'
import photo3 from './photos/martin.jpg'
import photo4 from './photos/maggie.jpg'
import photo5 from './photos/aiden.jpg'
import photo6 from './photos/alex.jpg'
import photo7 from './photos/erick.jpg'
import photo8 from './photos/javier.jpg'
import photo9 from './photos/ben.jpg'

function Personnel(){
    return(
        <div>
            <Container>
                {/* Not a huge fan of this picture, maybe find replacement? */}
                <img src={photo1} className='topImg'></img>
            </Container>
            <Container className='section'>
                <h1 className='headerFonts' style={{fontSize: 46}}> Personnel </h1>
                <p>Meet our team of researchers and students!</p>
            </Container>
            <Container className='section'>
                <Image src={photo2} roundedCircle className='headshots' />
                <h2 className='headerFonts'>Jennifer Parham-Mocello</h2>
                <p>Jennifer Parham-Mocello fell in love with computer science while pursuing an undergraduate degree in secondary math education. Since then, her focus turned to computer science education. Immediately after obtaining her bachelor’s in computer science, 
                    she became an adjunct instructor at a community college. She subsequently pursued a master’s in computer science, which sparked her interest in how people learn computer science, the best ways to teach computer science, and the higher-order/logical 
                    thinking skills needed for computer science. She returned to school for a doctorate focusing on how people solve problems in computer science. Her mission is to improve computer science education through exploratory research and empirical evidence, 
                    best teaching practices, and community efforts supporting computational literacy for all.
                </p>
                <a href='https://eecs.oregonstate.edu/people/Parham-Mocello-Jennifer'>More about Dr. Parham-Mocello</a>
            </Container>
            <Container className='section'>
                <Image src={photo3} roundedCircle className='headshots' />
                <h2 className='headerFonts'>Martin Erwig</h2>
                <p>Martin Erwig is a professor of computer science in the School of Electrical Engineering and Computer Science at Oregon State University. He obtained his Diploma degree in computer science (M.S.) in 1989 from the University of Dortmund, Germany, and his Ph.D. 
                    degree in computer science in 1994 from the University of Hagen, Germany. He also obtained the Habilitation in computer science in 1999 from the University of Hagen, Germany. <br></br><br></br> From 1994 to 2000 Erwig was a research assistant at the University of Hagen, and 
                    from 2000 to 2010 he was an associate professor at OSU. His research interests are in language design and domain-specific languages, functional programming, and visual languages. Erwig is the author or co-author of two books and over 100 peer-reviewed 
                    publications, for which he received several best paper awards.
                </p>
                <a href='https://eecs.oregonstate.edu/people/erwig-martin'>More about Dr. Erwig</a>
            </Container>
            <Container className='section'>
                <Image src={photo4} roundedCircle className='headshots' />
                <h2 className='headerFonts'>Margaret Neiss</h2>
                <p>Margaret (Maggie) L. Niess is Professor Emeritus of Mathematics Education at Oregon State University. Her research focuses on the knowledge teachers rely on for teaching -Technological Pedagogical Content Knowledge, often referred to as TPACK. She has authored multiple 
                    peer-reviewed journals and chapters including teacher preparation books. Her most recent book is Blended Online Learning and Instructional Design for TPACK: Emerging Research and Opportunities (2019). She has been editor of multiple Handbooks of Research for IGI Global, 
                    the most recent being Handbook of Research on Transforming Teachers’ Online Pedagogical Reasoning for Engaging K-12 Students in Virtual Learning (2021). Her research has identified an online learning trajectory for framing student-centered instructional strategies using 
                    a social metacognitive constructivist context. In 2014 she awarded the George G. Mallison Distinguished Service Award for the School Science and Mathematics Association. In 2015 her article in the Journal of Digital Learning in Teacher Education was awarded article of 
                    the year. She has chaired multiple committees for the Association of Mathematics Teacher Educators (AMTE) and has served as chair for the American Educational Research Association’s (AERA) SIG-TACTL (Technology as a Change Agent in Teaching and Learning).
                </p>
                <a href='https://education.oregonstate.edu/people/margaret-niess'>More about Dr. Neiss</a>
            </Container>
            <Container className='section'>
                <Image src={photo5} roundedCircle className='headshots' />
                <h2 className='headerFonts'>Aiden Nelson</h2>
                <p>Aiden Nelson obtained his undergraduate degree in computer science at Oregon State University. There he worked as a teaching assistant, during which he became interested in the teaching component of the field. This lead him to pursue a masters degree in computer science 
                    education at Oregon State University. Aiden’s contributions to the Childsplay Research Project include developing curriculum material and producing BoGL language tutorials.
                </p>
                <a href='https://www.linkedin.com/in/aiden-nelson/'>More about Aiden</a>
            </Container>
            <Container className='section'>
                <Image src={photo6} roundedCircle className='headshots' />
                <h2 className='headerFonts'>Alex Grejuc</h2>
                <p>Alex Grejuc is an undergraduate student studying computer science with a minor in English at Oregon State University, though he will be graduating in June 2021. He has been involved in the design and implementation of BoGL since the very beginning in fall 2019 when it was 
                    a computer science capstone project. He is currently writing an honors thesis in which he is formalizing BoGL’s while loops as well as its type system.
                </p>
            </Container>
            <Container className='section'>
                <Image src={photo7} roundedCircle className='headshots' />
                <h2 className='headerFonts'>Erick O’Brian Branner</h2>
                <p>Erick Branner is an undergraduate computer science student at Oregon State University. He has worked as a teaching assistant for introductory computer science courses and has various research dedications. Erick is developing a deafness simulator, created tests for BoGL 
                    curriculum, and has contributed to the construction of the Childsplay website.
                </p>
                <a href='https://www.linkedin.com/in/erick-branner-470755161/'>More about Erick</a>
            </Container>
            <Container className='section'>
                <Image src={photo8} roundedCircle className='headshots' />
                <h2 className='headerFonts'>Javier Garcia Ramirez</h2>
                <p>Javier Garcia is an undergraduate student at Oregon State University majoring in computer science. After taking his first university computer science course, Javier was fascinated the strategies used to teach computer science concepts, which eventually led him to work on the 
                    Childsplay Research Project. Javier’s focus was on developing curriculum work.
                </p>
                <a href='https://www.linkedin.com/in/javier-garcia-x/'>More about Javier</a>
            </Container>
            <Container className='section'>
                <Image src={photo9} roundedCircle className='headshots' />
                <h2 className='headerFonts'>Benjamin Wilson Friedman</h2>
                <p>Benjamin Wilson Friedman is a graduate student at Oregon State University studying for an M.S in computer science, with a focus on developing ways to improve CS education through formal analysis of programs. He also did his undergrad at OSU in CS, where he worked as a learning assistant 
                    to help instruct students in introductory CS courses. During his time at OSU, he was part of the team that designed and implemented BoGL, and continues to work on it today. Ben was responsible for building this website, and the tools behind it, along with Erick.
                </p>
                <a href='https://www.uphouseworks.com/'>More about Ben</a>
            </Container>
            
        </div>
    );
}

export default Personnel