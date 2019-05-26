import React from "react";
import Img from "gatsby-image";
import "../../assets/sass/parallaxHero.sass";

const ParallaxHero = props => {
  return (
    <div className="parallax-hero">
      <Img fluid={props.image} alt={props.imageAlt} />
    </div>
  );
};

export default ParallaxHero;
