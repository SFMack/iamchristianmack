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
            <Carousel.Caption>
              <h3>{item.projectName}</h3>
              <p>{item.projectDescription}</p>
            </Carousel.Caption>
            <button>Code</button>
            <button>github</button>
          </Carousel.Item>
        ))}
      </Carousel>
    </div>
  );
};

export default Projects;
