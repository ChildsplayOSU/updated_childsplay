import React from 'react';
import { Container, Navbar, NavDropdown, Nav } from 'react-bootstrap';
import './components.css';

function TopBar(){

    return(

  <Navbar sticky='top' bg="light" expand="lg" className='navProps' >
    <Container>
      <Navbar.Brand href="#home">Childsplay</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse  className="justify-content-end" id="basic-navbar-nav">
        <Nav activeKey="/home">
          <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href="#link">Link</Nav.Link>
          <NavDropdown title="Dropdown" id="basic-nav-dropdown">
            <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
          </NavDropdown>
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
        
    );
}

export default TopBar;