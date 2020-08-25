import React from "react";

import { BrowserRouter as Link, NavLink } from "react-router-dom";

import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";

const Header = (props) => {
  const { routes } = props;
  return (
    <Container className="header-container">
      <Navbar className="justify-content-between p-0">
        <Navbar.Brand className="header-logo">CM</Navbar.Brand>
        <Nav>
          {routes.map((route) => (
            <Nav.Link
              key={route.path}
              as={NavLink}
              to={route.path}
              activeClassName="active"
              exact
            >
              {route.name}
            </Nav.Link>
          ))}
        </Nav>
      </Navbar>
    </Container>
  );
};

export default Header;
