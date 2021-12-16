import React from 'react';
import { Container, Navbar, NavDropdown, Nav, Image } from 'react-bootstrap';
import logo from "../pages/photos/childsplay_logo.png"
import './components.css';

function TopBar(){

    return(

  <Navbar sticky='top' expand="lg" className='navProps' >
    <Container>
      <Image src={logo} className='logo'/>
      {/*<Navbar.Brand href="/">Childsplay</Navbar.Brand>*/}
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse  className="justify-content-end" id="basic-navbar-nav">
        <Nav activeKey="/home">
          <Nav.Link href="/~hawkinma/build/">Home</Nav.Link>
          <Nav.Link href="/~hawkinma/build/playing">Playing</Nav.Link>
          <Nav.Link href="/~hawkinma/build/programming">Programming</Nav.Link>
          <Nav.Link href="/~hawkinma/build/publications">Publications</Nav.Link>
          <Nav.Link href="/~hawkinma/build/personnel">Personnel</Nav.Link>
          <NavDropdown title="Curriculum" id="basic-nav-dropdown">
            <NavDropdown.Item href="#action/3.1">Level 1</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">Level 2</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#action/3.4">Other Resources</NavDropdown.Item>
          </NavDropdown>
          <Nav.Link href="/~hawkinma/build/contact">Contact</Nav.Link>
          
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
        
    );
}

export default TopBar;
