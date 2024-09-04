import React from 'react';
import { Navbar, Nav, Container, NavDropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';
const BlogNavbar = () => {
  return (
    <Navbar bg="dark" variant="dark" expand="lg" className="mb-3 Nav">
      <Container>
        <Navbar.Brand href="/">Blogs</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link as={Link} to="/">Home</Nav.Link>
            <Nav.Link as={Link} to="/about">About</Nav.Link>
            <Nav.Link as={Link}  to="/blog">Blog</Nav.Link>
            <Nav.Link as={Link} to="/contact">Contact</Nav.Link>
            <NavDropdown title="More" id="basic-nav-dropdown">
              <NavDropdown.Item href="/services">Login</NavDropdown.Item>
              <NavDropdown.Item href="/careers">Regester</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="/privacy-policy">Login As Admin</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default BlogNavbar;
