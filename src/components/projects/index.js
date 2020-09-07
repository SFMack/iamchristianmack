import React from "react";

import Carousel from "react-bootstrap/Carousel";

import CarouselItems from "../../util/carousel-helper";

const Projects = () => {
  return (
    <div className="project-content">
      <Carousel>
        {CarouselItems.map((item) => (
          <Carousel.Item>
            <div className="carousel-image-wrapper">
              <img className="m-auto" src={item.imageSrc} alt={item.altText} />
            </div>
            {/* <Carousel.Caption>HTML, CSS, Javascript</Carousel.Caption> */}
            <div className="item--project-info">
              <div className="project-info-header">
                <h3>{item.projectName}</h3>
                <div className="project-action-buttons">
                  <a href={item.source}>SOURCE</a>
                  <a href={item.live}>LIVE</a>
                </div>
              </div>
              <div className="project-info-description">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Blandit volutpat maecenas volutpat blandit aliquam etiam erat
                  velit.
                </p>
              </div>
            </div>
          </Carousel.Item>
        ))}
      </Carousel>
    </div>
  );
};

export default Projects;
