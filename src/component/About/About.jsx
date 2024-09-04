// About.jsx
import React from 'react';
import { Container, Row, Col, Image, Card, Button } from 'react-bootstrap';
import './About.css'; // Make sure to style it well using CSS or SCSS
import img1 from '../../assets/img1.jpg';
import img2 from '../../assets/img2.jpg';
import img4 from '../../assets/img4.jpg';
import Footer from '../Footer/Footer';

const About = () => {

  return (
    <>
    <Container className="about-page my-5">
      {/* Hero Section */}
      <Row className="align-items-center mb-5">
        <Col md={6}>
          <h1 className="about-title">About Us</h1>
          <p className="lead">
            Welcome to our blog! We are passionate about sharing valuable insights, stories, and the latest updates across a variety of topics.
          </p>
          <Button variant="dark" className="learn-more-btn">
            Learn More
          </Button>
        </Col>
        <Col md={6}>
          <Image
            src={img1} // Replace with an appropriate image URL or import your image
            fluid
            className="rounded"
          />
        </Col>
      </Row>

      {/* Mission Section */}
      <Row className="mb-5">
        <Col>
          <h2 className="section-title">Our Mission</h2>
          <p>
            Our mission is to provide readers with engaging, informative, and inspiring content. We aim to create a community where individuals can find thought-provoking articles, helpful tips, and explore topics they are passionate about.
          </p>
        </Col>
      </Row>

      {/* Story Section */}
      <Row className="mb-5">
        <Col md={6}>
          <Image
            src={img2} // Replace with your story image
            fluid
            className="rounded"
          />
        </Col>
        <Col md={6}>
          <h2 className="section-title">Our Story</h2>
          <p>
            It all started with a simple idea: to create a space where readers can dive deep into the subjects they love. Whether it’s technology, health, travel, or food, our blog covers a wide range of topics to satisfy every curiosity. We started as a small team of enthusiasts, and over the years, our passion for writing and sharing knowledge has only grown stronger.
          </p>
        </Col>
      </Row>

      {/* Meet the Team Section */}
      <Row className="mb-5 text-center">
        <Col>
          <h2 className="section-title">Meet the Team</h2>
        </Col>
      </Row>
      <Row>
        <Col md={4}>
          <Card className="team-card mb-3">
            <Card.Img variant="top" src={img4} /> {/* Replace with team member images */}
            <Card.Body>
              <Card.Title>Jane Doe</Card.Title>
              <Card.Text>Editor-in-Chief</Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4}>
          <Card className="team-card mb-3">
            <Card.Img variant="top" src={img4} />
            <Card.Body>
              <Card.Title>John Smith</Card.Title>
              <Card.Text>Content Creator</Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4}>
          <Card className="team-card mb-3">
            <Card.Img variant="top" src={img4}/>
            <Card.Body>
              <Card.Title>Emily Johnson</Card.Title>
              <Card.Text>Social Media Manager</Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
    <Footer/>
    </>
  );
};

export default About;
