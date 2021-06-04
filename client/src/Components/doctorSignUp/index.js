import React from "react";
import { Form, Col, Row, Container, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import './style.css'


function DoctorSignUp() {
  return (
   <Container className="container">
       <Form className="doctor-signup-container">
        <h2>Signup</h2>
        <Row>
          <Col>
            <Form.Control placeholder="First name" />
          </Col>
          <Col>
            <Form.Control placeholder="Last name" />
          </Col>
        </Row>
        <Form.Group controlId="formGroupEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" />
        </Form.Group>
        <Form.Group controlId="formGroupPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" />
        </Form.Group>
        <Form.Group controlId="formGroupPassword">
          <Form.Label>Specialization</Form.Label>
          <Form.Control type="text" placeholder="Password" />
        </Form.Group>
        <Button className="signup-btn" type="submit" variant="outline-primary">Signup</Button>
      </Form>
   </Container>
      
  );
}

export default DoctorSignUp;
