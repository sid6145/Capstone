import { Button, Container, makeStyles, Paper, TextareaAutosize, Typography } from '@material-ui/core'
import React,{useState, useEffect} from 'react';
import axios from 'axios'
import Post from './post';

const useStyles = makeStyles(() => ({
    paper:{
        width:"100%",
        height:"auto",
        marginTop:"50px",
        marginBottom:"50px",
        display: "flex",
        justifyContent:"center",
        alignContent:"center"
    },

    textArea:{
        padding:"10px",
        marginTop:"30px",
        marginBottom:"30px",
        width:"30%"
    },
    textAreaBtn:{
        height:"37px",
        marginTop:"30px",
        marginLeft:"5px"
    }
}))




function Community() {
    const [post, setPost] = useState([])
    const [text, setText] = useState("")

    useEffect( async () => {
        fetch("http://localhost:8080/message")
        .then((res) => res.json())
        .then((json) => setPost(json))
    }, [post])


    const handlePost = (value) => {
        axios.post('http://localhost:8080/message', {
           
            description: value
            
        })
        .then((res) => console.log(res))
        .catch((err) => console.log(err))

        setText("")
        
    }


    const classes = useStyles();
    return (
    <Container className={classes.container}>
        <Typography variant="h4" gutterBottom="true">Community Discussion Board</Typography>


        {
            post.map((item) => (
                <Post postTitle={item.title} postBody={item.description}/>
            ))
        }
       
        <Paper className={classes.paper}  variant="outlined">
                <TextareaAutosize value={text} onChange={(e) => setText(e.target.value)}  className={classes.textArea}/>
                <Button onClick={(value) => handlePost(text)}  className={classes.textAreaBtn} variant="outlined" color="primary">Post</Button>
        </Paper>
    </Container>    
    )
}

export default Community
