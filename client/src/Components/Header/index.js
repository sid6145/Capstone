import React from 'react'
import {Navbar, Nav} from 'react-bootstrap'
import {Link} from 'react-router-dom'
import './style.css'
import "bootstrap/dist/css/bootstrap.min.css";

function Header (){
  return(
    <Navbar className="navbar" bg="dark" variant="dark">
    <Navbar.Brand><Link to="/"><img src="images/logo.jpeg" className="logo-img"/></Link> Mental Chroma</Navbar.Brand>
    <Nav className="ms-auto">
      <Nav.Link><Link to="/">Home</Link></Nav.Link>
      <Nav.Link >Schedule Appoinment</Nav.Link>
   <Nav.Link ><Link to="/fordoctors">For Doctors</Link></Nav.Link>
      <Nav.Link >Community</Nav.Link>
      <Nav.Link >Signin</Nav.Link>
    </Nav>
  </Navbar>
  )
    
}

export default Header