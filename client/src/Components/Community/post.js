import { Box, makeStyles, Paper, Typography } from '@material-ui/core'
import React from 'react'

const useStyles = makeStyles(() => ({
    post:{
        margin:"10px 10px",
        padding:"20px 300px"
    }
}))

function Post(props) {
    const classes = useStyles()

    return (
      <Box width="100%">
        <Paper className={classes.post}>
         <Typography align="left">
             {props.postBody}
         </Typography>
        </Paper>
          
      </Box>
    )
}

export default Post