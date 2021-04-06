import React from "react";
// import { useContext } from "react";
import { Nav, Navbar, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
// import { UserContext } from "../../App";
import logo from '../../logos/Group 1329.png'

const Header = () => {
  // const [loggedInUser, setLoggedInUser] =useContext(UserContext);
  return (
    
    <Navbar bg="transparent" expand="lg">
      <Container>
        <Navbar.Brand as={Link} to="/home"><img style={{width: '200px' }} src={logo} alt="logo image"/></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            <Nav.Link as={Link} to="/">Home</Nav.Link>

            <Nav.Link as={Link} to="/dashboard">Dashboard</Nav.Link>
            <Nav.Link as={Link} to="/events">Events</Nav.Link>
            <Nav.Link as={Link} to="/login">Register</Nav.Link>
            <Nav.Link as={Link} to="/admin">Admin</Nav.Link>
          </Nav>

        </Navbar.Collapse>

      </Container>
    </Navbar>
  );
};

export default Header;
