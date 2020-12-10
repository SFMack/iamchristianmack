import React from "react";

import Grid from "@material-ui/core/Grid";

import useStyles from "./styles";

const Skills = () => {
  const classes = useStyles();

  const skillIcons = [
    { label: "JavaScript", icon: "devicon-javascript-plain colored" },
    { label: "Python", icon: "devicon-python-plain colored" },
    { label: "MongoDB", icon: "devicon-mongodb-plain colored" },
    { label: "Express", icon: "devicon-express-original colored" },
    { label: "React", icon: "devicon-react-original colored" },
    { label: "Node", icon: "devicon-nodejs-plain-wordmark colored" },
    { label: "Git", icon: "devicon-git-plain colored" },
    { label: "HTML", icon: "devicon-html5-plain colored" },
    { label: "CSS", icon: "devicon-css3-plain colored" },
    { label: "Sass", icon: "devicon-sass-original colored" },
    { label: "Bootstrap", icon: "devicon-bootstrap-plain colored" },
    { label: "VS Code", icon: "devicon-visualstudio-plain colored" },
  ];

  return (
    <div className={classes.skillsDiv}>
      <Grid container spacing={2} justify="center">
        {skillIcons.map((skill) => (
          <Grid item key={skill.label}>
            <i className={skill.icon + " " + classes.icon}></i>
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default Skills;
