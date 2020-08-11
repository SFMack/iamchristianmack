import React from "react";
import { BrowserRoute as Link, NavLink } from "react-router-dom";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const Header = (props) => {
  const { routes } = props;
  return (
    <>
      <h3 className="header-logo">Christian Mack</h3>

      <Navbar className="justify-content-end">
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
    </>
  );
};

export default Header;
