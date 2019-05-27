import React, { useState } from "react";
import { useSpring, animated as a } from "react-spring";
import Img from "gatsby-image";
import "../../assets/sass/cardReveal.sass";
import { aspectRatioPadding } from "../../util/helpers";

const CardReveal = ({ alt, details, direction, image }) => {
  const [revealed, set] = useState(false);
  const cardRevealProps = useSpring({
    to: {
      transform: revealed
        ? "translateX(0)"
        : `translateX(${getDirection(direction)})`
    },
    from: { transform: "translateX(-100%)" }
  });

  function getDirection(dir) {
    let value;
    dir === "left" ? (value = "-100%") : (value = "100%");

    return value;
  }

  return (
    <div
      onMouseEnter={() => set(state => true)}
      onMouseLeave={() => set(state => false)}
      className="card-reveal"
      style={{ paddingBottom: aspectRatioPadding(image, 600) }}
    >
      <div className="card-cover">
        <Img fluid={image} alt={alt} />
      </div>
      <a.div className="card-to-reveal" style={cardRevealProps}>
        <div className="inner">
          <h3>Project Details:</h3>
          <p>{details}</p>
        </div>
      </a.div>
    </div>
  );
};

export default CardReveal;
