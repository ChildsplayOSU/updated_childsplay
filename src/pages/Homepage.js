import React from 'react';
import { Carousel, Container, Image, Row, Col } from 'react-bootstrap';
import './pages.css';
import img1 from './photos/img1.jpg';
import img2 from './photos/img2.jpg';
import img3 from './photos/img3.jpg';
import img4 from './photos/img4.jpg';
import logo from './photos/Childsplay.png'
import SiteCard from '../components/SiteCard';



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
                <p className='bodyFonts'>A site dedicated to showcasing a curriculum focused on teaching 
                students introductory computer science concepts through board games and programming.</p>
                <br></br>
                <br></br>
                <h2 className='headerFonts'>The approach</h2>
                <br></br>
                <p className='bodyFonts'>Our curriculum teaches computer science concepts to young students through playing 
                    and analysis of board games. There are two curriculums that work together to do this. 
                    The first focuses on gaining problem-solving skills and understanding Representations, 
                    Algorithms, and Computation (Not Programming). The second aims for building a deeper 
                    understanding about concepts mentioned previously – the concepts are applied to programming. 
                    Additionally, the second curriculum is meant to provide problem-solving skills.</p>
                <br></br>
                <br></br>
                <h2 className='headerFonts'>About</h2>
                <br></br>
                <p className='bodyFonts'>Childsplay contains supplemental information related to the development 
                of curriculum and tools for BoGL. Work for this project has been funded by an NSF grant obtained 
                by the <a href='#'>School of Electrical Engineering and Computer Science</a> at <a href='#'>Oregon State University</a>.</p>
            </Container>
            <Container>
                <Row>
                    <Col><SiteCard card='box' cname='c1' btn='b1'/></Col>
                    <Col>
                        <SiteCard card='box' cname='c2' btn='b2'></SiteCard>
                    </Col>
                    <Col>
                        <SiteCard card='box' cname='c3' btn='b3'></SiteCard>
                    </Col>
                    <Col>
                        <SiteCard card='box' cname='c4' btn='b4'></SiteCard>
                    </Col>
                    <Col>
                        <SiteCard card='box' cname='c5' btn='b4'></SiteCard>
                    </Col>
                    <Col>
                        <SiteCard card='box' cname='c6' btn='b4'></SiteCard>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default Homepage;

