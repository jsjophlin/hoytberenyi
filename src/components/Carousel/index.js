import React from "react";
import {
  CarouselProvider,
  Slider,
  Slide
  // ButtonBack,
  // ButtonNext
} from "pure-react-carousel";
import Img from "gatsby-image";
import AnimatedEntranceBlock from "../AnimatedEntranceBlock";
import "pure-react-carousel/dist/react-carousel.es.css";
import "../../assets/sass/carousel.sass";

const Carousel = ({ items, slideWidth, slideHeight, numItems }) => {
  return (
    <CarouselProvider
      naturalSlideWidth={slideWidth}
      naturalSlideHeight={slideHeight}
      totalSlides={numItems}
    >
      <Slider className="carousel" isPlaying={true}>
        {items.map((item, index) => {
          return (
            <Slide key={index} index={index}>
              <Img
                fluid={item.hero_carousel_image.childImageSharp.fluid}
                alt={item.hero_carousel_image_alt}
              />
              <div className="hero-carousel--content">
                <AnimatedEntranceBlock>
                  <h1>{item.hero_carousel_content}</h1>
                </AnimatedEntranceBlock>
              </div>
            </Slide>
          );
        })}
      </Slider>
      {/* <ButtonBack>{`<`}</ButtonBack>
      <ButtonNext>{`>`}</ButtonNext> */}
    </CarouselProvider>
  );
};

export default Carousel;
