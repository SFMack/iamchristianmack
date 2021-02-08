import React from "react";

import { Link } from "react-router-dom";

import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Button from "@material-ui/core/Button";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import GitHubIcon from "@material-ui/icons/GitHub";

import useStyles from "./styles";

const socialLinks = [
  "https://www.linkedin.com/in/chrismackca/",
  "https://github.com/SFMack",
];

const NavBar = () => {
  const classes = useStyles();

  return (
    <AppBar position="relative" className={classes.navBar}>
      <Toolbar className={classes.toolBar}>
        <div className={classes.navButtonsLeft}>
          <Button href={socialLinks[0]}>
            <LinkedInIcon className={classes.icon} />
          </Button>

          <Button href={socialLinks[1]}>
            <GitHubIcon className={classes.icon} />
          </Button>
        </div>
        <div className={classes.navButtonsRight}>
          <Link to="/" className={classes.navLink}>
            <Button>Home</Button>
          </Link>
          <Link to="/blog" className={classes.navLink}>
            <Button>Blog</Button>
          </Link>
        </div>
      </Toolbar>
    </AppBar>
  );
};

export default NavBar;
