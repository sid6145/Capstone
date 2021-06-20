import React,{useState, useEffect} from 'react'
import { Container, Typography, makeStyles, Box, Paper, Button } from '@material-ui/core'
import {Link, useHistory } from 'react-router-dom'
import axios from 'axios'
import Appointment from './appointment'


const useStyles = makeStyles(() =>({
    container:{
        minHeight: "100vh",
    },
    appointments:{
        width: "100%",
        height:"500px"
    }
}))

function DocotorDashBoard() {
    const classes = useStyles()
    const [appointment, setAppointment] = useState([])

   useEffect(() => {
     
    axios.get("http://localhost:5000/api/appointment",{
        headers:{
            "auth-token": localStorage.docToken
        }
    })
    
    .then((res) => setAppointment(res.data))
    .catch((err) => console.log(err))
   }, [])



    console.log(appointment)
    return (
        
        <Container className={classes.container}>
            
            <Box display="flex" justifyContent="space-around" padding="20px 20px">
                 <Typography variant="h4">Welcome Doctor</Typography>
                 <Link to="/docprofile">
                 <Button color="primary" variant="contained">Profile</Button>
                 </Link>
             
            </Box>
            
            
            <Box paddingTop="10px">
                <Typography variant="h6">Appoinments</Typography>
                <Paper className={classes.appointments} variant="outlined">
                        {
                            appointment.map((item) => (
                            
                                <Appointment name={item.name} email={item.email}/>
                             
                              
                           
                            ))
                        }
                </Paper>
            </Box>


        </Container>
    )
}

export default DocotorDashBoard
