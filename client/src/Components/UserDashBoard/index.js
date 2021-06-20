import React, {useState, useEffect} from 'react'
import {Container, Paper, Typography, Box, makeStyles, Button} from "@material-ui/core"
import { useHistory } from 'react-router-dom'
import axios from 'axios'

const useStyles = makeStyles(() => ({
    container:{
        minHeight:"100vh",
        padding:"50px 100px"
    },
    activity:{
        width:"40%",
        height:"400px"
    },

    newsFeed:{
        width:"40%",
        height:"400px"
    }
}))



function Dashboard() {

    const classes = useStyles()

    const history = useHistory()

    const [appointment, setAppointment] = useState([])

    useEffect(() => {
       
        axios.get("http://localhost:5000/api/appointment/user", {
            headers:{
                "auth-token": localStorage.userToken
            }
    })
    .then((res) => setAppointment(res.data))
    .catch((err) => console.log(err))

    })

    const handleSignout = () => {
        localStorage.removeItem("userToken")
        history.push("/")
        window.location.reload()

    }
    return (
        <Container className={classes.container}>
            <Typography>Dashbaord</Typography>
            <Button onClick={handleSignout}>Signout</Button>
            <Box display="flex" marginTop="40px" justifyContent="center" justifyContent="space-around">
                <Paper variant="outlined" className={classes.activity}>
                    <Typography>My Appointments</Typography>
                        {
                            appointment.map((item) => (
                                <div>
                                    {item.name} {item.email}
                                </div>
                            ))
                        }
                </Paper>
                <Paper variant="outlined"  className={classes.newsFeed}>
                    <Typography>Latest news</Typography>
                </Paper>
            </Box>
        </Container>
    )
}

export default Dashboard
