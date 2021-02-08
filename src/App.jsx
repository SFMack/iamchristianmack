import React from "react";
import { Route } from "react-router-dom";

// material-ui
import CssBaseline from "@material-ui/core/CssBaseline";

// components
import NavBar from "./components/navBar/NavBar";

import Home from "./components/home/Home";
import Blog from "./components/blog/Blog";
import Footer from "./components/footer/Footer";

import useStyles from "./styles";

export default function App() {
  const classes = useStyles();

  return (
    <>
      <CssBaseline />
      <NavBar />
      <main className={classes.main}>
        <Route exact path="/" component={Home} />
        <Route path="/blog" component={Blog} />
      </main>
      <Footer />
    </>
  );
}
