import React from "react";
import Typography from "@material-ui/core/Typography";

import useStyles from "./styles";

const Footer = () => {
  const classes = useStyles();

  return (
    <footer className={classes.footer}>
      <Typography
        variant="subtitle1"
        align="center"
        color="textSecondary"
        component="p"
      >
        Thank you for stopping by!
      </Typography>
    </footer>
  );
};

export default Footer;
