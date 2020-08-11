import React from "react";
import { Route } from "react-router-dom";

import { CSSTransition } from "react-transition-group";

// Constant Components
import NavBar from "./components/navBar";
import Footer from "./components/footer";

// Views
import Home from "./components/home";
import About from "./components/about";
import Skills from "./components/skills";
import Projects from "./components/projects";
import Contact from "./components/contact";

// route object passed to NavBar component
const routes = [
  { path: "/", name: "Home", Component: Home },
  { path: "/about", name: "About", Component: About },
  { path: "/skills", name: "Skills", Component: Skills },
  { path: "/projects", name: "Projects", Component: Projects },
  { path: "/contact", name: "Contact", Component: Contact },
];

function App() {
  return (
    <div className="container">
      {/* renders the navbar for every route */}
      <NavBar routes={routes} />

      {/* renders the components */}
      {routes.map(({ path, Component }) => (
        <Route key={path} exact path={path}>
          {({ match }) => (
            <CSSTransition
              in={match != null}
              timeout={300}
              classNames="page"
              unmountOnExit
            >
              <div className="page">
                <Component />
              </div>
            </CSSTransition>
          )}
        </Route>
      ))}

      {/* footer */}
      {/* <Footer /> */}
    </div>
  );
}

export default App;
