import React from "react";
import PropTypes from "prop-types";
import Img from "gatsby-image";

const Offerings = ({ gridItems }) => (
  <div className="columns is-multiline">
    {gridItems.map((item, index) => (
      <div key={index} className="column is-6" style={{ borderRadius: "5px" }}>
        <section className="section">
          <Img fluid={item.image.childImageSharp.fluid} />
          <p>{item.text}</p>
        </section>
      </div>
    ))}
  </div>
);

Offerings.propTypes = {
  gridItems: PropTypes.arrayOf(
    PropTypes.shape({
      image: PropTypes.object,
      text: PropTypes.string
    })
  )
};

export default Offerings;
