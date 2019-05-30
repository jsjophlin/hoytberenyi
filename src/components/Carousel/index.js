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
      naturalSlideWidth={100}
      naturalSlideHeight={125}
      totalSlides={3}
    >
      <Slider className="carousel" isPlaying={true}>
        <Slide index={0}>
          <Img fluid={props.images[0].project_image_1.childImageSharp.fluid} />
        </Slide>
        <Slide index={1}>
          <Img fluid={props.images[1].project_image_2.childImageSharp.fluid} />
        </Slide>
        <Slide index={2}>
          <Img fluid={props.images[2].project_image_3.childImageSharp.fluid} />
        </Slide>
        <Slide index={3}>
          <Img fluid={props.images[3].project_image_4.childImageSharp.fluid} />
        </Slide>
      </Slider>
      <ButtonBack>Back</ButtonBack>
      <ButtonNext>Next</ButtonNext>
    </CarouselProvider>
  );
};

export default Carousel;

// export default class extends React.Component {
//   render() {
//     return (
//       <CarouselProvider
//         naturalSlideWidth={100}
//         naturalSlideHeight={125}
//         totalSlides={3}
//       >
//         <Slider className="carousel" isPlaying={true}>
//           <Slide index={0}>I am the first Slide.</Slide>
//           <Slide index={1}>I am the second Slide.</Slide>
//           <Slide index={2}>I am the third Slide.</Slide>
//         </Slider>
//         <ButtonBack>Back</ButtonBack>
//         <ButtonNext>Next</ButtonNext>
//       </CarouselProvider>
//     );
//   }
// }
