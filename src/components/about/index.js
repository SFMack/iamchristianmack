import React from "react";
import cartoonHeadshot from "../../images/cartoon-headshot.png";

const About = () => {
  return (
    <div className="content about-content">
      <img src={cartoonHeadshot} alt="cartoon headshot of christian mack" />

      <h2>
        I first began coding in high school where I got my feet wet with HTML
        and CSS. This past year I have gained experience working with teams to
        build full-stack projects utilizing React JS, Node JS, Express, and
        more.
      </h2>
    </div>
  );
};

export default About;
