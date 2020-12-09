import React, { useState } from "react";
import axios from "axios";

import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";

import useStyles from "./styles";
import { TextField } from "@material-ui/core";

const Contact = () => {
  const classes = useStyles();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [sent, setSent] = useState("");
  const [buttonText, setButtonText] = useState("Send Message");

  const resetForm = (e) => {
    setName("");
    setEmail("");
    setMessage("");
    setSent("");
    buttonText("Send Message");
  };

  const submitForm = (e) => {
    e.preventDefault();

    let data = {
      name,
      email,
      message,
      sent,
      buttonText,
    };

    axios
      .post("https://cmack-portfolio.herokuapp.com/api/send", data)
      .then((res) => {
        res.status(200).json({ message: "Success!" });
        setButtonText("Success!");
        resetForm();
      })
      .catch(() => {
        setButtonText("Message not sent");
      });
  };

  return (
    <Container maxWidth="md">
      <h3>Send me a message and I'll get back to you as soon as possible.</h3>
      <form
        className={classes.form}
        noValidate
        autoComplete="off"
        onSubmit={submitForm}
      >
        <Grid className={classes.grid}>
          <Grid item className={classes.gridItem}>
            <TextField
              id="nameInput"
              label="Name"
              variant="outlined"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className={classes.textField}
            />
            <TextField
              id="emailInput"
              label="Email"
              variant="outlined"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className={classes.textField}
            />
          </Grid>
          <Grid item>
            <TextField
              id="messageInput"
              label="Message"
              multiline
              rows={4}
              variant="outlined"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />
          </Grid>
          <Grid item>
            <Button type="submit" onClick={submitForm}>
              {buttonText}
            </Button>
          </Grid>
        </Grid>
      </form>
    </Container>
  );
};

export default Contact;
