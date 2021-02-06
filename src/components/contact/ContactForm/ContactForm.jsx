import React, { useState } from "react";

import emailjs from "emailjs-com";
import Grid from "@material-ui/core/Grid";

import useStyles from "./styles";

const ContactForm = () => {
  const classes = useStyles();

  const EMAILJS_ID = process.env.REACT_APP_EMAILJS_ID;

  const [buttonText, setButtonText] = useState("Send Message");

  const changeButtonText = () => {
    setButtonText("Message Sent");
    setTimeout(() => {
      setButtonText("Send Message");
    }, 5000);
  };

  const submitForm = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "gmail_contact_service",
        "portfolio_contact_form",
        e.target,
        EMAILJS_ID
      )
      .then(
        (result) => {
          changeButtonText();
        },
        (error) => {
          console.log(error.text);
          setButtonText("Message not sent");
        }
      );
  };

  return (
    <div className={classes.contactFormWrapper}>
      <Grid className={classes.grid}>
        <form
          className={classes.form}
          noValidate
          autoComplete="off"
          onSubmit={submitForm}
        >
          <Grid item className={classes.gridItem}>
            <input
              className={classes.textField}
              type="text"
              name="from_name"
              placeholder="Name"
            />
          </Grid>
          <Grid item className={classes.gridItem}>
            <input
              className={classes.textField}
              type="text"
              name="reply_to"
              placeholder="Email"
            />
          </Grid>
          <Grid item className={classes.gridItem}>
            <textarea
              className={classes.textField}
              name="message"
              placeholder="Enter your message"
            />
          </Grid>
          <Grid item className={classes.gridItem}>
            <input
              className={classes.textField}
              type="submit"
              value={buttonText}
            />
          </Grid>
        </form>
      </Grid>
    </div>
  );
};

export default ContactForm;
