import React from "react";
import Helmet from "react-helmet";
import "../../assets/sass/homePageTemplate.sass";
import Offerings from "../Offerings";
import Testimonials from "../Testimonials";
import PropTypes from "prop-types";
import Img from "gatsby-image";

const HomePageTemplate = ({ hero_body }) => (
  <div>
    <Helmet>
      <title>Title</title>
      <meta name="description" content="Description" />
    </Helmet>
    <section className="hero is-primary is-bold is-medium is-fullheight-with-navbar">
      <div className="hero-body">
        <div className="container">
          <div className="columns">
            <div className="column is-10 is-offset-1">
              <div className="section">
                <h1 className="title">{hero_body}</h1>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="hero-background-image hero-home">Image</div>
    </section>
    <section className="section section--gradient">
      <div className="container">
        <div className="section">
          <div className="columns">
            <div className="column is-10 is-offset-1">
              <div className="content">
                <h3 className="has-text-weight-semibold is-size-2">Heading</h3>

                <h2 className="has-text-weight-semibold is-size-2">
                  Testimonials
                </h2>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
);

HomePageTemplate.propTypes = {
  hero_body: PropTypes.string
};

export default HomePageTemplate;
