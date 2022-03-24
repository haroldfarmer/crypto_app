import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.css";
import { Navbar, Nav, Container } from "react-bootstrap";
import './NavBar.css';


export default class NavBar extends Component {
  render() {
    return (
      <Navbar className="color-nav" expand="lg" >
        <Container>
          <Navbar.Brand className="nav-font" href="#home"><h4 className="navbar-font">TCC</h4></Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link  href="#home"><h6 className="navbar-font">Home</h6></Nav.Link>
              <Nav.Link href="#link"><h6 className="navbar-font">Profile</h6></Nav.Link>
              <Nav.Link  href="#link"><h6 className="navbar-font">Market</h6></Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    );
  }
}
