import React from "react";

const Skills = () => {
  const skillIcons = [
    { label: "JavaScript", icon: "devicon-javascript-plain colored" },
    { label: "Python", icon: "devicon-python-plain colored" },
    { label: "MongoDB", icon: "devicon-mongodb-plain colored" },
    { label: "Express", icon: "devicon-express-original colored" },
    { label: "React", icon: "devicon-react-original colored" },
    { label: "Node", icon: "devicon-nodejs-plain-wordmark colored" },
    { label: "Git", icon: "devicon-git-plain colored" },
    { label: "HTML", icon: "devicon-html5-plain colored" },
    { label: "CSS", icon: "devicon-css3-plain colored" },
    { label: "Sass", icon: "devicon-sass-original colored" },
    { label: "Bootstrap", icon: "devicon-bootstrap-plain colored" },
    { label: "VS Code", icon: "devicon-visualstudio-plain colored" },
  ];

  return (
    <div className="content skills-content">
      {skillIcons.map((skill) => (
        <i class={skill.icon + " icon"}></i>
      ))}
    </div>
  );
};

export default Skills;
