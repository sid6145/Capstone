import React, { useState } from "react";
import { Box, TextField, Button, Typography } from "@material-ui/core";
import 'react-calendar/dist/Calendar.css'
import Calendar from "react-calendar";
import { useHistory } from "react-router-dom";
import axios from "axios";

function Form() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [date, onChange] = useState(new Date());
  const history = useHistory();

    


  const handleSubmit = () => {
    axios
      .post(
        "http://localhost:5000/api/appointment",

        {
          name: name,
          email: email,
          date: date,
        },

        {
          headers: {
            "auth-token": localStorage.docToken,
          },
        }
      )

      .then((res) => {
        if (res) {
          alert("success");
          history.push("/dashboard");
        }
      })
      .catch((err) => console.log(err));
  };

  return (
    <>
      <Box display="flex" flexDirection="column" padding="200px 200px">
        <TextField
          value={name}
          onChange={(e) => setName(e.target.value)}
          label="first name"
        />
        <TextField
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          label="email"
        />

      


        <Calendar
         onChange={onChange}
         value={date}
         />
        <Button onClick={handleSubmit}>Submit</Button>
      </Box>
    </>
  );
}

export default Form;
