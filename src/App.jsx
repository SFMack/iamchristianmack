import React from "react";

// material-ui
import CssBaseline from "@material-ui/core/CssBaseline";

// components
import NavBar from "./components/navBar/NavBar";
import Hero from "./components/hero/Hero";
import Projects from "./components/projects/Projects";
import Contact from "./components/contact/Contact";
import Footer from "./components/footer/Footer";

import useStyles from "./styles";

export default function App() {
  const classes = useStyles();
  return (
    <>
      <CssBaseline />
      <NavBar />
      <main className={classes.main}>
        <Hero />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
