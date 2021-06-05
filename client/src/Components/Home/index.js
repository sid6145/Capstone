import React from "react";
import {
  makeStyles,
  Button,
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardActionArea,
  CardMedia,
  CardContent,
  Divider,
  Paper
} from "@material-ui/core";
import "./style.css";

const useStyles = makeStyles(() => ({
  btn: {
    margin: "5px",
  },

  headerText: {
    textAlign: "left",
    width: "500px",
  },

  headerImg: {
    width: "30vw",
    height: "50vh",
    marginLeft: "50px",
  },

  btn: {
    margin: "5px",
    marginTop: "120px",
  },

  welcomeMessage: {
    padding: 20,
  },

  media:{
      height: 140,
  },

  paper:{
      width: "100%",
      height: 300,
  }
}));

function Home() {
  const classes = useStyles();

  return (
    <Container>
      <Typography className={classes.welcomeMessage} variant="h4">
        Welcome to Mental Chroma
      </Typography>
      <Box
        display="flex"
        justify-content="space-around"
        text-align="left"
        px="100px"
        py="50px"
      >
        <Typography className={classes.headerText}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
          vitae risus est. Etiam posuere est nec dapibus eleifend. Praesent vel
          luctus tellus, scelerisque ullamcorper orci. Nulla id magna lorem.
          Integer aliquam, nisl congue dignissim tincidunt, purus elit placerat
          mauris, quis efficitur risus dui vel lorem. Duis a metus nisl.
          <Button className={classes.btn} color="primary" variant="contained">
            Book an appointment
          </Button>
          <Button className={classes.btn} color="primary" variant="outlined">
            Check out our blogs
          </Button>
        </Typography>

        <img className={classes.headerImg} src="images/header-img2.svg" />
      </Box>
    <Divider variant="fullWidth" light="true" />
      <Typography variant="h4" style={{paddingTop:"50px"}}>Our Experts are here to listen and help</Typography>
      <Grid container spacing={3} style={{padding:"50px 100px"}}>
        <Grid item sm>
          <Card className={classes.root}>
            <CardActionArea>
              <CardMedia
                className={classes.media}
                image="images/doc1-home.jpg"
                title="Contemplative Reptile"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                  Lizard
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  Lizards are a widespread group of squamate reptiles, with over
                  6,000 species, ranging across all continents except Antarctica
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </Grid>
        <Grid item sm>
        <Card className={classes.root}>
            <CardActionArea>
              <CardMedia
                className={classes.media}
                image="images/doc2-home.jpg"
                title="Contemplative Reptile"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                  Lizard
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  Lizards are a widespread group of squamate reptiles, with over
                  6,000 species, ranging across all continents except Antarctica
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </Grid>
        <Grid item sm>
        <Card className={classes.root}>
            <CardActionArea>
              <CardMedia
                className={classes.media}
                image="images/doc3-home.jpg"
                title="Contemplative Reptile"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                  Lizard
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  Lizards are a widespread group of squamate reptiles, with over
                  6,000 species, ranging across all continents except Antarctica
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </Grid>
      </Grid>


    
     <Box padding="100px 0">
         <Typography variant="h4" style={{paddingBottom:"30px"}}>Our service is reliable, convinient and affordable</Typography>
        <Paper className={classes.paper} variant="outlined" elevation={3}>
            <img src="images/section3.svg" width="100%" height="300"/>
        </Paper>
     </Box>
            
    <Typography variant="h4">Testamonials</Typography> 
     <Grid container spacing={4} style={{padding:"50px 100px"}}>
       <Grid item sm>
       <CardMedia
                className={classes.media}
                image="images/testamonial1.jpg"
                title="Contemplative Reptile"
        />
        <CardContent>
        <Typography gutterBottom variant="h5" component="h2">
                  Lizard
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  Lizards are a widespread group of squamate reptiles, with over
                  6,000 species, ranging across all continents except Antarctica
                </Typography>
        </CardContent>
       </Grid>
       <Grid item sm>
       <CardMedia
                className={classes.media}
                image="images/testamonial2.jpg"
                title="Contemplative Reptile"
        />
        <CardContent>
        <Typography gutterBottom variant="h5" component="h2">
                  Lizard
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  Lizards are a widespread group of squamate reptiles, with over
                  6,000 species, ranging across all continents except Antarctica
                </Typography>
        </CardContent>
       </Grid>
       <Grid item sm>
       <CardMedia
                className={classes.media}
                image="images/testamonial3.jpg"
                title="Contemplative Reptile"
        />
        <CardContent>
        <Typography gutterBottom variant="h5" component="h2">
                  Lizard
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  Lizards are a widespread group of squamate reptiles, with over
                  6,000 species, ranging across all continents except Antarctica
                </Typography>
        </CardContent>
       </Grid>
    
         
       <Grid item sm>
       <CardMedia
                className={classes.media}
                image="images/testamonial4.jpg"
                title="Contemplative Reptile"
        />
        <CardContent>
        <Typography gutterBottom variant="h5" component="h2">
                  Lizard
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  Lizards are a widespread group of squamate reptiles, with over
                  6,000 species, ranging across all continents except Antarctica
                </Typography>
        </CardContent>
       </Grid>
     </Grid>
         

         
    </Container>
  );
}

export default Home;
