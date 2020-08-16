import React from "react";

import { Route } from "react-router-dom";

import { CSSTransition } from "react-transition-group";

import Container from "react-bootstrap/Container";

import routes from "../../util/routes";

const ContentBody = () => {
  return (
    <Container className="content-body-container p-0">
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
    </Container>
  );
};

export default ContentBody;
