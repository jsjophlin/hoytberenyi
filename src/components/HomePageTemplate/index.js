import React from "react";
import Helmet from "react-helmet";
import "../../assets/sass/homePageTemplate.sass";
import PropTypes from "prop-types";
import Img from "gatsby-image";

const HomePageTemplate = ({
  title,
  metaTitle,
  metaDescription,
  heroBody,
  heroImageAlt,
  heroImage,
  aboutHeading,
  aboutBody,
  ourTeamHeading,
  avatar,
  secondaryHeroImage,
  secondaryHeroImageAlt,
  ourProcessHeading,
  ourProcessBody,
  ourProcessImage,
  ourServicesHeading,
  ourServicesBody,
  ourServicesList,
  tertiaryHeroImage,
  tertiaryHeroImageAlt,
  projectHeading,
  projects
}) => (
  <div>
    <Helmet>
      <title>{metaTitle}</title>
      <meta name="description" content={metaDescription} />
    </Helmet>
    <section className="hero is-primary is-bold is-medium is-fullheight-with-navbar">
      <div className="hero-body">
        <div className="container">
          <div className="columns">
            <div className="column is-10 is-offset-1">
              <div className="section">
                <h1 className="title">{heroBody}</h1>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="hero-background-image hero-home">
        <Img fluid={heroImage.childImageSharp.fluid} alt={heroImageAlt} />
      </div>
    </section>
    <section className="section">
      <div className="container">
        <div className="section">
          <div className="columns">
            <div className="column is-one-quarter">
              <div className="content">
                <h3 className="has-text-weight-semibold is-size-2">
                  {aboutHeading}
                </h3>
              </div>
            </div>
            <div className="column is-three-quarters">
              <p>{aboutBody}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section className="section">
      <div className="container">
        <div className="section">
          <div className="columns">
            <div className="column is-one-quarter">
              <div className="content">
                <h3 className="has-text-weight-semibold is-size-2">
                  {ourTeamHeading}
                </h3>
              </div>
            </div>
            <div className="column is-three-quarters">
              <ul className="columns is-multiline">
                {avatar.map((item, index) => (
                  <li key={index} className="column is-one-third">
                    <figure className={`content item-` + index}>
                      <Img fluid={item.portrait.childImageSharp.fluid} />
                      <figcaption>{item.caption}</figcaption>
                    </figure>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section className="hero is-clipped is-primary is-bold is-medium">
      <div className="hero-body">
        <div className="container">
          <div className="columns">
            <div className="column is-10 is-offset-1">
              <div className="section">
                <h1 className="title">Secondary Hero</h1>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="hero-background-image hero-home">
        <Img
          fluid={secondaryHeroImage.childImageSharp.fluid}
          alt={secondaryHeroImageAlt}
        />
      </div>
    </section>
    <section className="section">
      <div className="container">
        <div className="section">
          <div className="columns">
            <div className="column is-half">
              <div className="content">
                <Img fluid={ourProcessImage.childImageSharp.fluid} />
              </div>
            </div>
            <div className="column is-half">
              <div className="content">
                <h3 className="has-text-weight-semibold is-size-2">
                  {ourProcessHeading}
                </h3>
                <p>{ourProcessBody}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section className="section">
      <div className="container">
        <div className="section">
          <div className="columns">
            <div className="column is-10 is-offset-1">
              <div className="content">
                <h3 className="has-text-weight-semibold is-size-2">
                  {ourServicesHeading}
                </h3>
                <p>{ourServicesBody}</p>
                <p>{ourServicesList}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section className="hero is-clipped is-primary is-bold is-medium">
      <div className="hero-body">
        <div className="container">
          <div className="columns">
            <div className="column is-10 is-offset-1">
              <div className="section">
                <h1 className="title">Tertiary Hero</h1>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="hero-background-image hero-home">
        <Img
          fluid={tertiaryHeroImage.childImageSharp.fluid}
          alt={tertiaryHeroImageAlt}
        />
      </div>
    </section>
    <section className="section">
      <div className="container">
        <div className="section">
          <div className="columns">
            <div className="column is-10 is-offset-1">
              <div className="content">
                <h3 className="has-text-weight-semibold is-size-2">
                  {projectHeading}
                </h3>
                {/* <div className="tile is-ancestor">
                  {projects.map((item, index) => {
                    let innerTile;

                    if (index === 0 || index === 1) {
                      innerTile = (
                        <div
                          key={index}
                          className={`tile is-` + (index === 0 ? `4` : `6`)}
                        >
                          <figure className={`content item-` + index}>
                            <Img
                              fluid={item.project_image.childImageSharp.fluid}
                              alt={item.project_image_alt}
                            />
                            <figcaption>{item.project_details}</figcaption>
                          </figure>
                        </div>
                      );
                    } else {
                      innerTile = (
                        <div key={index} className="tile is-3">
                          <figure className={`content item-` + index}>
                            <Img
                              fluid={item.project_image.childImageSharp.fluid}
                              alt={item.project_image_alt}
                            />
                            <figcaption>{item.project_details}</figcaption>
                          </figure>
                        </div>
                      );
                    }
                    return innerTile;
                  })}
                </div> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
);

HomePageTemplate.propTypes = {
  title: PropTypes.string,
  metaTitle: PropTypes.string,
  metaDescription: PropTypes.string,
  heroBody: PropTypes.string,
  heroImageAlt: PropTypes.string,
  heroImage: PropTypes.object,
  aboutHeading: PropTypes.string,
  aboutBody: PropTypes.string,
  ourTeamHeading: PropTypes.string,
  avatar: PropTypes.array,
  secondaryHeroImage: PropTypes.object,
  secondaryHeroImageAlt: PropTypes.string,
  ourProcessHeading: PropTypes.string,
  ourProcessBody: PropTypes.string,
  ourProcessImage: PropTypes.object,
  ourServicesHeading: PropTypes.string,
  ourServicesBody: PropTypes.string,
  ourServicesList: PropTypes.string,
  tertiaryHeroImage: PropTypes.object,
  tertiaryHeroImageAlt: PropTypes.string,
  projectHeading: PropTypes.string
  // project1: PropTypes.object,
  // project2: PropTypes.object,
  // project3: PropTypes.object,
};

export default HomePageTemplate;
