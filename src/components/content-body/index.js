import React from "react";

import { Route } from "react-router-dom";

import { CSSTransition } from "react-transition-group";

import Row from "react-bootstrap/Row";

import routes from "../../util/routes";

const ContentBody = () => {
  return (
    <Row className="content-body-row">
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
    </Row>
  );
};

export default ContentBody;
