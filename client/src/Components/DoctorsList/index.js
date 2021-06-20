import React, { useState, useEffect } from "react";
import { makeStyles, Container, Grid } from "@material-ui/core";
import DoctorCard from "./doctor";
import axios from "axios";

const useStyles = makeStyles({
  container: {
    padding: "150px 100px",
  },
});

function DoctorsList() {
  const classes = useStyles();
  const [doctor, setDoctor] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/doctor/register")
      .then((res) => setDoctor(res.data))
      .catch((err) => console.log(err));
  });

  return (
    <Container className={classes.container}>
      <Grid container>
        {doctor.map((doc) => (
          <Grid item sm >
            <DoctorCard
              name={doc.name}
              specialization={doc.specialization}
              image={doc.image}
            />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}

export default DoctorsList;
