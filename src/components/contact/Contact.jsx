import React from "react";

import Container from "@material-ui/core/Container";

import ContactForm from "./ContactForm/ContactForm";

import useStyles from "./styles";

const Contact = () => {
  const classes = useStyles();

  return (
    <Container className={classes.contactContainer}>
      <div className={classes.headingTextWrapper}>
        <h3 className={classes.headingText}>
          You know,
          <br />
          that I know,
          <br />
          that you know,
          <br /> why this form is here...
        </h3>
      </div>
      <ContactForm />
    </Container>
  );
};

export default Contact;
