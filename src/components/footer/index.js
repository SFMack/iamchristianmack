import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

import Container from "react-bootstrap/Container";

const Footer = () => {
  return (
    <Container className="footer-container">
      <footer>
        <div className="footer-left footer-section">
          <p className="mb-0">&#169; Christian Mack 2020</p>
        </div>
        <div className="footer-middle footer-section">
          <a href="https://www.linkedin.com/in/chrismackca/">
            <FontAwesomeIcon icon={faLinkedin} />
            chrismackca
          </a>
        </div>
        <div className="footer-right footer-section">
          <a href="malito:sfcamack@icoud.com">
            <FontAwesomeIcon icon={faEnvelope} />
            sfcamack@icloud.com
          </a>
        </div>
      </footer>
    </Container>
  );
};

export default Footer;
