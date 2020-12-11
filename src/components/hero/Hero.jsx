import React from "react";

import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";

import Skills from "../skills/Skills";
import Resume from "../resume/Resume";

import useStyles from "./styles";

const Hero = () => {
  const classes = useStyles();

  return (
    <div className={classes.heroContent}>
      <Container maxWidth="md">
        <Grid>
          <Grid item>
            <Typography
              component="h3"
              variant="h3"
              align="left"
              color="textPrimary"
              gutterBottom
            >
              Hello! <br />
              My name is Christian Mack.
            </Typography>
            <Typography
              variant="h4"
              align="left"
              color="textSecondary"
              paragraph
            >
              I'm a Full Stack Developer specializing in Frontend.
              <br />
              Welcome to my portfolio!
            </Typography>
            <Resume />
          </Grid>
          <Grid item xs={12}>
            <Skills />
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default Hero;
