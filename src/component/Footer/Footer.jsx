import React from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import './Footer.css'; // Add this CSS file for additional custom styling

const Footer = () => {
  return (
    <footer className="footer bg-light text-dark mt-4 pt-5 pb-3">
      <Container>
        <Row>
          {/* About Section */}
          <Col md={4} className="mb-4">
            <h5>About Our Blog</h5>
            <p>
              Stay updated with the latest insights, stories, and articles across various topics. Our blog aims to inform, inspire, and entertain.
            </p>
          </Col>

          {/* Quick Links Section */}
          <Col md={4} className="mb-4">
            <h5>Quick Links</h5>
            <ul className="list-unstyled">
              <li><a href="/" className="footer-link">Home</a></li>
              <li><a href="/about" className="footer-link">About Us</a></li>
              <li><a href="/contact" className="footer-link">Contact</a></li>
              <li><a href="/privacy" className="footer-link">Privacy Policy</a></li>
            </ul>
          </Col>

          {/* Newsletter Signup Section */}
          <Col md={4} className="mb-4">
            <h5>Subscribe to our Newsletter</h5>
            <Form className="newsletter-form">
              <Form.Group controlId="formBasicEmail" className="d-flex">
                <Form.Control type="email" placeholder="Enter email" className="me-2" />
                <Button variant="dark" type="submit">
                  Subscribe
                </Button>
              </Form.Group>
            </Form>
            <div className="social-icons mt-3">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="me-2">
                <i className="bi bi-facebook"></i>
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="me-2">
                <i className="bi bi-twitter"></i>
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                <i className="bi bi-instagram"></i>
              </a>
            </div>
          </Col>
        </Row>

        {/* Bottom Text */}
        <Row className="text-center mt-3">
          <Col>
            <p className="mb-0">&copy; 2024 Blog. All rights reserved.</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
