import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import { makeStyles, Container, Grid, Box, Link } from '@material-ui/core';


function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary">
      {'Copyright © '}
     {' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    minHeight: '20vh',
  },
  main: {
    marginTop: theme.spacing(8),
    marginBottom: theme.spacing(2),
  },
  footer: {
    marginTop: "auto",
    position: "bottom",
    backgroundColor: "black",
    width: "100%"
  },
}));

export default function StickyFooter() {
  const classes = useStyles();

  return (
    <footer className={classes.footer}>
        <Box bgcolor="text.secondary" color="white">
            <Container maxWidth="lg">
                <Grid container spacing={5}>
                    <Grid item xs={12} sm={4}>
                        <Box borderBottom={1}>Help</Box>
                        <Box>
                            <Link href="/" color="inherit">
                                Content
                            </Link>
                        </Box>
                        <Box>
                            <Link href="/" color="inherit">
                                Support
                            </Link>
                        </Box>
                        <Box>
                            <Link href="/" color="inherit">
                                Privacy
                            </Link>
                        </Box>
                    </Grid>
​
                    <Grid item xs={12} sm={4}>
                        <Box borderBottom={1}>Account</Box>
                        <Box>
                            <Link href="/" color="inherit">
                                Login
                            </Link>
                        </Box>
                        <Box>
                            <Link href="/" color="inherit">
                                Register
                            </Link>
                        </Box>
                        <Box>
                            <Link href="/" color="inherit">
                                Privacy
                            </Link>
                        </Box>
                    </Grid>
                    <Grid item xs={12} sm={4}>
                        <Box borderBottom={1}>Messages</Box>
                        <Box>
                            <Link href="/" color="inherit">
                                Backup
                            </Link>
                        </Box>
                        <Box>
                            <Link href="/" color="inherit">
                                History
                            </Link>
                        </Box>
                        <Box>
                            <Link href="/" color="inherit">
                                Roll
                            </Link>
                        </Box>
                    </Grid>
                </Grid>
            </Container>
​
        </Box>
    </footer>
  );
}