import React from "react";
import {Link} from 'react-router-dom'
import { Form, Col, Row, Container, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./style.css";

function DoctorSignIn() {
  return (
   <Container className="container">
       <Form className="form-container">
        <h2>SignIn</h2>
        <Form.Group controlId="formGroupEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" />
        </Form.Group>
        <Form.Group controlId="formGroupPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" />
        </Form.Group>
        
        <Button className="signup-btn" type="submit" variant="outline-primary">Signin</Button>

        <Link to="/doctorssignup"><p>Don't have an account? Signup</p></Link>
      </Form>
   </Container>
      
  );
}

export default DoctorSignIn;
