import React from "react";
import {
  CarouselProvider,
  Slider,
  Slide,
  ButtonBack,
  ButtonNext
} from "pure-react-carousel";
import Img from "gatsby-image";
import "pure-react-carousel/dist/react-carousel.es.css";
import "../../assets/sass/carousel.sass";

const Carousel = props => {
  return (
    <CarouselProvider
      naturalSlideWidth={2358}
      naturalSlideHeight={1474}
      totalSlides={5}
    >
      <Slider className="carousel" isPlaying={true}>
        <Slide index={0}>
          <Img
            fluid={props.items[0].hero_carousel_image.childImageSharp.fluid}
          />
        </Slide>
        <Slide index={1}>
          <Img
            fluid={props.items[1].hero_carousel_image.childImageSharp.fluid}
          />
        </Slide>
        <Slide index={2}>
          <Img
            fluid={props.items[2].hero_carousel_image.childImageSharp.fluid}
          />
        </Slide>
        <Slide index={3}>
          <Img
            fluid={props.items[3].hero_carousel_image.childImageSharp.fluid}
          />
        </Slide>
        <Slide index={4}>
          <Img
            fluid={props.items[4].hero_carousel_image.childImageSharp.fluid}
          />
        </Slide>
      </Slider>
      <ButtonBack>{`<`}</ButtonBack>
      <ButtonNext>{`>`}</ButtonNext>
    </CarouselProvider>
  );
};

export default Carousel;
