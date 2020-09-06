import React from "react";

import Carousel from "react-bootstrap/Carousel";

import CarouselItems from "../../util/carousel-helper";

const Projects = () => {
  return (
    <div className="content">
      <Carousel>
        {CarouselItems.map((item) => (
          <Carousel.Item>
            <img
              className="d-block m-auto"
              src={item.imageSrc}
              alt={item.altText}
            />
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
                  velit. Lorem ipsum dolor sit amet consectetur adipiscing elit
                  ut aliquam. Diam quis enim lobortis scelerisque. Feugiat in
                  ante metus dictum at tempor commodo ullamcorper. Scelerisque
                  viverra mauris in aliquam. Dignissim sodales ut eu sem integer
                  vitae justo.
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
