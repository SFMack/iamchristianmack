import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faUserTie } from "@fortawesome/free-solid-svg-icons";

const Home = () => {
  return (
    <div className="home-content">
      <h2 className="home--name">Christian Mack</h2>
      <h3 className="home--message">
        Full Stack Developer from the San Francisco Bay Area
      </h3>
      <div className="home--icon-wrapper">
        <a href="https://www.linkedin.com/in/chrismackca/">
          <FontAwesomeIcon icon={faLinkedin} size="3x" />
          <span className="icon-label">chrismackca</span>
        </a>
        <a href="https://github.com/SFMack">
          <FontAwesomeIcon icon={faGithub} size="3x" />
          <span className="icon-label">SFMack</span>
        </a>
        <a href="malito:sfcamack@icoud.com">
          <FontAwesomeIcon icon={faEnvelope} size="3x" />
          <span className="icon-label">sfcamack@icloud.com</span>
        </a>
        <a href="https://www.google.com">
          <FontAwesomeIcon icon={faUserTie} size="3x" />
          <span className="icon-label">Resume</span>
        </a>
      </div>
    </div>
  );
};

export default Home;
