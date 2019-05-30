import React from "react";
import Img from "gatsby-image";
import "../../assets/sass/carousel.sass";

const Carousel = props => {
  return (
    <div className="carousel">
      {props.imageArray.map((image, index) => console.log(index, image))}
      <h2>Carousel</h2>
    </div>
  );
};

export default Carousel;
