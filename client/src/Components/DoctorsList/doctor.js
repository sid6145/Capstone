import React from "react";
import {Card, CardActionArea,CardContent ,CardActions, CardMedia, Button,Typography} from '@material-ui/core'
import { Link } from 'react-router-dom'


function DoctorCard(props) {
 
  return (
      


    <Card >
      <CardActionArea>
        <CardMedia
          component="img"
          alt=""
          height="140"
          image={props.image}
        />
        <CardContent>
        <Typography>{props.name}</Typography>
        <Typography>{props.specialization}</Typography>
         
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          <Link to="/form"> Book appointment</Link>
        </Button>
        <Button size="small" color="primary">
          Learn More
        </Button>
      </CardActions>
    </Card>
  );
}

export default DoctorCard;
