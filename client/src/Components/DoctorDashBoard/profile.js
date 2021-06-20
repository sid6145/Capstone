import { useHistory } from "react-router-dom";
import React, { useEffect, useState } from "react";
import axios from "axios";
import {
  Box,
  Avatar,
  Button,
  makeStyles,
  Container,
  Typography,
} from "@material-ui/core";

const useStyles = makeStyles(() => ({
  container: {
    display: "flex",
    flexDirection: "column",
    marginTop: "px",
    padding: "200px 200px",
  },
  profileImg: {
    width: "150px",
    height: "150px",
    borderRadius: "50%",
  },
}));

function DocProfile() {
  const classes = useStyles();

  const [profile, setProfile] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/doctor/profile", {
        headers: { "auth-token": localStorage.docToken },
      })
      .then((res) => setProfile(res.data))
      .catch((err) => console.log(err));
  }, [profile]);

  const history = useHistory();

  const handleSignout = () => {
    window.localStorage.removeItem("docToken");
    history.push("/doctorssignin");
    window.location.reload();
  };

  const handleChangeImage = () => {
    let imageUrl = prompt("enter image url");
    axios
      .put(
        "http://localhost:5000/api/doctor/profile",
        { image: imageUrl },
        {
          headers: { "auth-token": localStorage.docToken },
        }
      )
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  };

  return (
    <Container className={classes.container}>
      <Box textAlign="center">
        <img
          className={classes.profileImg}
          src={profile.image}
          alt="profile image"
        />

        <Button onClick={handleChangeImage}>Change image</Button>
        <Typography>{profile.name}</Typography>
        <Typography>{profile.email}</Typography>
        <Typography>{profile.specialization}</Typography>
        <Button color="secondary" onClick={handleSignout} variant="contained">
          Signout
        </Button>
      </Box>
    </Container>
  );
}

export default DocProfile;
