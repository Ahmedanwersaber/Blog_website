import React from 'react';
import { Container, Row, Col, Card, Button, Form } from 'react-bootstrap';
import './Home.css'; // Add custom CSS if needed for further styling
import img1 from '../../assets/img1.jpg';
import img2 from '../../assets/img2.jpg';
import img3 from '../../assets/img3.jpg';
import img4 from '../../assets/img4.jpg';
import Footer from '../Footer/Footer';

const Home = () => {
  return (
    <>
    <Container className="mt-4">
      {/* Hero Section */}
      <Row className="mb-4">
        <Col>
          <div className="hero-section text-center p-5 text-white">
            <h1>Welcome to My Blog</h1>
            <p>Discover amazing articles and insights on various topics.</p>
            <Button variant="primary">Explore Now</Button>
          </div>
        </Col>
      </Row>

      {/* Featured Posts */}
      <Row className="mb-4">
        <Col>
          <h2>Featured Posts</h2>
        </Col>
      </Row>
      <Row>
        <Col md={4}>
          <Card className="mb-4">
            <Card.Img variant="top" src={img1} alt="Post Image" />
            <Card.Body>
              <Card.Title>Post Title 1</Card.Title>
              <Card.Text>
                This is a short description of the blog post to grab 
              </Card.Text>
              <Button variant="primary" href="/post/1">Read More</Button>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4}>
          <Card className="mb-4">
            <Card.Img variant="top" src={img2} alt="Post Image" />
            <Card.Body>
              <Card.Title>Post Title 2</Card.Title>
              <Card.Text>
                A brief summary of another captivating blog post.
              </Card.Text>
              <Button variant="primary" href="/post/2">Read More</Button>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4}>
          <Card className="mb-4">
            <Card.Img variant="top" src={img3} alt="Post Image" />
            <Card.Body>
              <Card.Title>Post Title 3</Card.Title>
              <Card.Text>
                A quick overview of an exciting article waiting for you.
              </Card.Text>
              <Button variant="primary" href="/post/3">Read More</Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      {/* Categories Section */}
    {/* Categories Section */}
<Row className="mb-4">
  <Col>
    <h2>Categories</h2>
  </Col>
</Row>
<Row>
  <Col md={3}>
    <Card className="mb-3 category-card">
      <Card.Body className='Technology'>
        <Card.Title>Technology</Card.Title>
        <Button variant="outline-dark" className="category-btn">
          Explore
        </Button>
      </Card.Body>
    </Card>
  </Col>
  <Col md={3}>
    <Card className="mb-3 category-card">
      <Card.Body className='health '>
        <Card.Title>Health</Card.Title>
        <Button variant="outline-dark" className="category-btn">
          Explore
        </Button>
      </Card.Body>
    </Card>
  </Col>
  <Col md={3}>
    <Card className="mb-3 category-card">
      <Card.Body className='travel'>
        <Card.Title>Travel</Card.Title>
        <Button variant="outline-dark" className="category-btn">
          Explore
        </Button>
      </Card.Body>
    </Card>
  </Col>
  <Col md={3}>
    <Card className="mb-3 category-card">
      <Card.Body className='food'>
        <Card.Title>Food</Card.Title>
        <Button variant="outline-dark" className="category-btn">
          Explore
        </Button>
      </Card.Body>
    </Card>
  </Col>
</Row>

      </Container> 
       <Footer/> {/* footer component  */}
    </>
  );
};

export default Home;
