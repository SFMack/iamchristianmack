import React from "react";
import { BrowserRoute as Link, NavLink } from "react-router-dom";
import { Navbar, Nav } from "react-bootstrap";

const NavBar = (props) => {
  const { routes } = props;
  return (
    <Navbar bg="light">
      <Nav className="mx-auto">
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
  );
};

export default NavBar;
