import React from "react";

import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";

import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";

import ProjectsInfo from "./projects-helper";

import useStyles from "./styles";

const Projects = () => {
  const classes = useStyles();

  return (
    <Container className={classes.cardGrid} maxWidth="md">
      <Grid container spacing={4}>
        {ProjectsInfo.map((project) => (
          <Grid item key={project.projectName} xs={12} sm={6} md={4}>
            <Card className={classes.card}>
              <CardMedia
                className={classes.cardMedia}
                image={project.imageSrc}
                title={project.projectName}
              />
              <CardContent className={classes.cardContent}>
                <Typography gutterBottom variant="h5" component="h2">
                  {project.projectName}
                </Typography>
                <Typography>{project.projectDescription}</Typography>
              </CardContent>
              <CardActions>
                <Button size="small" color="primary" href={project.live}>
                  DEMO
                </Button>
                <Button size="small" color="primary" href={project.source}>
                  CODE
                </Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default Projects;
