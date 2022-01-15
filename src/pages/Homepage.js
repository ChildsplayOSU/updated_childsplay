import React from 'react';
import { Carousel, Container, Image, Row, Col } from 'react-bootstrap';
import './pages.css';
import img1 from './photos/img1.jpg';
import img2 from './photos/img2.jpg';
import img3 from './photos/img3.jpg';
import img4 from './photos/img4.jpg';
import logo from './photos/Childsplay.png'
import SiteCard from '../components/SiteCard';
import { CardData } from './CardData'



function Homepage(){

    return(
        <div>
            {/* variant='dark' isn't working */}
            <Carousel variant="dark" className='carDims' fade='true' controls={false}>
                <Carousel.Item className='carItemDims'>
                    <img
                    className="d-block w-100"
                    src={img4}
                    alt="First slide"
                    />
                </Carousel.Item>
                <Carousel.Item className='carItemDims'>
                    <img
                    className="d-block w-100"
                    src={img3}
                    alt="Second slide"
                    />
                </Carousel.Item>
                <Carousel.Item className='carItemDims'>
                    <img
                    className="d-block w-100"
                    src={img2}
                    alt="Third slide"
                    />
                </Carousel.Item>
                <Carousel.Item className='carItemDims'>
                    <img
                    className="d-block w-100"
                    src={img1}
                    alt="Fourth slide"
                    />
                </Carousel.Item>
            </Carousel>
            <Container className='text-center'>
                {/* Replace with margin */}
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <h1 className='headerFonts' style={{fontSize: 46}}>Childsplay</h1>
                <br></br>
                <p className='bodyFonts'>A site dedicated to showcasing an approach focused on teaching 
                students introductory computer science concepts through board games and programming.</p>
                <br></br>
                <br></br>
                <h2 className='headerFonts'>The approach</h2>
                <br></br>
                <p className='bodyFonts'>Our approach teaches computer science concepts to young students through playing 
                    and analysis of board games. There are two curriculums that work together to do this. 
                    The first focuses on gaining problem-solving skills and understanding Representations, 
                    Algorithms, and Computation in a no-code environment. The second aims for building a deeper 
                    understanding about concepts mentioned previously – the concepts are applied to programming using a 
                    functional programming languages created specifically for this purpose, called BoGL. 
                    Our second level curriculum takes the concepts from the first level, and integrates key problem-solving
                    concepts into the lessons.</p>
                <br></br>
                <br></br>
                <h2 className='headerFonts'>About</h2>
                <br></br>
                <p className='bodyFonts'>Childsplay contains supplemental information related to the development 
                of curriculum and tools for BoGL, or Board Game Language. Work for this project has been funded by an NSF grant obtained 
                by the <a href='#'>School of Electrical Engineering and Computer Science</a> at <a href='#'>Oregon State University</a>.</p>

                <br></br>
                <br></br>
                <h2 className='headerFonts'>Contact Us</h2>
                <br></br>
                <p className='bodyFonts' id='contact'>If you have any questions about our approach, curricula, or how to use our materials in your classroom, please
                reach out to Dr. Parham-Mocello at <a href='mailto:parhammj@oregonstate.edu'> parhammj@oregonstate.edu</a>.</p>
            </Container>
            {/* <Container>
                <Row>
                    {CardData.map((val) =>{
                        return(
                            <Col>
                                <SiteCard
                                    cname ={val.cname}
                                    btn = {val.btn}
                                    icon = {val.icon}
                                    title = {val.title}
                                    link = {val.link}
                                    description = {val.description}    
                                />
                            </Col>
                            
                        )
                    }
                    )}
                </Row>
            </Container> */}
        </div>
    );
}

export default Homepage;

