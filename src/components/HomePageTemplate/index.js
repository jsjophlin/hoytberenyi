import React from "react";
import Helmet from "react-helmet";
import PropTypes from "prop-types";
import Img from "gatsby-image";

const HomePageTemplate = ({
  title,
  metaTitle,
  metaDescription,
  hero,
  about,
  ourTeam,
  secondaryHero,
  ourProcesses,
  ourServices,
  tertiaryHero,
  projectHeading,
  projects
}) => (
  <>
    <Helmet>
      <title>{metaTitle}</title>
      <meta name="description" content={metaDescription} />
    </Helmet>
    <section className="hero is-primary is-bold is-medium is-fullheight-with-navbar">
      <div className="hero-body">
        <div className="container">
          <div className="columns">
            <div className="column">
              <div className="section">
                <h1 className="title">{hero.hero_content}</h1>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="hero-background-image hero-home">
        <Img
          fluid={hero.hero_image.childImageSharp.fluid}
          alt={hero.hero_image_alt}
        />
      </div>
    </section>
    <section className="section">
      <div className="container">
        <div className="section">
          <div className="columns">
            <div className="column is-one-third">
              <div className="content">
                <h3 className="has-text-weight-semibold is-size-2">
                  {about.about_heading}
                </h3>
              </div>
            </div>
            <div className="column is-two-thirds">
              <p>{about.about_body}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section className="section">
      <div className="container">
        <div className="section">
          <div className="columns">
            <div className="column is-one-third">
              <div className="content">
                <h3 className="has-text-weight-semibold is-size-2">
                  {ourTeam.our_team_heading}
                </h3>
              </div>
            </div>
            <div className="column is-two-thirds">
              <ul className="columns is-multiline">
                {ourTeam.avatar.map((item, index) => (
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
    <section className="hero is-clipped is-primary is-bold is-medium hero--secondary">
      <div className="hero-background-image hero-home">
        <Img
          fluid={secondaryHero.secondary_hero_image.childImageSharp.fluid}
          alt={secondaryHero.secondary_hero_image_alt}
        />
      </div>
    </section>
    <section className="section">
      <div className="container">
        <div className="section">
          <div className="columns">
            <div className="column is-half">
              <div className="content">
                <Img
                  fluid={ourProcesses.our_process_image.childImageSharp.fluid}
                />
              </div>
            </div>
            <div className="column is-half">
              <div className="content">
                <h3 className="has-text-weight-semibold is-size-2">
                  {ourProcesses.our_process_heading}
                </h3>
                <p>{ourProcesses.our_process_body}</p>
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
            <div className="column">
              <div className="content">
                <h3 className="has-text-weight-semibold is-size-2">
                  {ourServices.our_services_heading}
                </h3>
                <p>{ourServices.our_services_body}</p>
                <p>{ourServices.our_services_list}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section className="hero is-clipped is-primary is-bold is-medium hero--secondary">
      <div className="hero-background-image hero-home">
        <Img
          fluid={tertiaryHero.tertiary_hero_image.childImageSharp.fluid}
          alt={tertiaryHero.tertiary_hero_image_alt}
        />
      </div>
    </section>
    <section className="section">
      <div className="container">
        <div className="section">
          <div className="columns">
            <div className="column">
              <div className="content">
                <h3 className="has-text-weight-semibold is-size-2">
                  {projectHeading}
                </h3>
                <div className="tile is-ancestor">
                  <div className="tile is-vertical">
                    <div className="tile is-child">
                      <Img
                        fluid={
                          projects.project_1.project_image_1.childImageSharp
                            .fluid
                        }
                        alt={projects.project_1.project_image_alt_1}
                      />
                      <p>{projects.project_1.project_details_1}</p>
                    </div>
                    <div className="tile is-child">
                      <Img
                        fluid={
                          projects.project_2.project_image_2.childImageSharp
                            .fluid
                        }
                        alt={projects.project_2.project_image_alt_2}
                      />
                      <p>{projects.project_2.project_details_2}</p>
                    </div>
                  </div>
                  <div className="tile is-vertical">
                    <div className="tile is-child">
                      <Img
                        fluid={
                          projects.project_3.project_image_3.childImageSharp
                            .fluid
                        }
                        alt={projects.project_3.project_image_alt_3}
                      />
                      <p>{projects.project_3.project_details_3}</p>
                    </div>
                    <div className="tile is-child">
                      <Img
                        fluid={
                          projects.project_4.project_image_4.childImageSharp
                            .fluid
                        }
                        alt={projects.project_4.project_image_alt_4}
                      />
                      <p>{projects.project_4.project_details_4}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </>
);

HomePageTemplate.propTypes = {
  title: PropTypes.string,
  metaTitle: PropTypes.string,
  metaDescription: PropTypes.string,
  hero: PropTypes.object,
  about: PropTypes.object,
  ourTeam: PropTypes.object,
  secondaryHero: PropTypes.object,
  ourProcesses: PropTypes.object,
  ourServices: PropTypes.object,
  tertiaryHero: PropTypes.object,
  projectHeading: PropTypes.string,
  projects: PropTypes.object
};

export default HomePageTemplate;
