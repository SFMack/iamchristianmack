import React from "react";

import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";

import Skills from "../skills/Skills";
import Resume from "../resume/Resume";

import useStyles from "./styles";

const Hero = () => {
  const classes = useStyles();

  return (
    <div className={classes.heroContent}>
      <Container maxWidth="md">
        <div className={classes.changeFlexDirectionWrapper}>
          <div className={classes.heroIntroText}>
            <Typography
              component="h3"
              variant="h3"
              align="left"
              color="textPrimary"
              gutterBottom
            >
              Hello! <br />
              Welcome to my portfolio.
            </Typography>
            <Typography
              variant="h4"
              align="left"
              color="textSecondary"
              paragraph
            >
              I'm Christan Mack, <br /> a Full Stack Developer
              <br />
              specializing in Frontend
            </Typography>
          </div>
          <Skills />
        </div>
        <Resume />
      </Container>
    </div>
  );
};

export default Hero;
