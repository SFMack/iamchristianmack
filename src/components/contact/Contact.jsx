import React from "react";

import Container from "@material-ui/core/Container";

import ContactForm from "./ContactForm/ContactForm";

import useStyles from "./styles";

const Contact = () => {
  const classes = useStyles();

  return (
    <Container maxWidth="md" className={classes.contactContainer}>
      <div className={classes.headingTextWrapper}>
        <h3 className={classes.headingText}>
          You know
          <br />
          That I know
          <br />
          That you know
          <br /> Why this form is here...
        </h3>
      </div>
      <ContactForm />
    </Container>
  );
};

export default Contact;
