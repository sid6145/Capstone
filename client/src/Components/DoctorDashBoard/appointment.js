import React, { useState } from 'react';
import { makeStyles, Accordion, AccordionSummary, Typography, TextField, Button } from '@material-ui/core';
import ExpandMoreIcon  from '@material-ui/icons/ExpandMore'


const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular,
  },
}));

export default function Appointment(props) {
  const classes = useStyles();

  const [videoLink, setVideoLink] = useState("")

  return (
    <div className={classes.root}>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography className={classes.heading}>{props.name}</Typography>
        </AccordionSummary>
        <div>
            <Typography variant="h6">email:{props.email}</Typography>
        </div>
        <div>
            <TextField value={videoLink} onChange={(e) => setVideoLink(e.target.value)}  label="enter zoom/meet link"/>
            <Button>Add</Button>
        </div>
       
      
      </Accordion>
   
    </div>
  );
}
