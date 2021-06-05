import React from 'react'
import {AppBar, Toolbar, Typography, makeStyles,IconButton, Button} from "@material-ui/core"
import MenuIcon from '@material-ui/icons/Menu'
import {Link} from 'react-router-dom'
import './style.css'

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    marginRight: theme.spacing(30)
  },
  navBtn: {
    marginRight: theme.spacing(8)
  },
  navLinks: {
    textDecoration: "none",
    color: "white"
  }
}));

 function Header() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" className={classes.title}>
              Mental Chroma
          </Typography>
          
          <Link className={classes.navLinks} to="/">
          <Button className={classes.navBtn} color="inherit">Home</Button>
          </Link>
         
          <Button className={classes.navBtn} color="inherit">Schedule Appoinment</Button>

          <Link className={classes.navLinks} to="/fordoctors">
            <Button className={classes.navBtn} color="inherit">
              For Doctors
            </Button>
          </Link>

          <Button className={classes.navBtn} color="inherit">Community</Button>
          <Link className={classes.navLinks} to="/userssignin">
          <Button className={classes.navBtn} color="inherit">Signin</Button>
          </Link>
     
       
          
         
        </Toolbar>
      </AppBar>
    </div>
  );
}
   
 



  //   <Navbar className="navbar" bg="dark" variant="dark">
  //   <Navbar.Brand><Link to="/"><img src="images/logo.jpeg" className="logo-img"/></Link> Mental Chroma</Navbar.Brand>
  //   <Nav className="ms-auto">
  //     <Nav.Link>Home</Link></Nav.Link>
  //     <Nav.Link >Schedule Appoinment</Nav.Link>
  //  <Nav.Link ><Link to="/fordoctors">For Doctors</Link></Nav.Link>
  //     <Nav.Link >Community</Nav.Link>
  //     <Nav.Link >Signin</Nav.Link>
  //   </Nav>
  // </Navbar>


export default Header