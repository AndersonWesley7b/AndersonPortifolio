import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import '../styles/Navbar.css';

function CustomNavbar() {
  return (
    <Navbar expand="lg" className="navbar" variant="dark">
      <Navbar.Brand as={Link} to="/" className="logo">Anderson Wesley Terra Filho</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto">
          <Nav.Link as={Link} to="/">Home</Nav.Link>
          <Nav.Link as={Link} to="/sobre">Sobre</Nav.Link>
          <Nav.Link as={Link} to="/projetos">Projetos</Nav.Link>
          <Nav.Link as={Link} to="/habilidades">Habilidades</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default CustomNavbar;
