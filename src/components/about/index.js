import React from "react";
import cartoonHeadshot from "../../images/cartoon-headshot.png";

const About = () => {
  return (
    <div className="about-content">
      <div className="about--image-wrapper">
        <img src={cartoonHeadshot} alt="cartoon headshot of christian mack" />
      </div>

      <p>
        I first began coding in high school where I got my feet wet with HTML
        and CSS. This past year I have gained experience working with teams to
        build full-stack projects utilizing React JS, Node JS, Express, and
        more.
      </p>
    </div>
  );
};

export default About;
