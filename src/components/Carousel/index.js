import React from "react";
import Img from "gatsby-image";
import "../../assets/sass/carousel.sass";

const Carousel = props => {
  return (
    <div className="carousel-container">
      {props.imageArray.map((item, index) => {
        return (
          <div className="carousel" key={index}>
            <Img
              fluid={item.hero_carousel_image.childImageSharp.fluid}
              alt={item.hero_carousel_image_alt}
            />
            <p>{item.hero_carousel_content}</p>
          </div>
        );
      })}
    </div>
  );
};

export default Carousel;
