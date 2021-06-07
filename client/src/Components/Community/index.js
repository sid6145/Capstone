import React, { useRef, useState } from 'react';
import './style.css'
import firebase from 'firebase/app';
import 'firebase/firestore';



import { useCollectionData } from 'react-firebase-hooks/firestore';

if (!firebase.apps.length) {
    firebase.initializeApp({
      
            apiKey: "AIzaSyB5GZR3QDEmEulxzwVLr5xJf-FYNfpuLck",
            authDomain: "commnunity-page.firebaseapp.com",
            projectId: "commnunity-page",
            storageBucket: "commnunity-page.appspot.com",
            messagingSenderId: "970121550660",
            appId: "1:970121550660:web:f5f92b99b07e05fe9f9511",
            measurementId: "G-B09R4PGKTT"
        })  
 }else {
    firebase.app(); // if already initialized, use that one
 }




const firestore = firebase.firestore();



function App() {

  return (
    <div className="App">
      <header>
      </header>

      <section>
        <ChatRoom /> 
      </section>

    </div>
  );
}



function ChatRoom() {
  const dummy = useRef();
  const messagesRef = firestore.collection('messages');
  const query = messagesRef.orderBy('createdAt').limit(25);

  const [messages] = useCollectionData(query, { idField: 'id' });

  const [formValue, setFormValue] = useState('');


  const sendMessage = async (e) => {
    e.preventDefault();



    await messagesRef.add({
      text: formValue,
      createdAt: firebase.firestore.FieldValue.serverTimestamp(),
   
    })

    setFormValue('');
    dummy.current.scrollIntoView({ behavior: 'smooth' });
  }

  return (<>
    <main>

      {messages && messages.map(msg => <ChatMessage key={msg.id} message={msg} />)}

      <span ref={dummy}></span>

    </main>

    <form onSubmit={sendMessage}>

      <input value={formValue} onChange={(e) => setFormValue(e.target.value)} placeholder="say something nice" />

      <button type="submit" disabled={!formValue}>🕊️</button>

    </form>
  </>)
}


function ChatMessage(props) {
  const { text, uid, photoURL } = props.message;

//   const messageClass = uid === auth.currentUser.uid ? 'sent' : 'received';

  return (<>
    <div className={``}>
      <img src={photoURL || 'https://api.adorable.io/avatars/23/abott@adorable.png'} />
      <p>{text}</p>
    </div>
  </>)
}


export default App;






// import { Button, Container, makeStyles, Paper, TextareaAutosize, Typography } from '@material-ui/core'
// import React,{useState} from 'react'
// import Post from './post';

// const useStyles = makeStyles(() => ({
//     paper:{
//         width:"100%",
//         height:"auto",
//         marginTop:"50px",
//         marginBottom:"50px",
//         display: "flex",
//         justifyContent:"center",
//         alignContent:"center"
//     },

//     textArea:{
//         padding:"10px",
//         marginTop:"30px",
//         marginBottom:"30px",
//         width:"30%"
//     },
//     textAreaBtn:{
//         height:"37px",
//         marginTop:"30px",
//         marginLeft:"5px"
//     }
// }))




// function Community() {
//     const [post, setPost] = useState([])
//     const [text, setText] = useState("")

//     const handlePost = (value) => {
//         setPost([...post, value])
//         setText("")
//     }

//     const classes = useStyles();
//     return (
//     <Container className={classes.container}>
//         <Typography variant="h4" gutterBottom="true">Community Discussion Board</Typography>

//         {
//             post.map((item) => (
//                 <Post postBody={item}/>
//             ))
//         }
       
//         <Paper className={classes.paper}  variant="outlined">
//                 <TextareaAutosize value={text} onChange={(e) => setText(e.target.value)}  className={classes.textArea}/>
//                 <Button onClick={(value) => handlePost(text)}  className={classes.textAreaBtn} variant="outlined" color="primary">Post</Button>
//         </Paper>
//     </Container>    
//     )
// }

// export default Community
