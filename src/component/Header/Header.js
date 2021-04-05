import React from "react";
import { Nav, Navbar, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import logo from '../../logos/Group 1329.png'

const Header = () => {

  return (


    <Navbar bg="transparent" expand="lg">
      <Container>

      <Navbar.Brand as={Link} to="/home"><img style={{width: '200px' }} src={logo} alt="logo image"/></Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto">
          <Nav.Link as={Link} to="/">Home</Nav.Link>
          <Nav.Link as={Link} to="/admin">Admin</Nav.Link>
          <Nav.Link as={Link} to="/dashboard">Dashboard</Nav.Link>
          <Nav.Link as={Link} to="/login">Login</Nav.Link>
          
        </Nav>

      </Navbar.Collapse>

      </Container>
    </Navbar>
    

  );
};

export default Header;
