import React, { useRef, useState } from "react";
import Helmet from "react-helmet";
import PropTypes from "prop-types";
import { useInView } from "react-intersection-observer";
import Img from "gatsby-image";
import ParallaxHero from "../ParallaxHero";
import ProjectTiles from "../ProjectTiles";

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
}) => {
  const [menuRef, inView] = useInView({
    /* Optional options */
    threshold: 0
  });

  return (
    <main role="main">
      <Helmet>
        <title>{metaTitle}</title>
        <meta name="description" content={metaDescription} />
      </Helmet>
      <section id="home" className="hero is-primary is-medium is-fullheight">
        <div className="hero-body">
          <div className="container">
            <div className="columns">
              <div className="column">
                <div className="section">
                  <h1 className="title has-text-centered">
                    {hero.hero_content}
                  </h1>
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
      <section id="about-us" className="section">
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
      <section className="hero is-secondary is-clipped is-bold is-medium">
        <ParallaxHero
          image={secondaryHero.secondary_hero_image.childImageSharp.fluid}
          imageAlt={secondaryHero.secondary_hero_image_alt}
        />
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
      <section id="services" className="section">
        <div className="container">
          <div className="section">
            <div className="columns">
              <div className="column">
                <div className="content">
                  <h3 className="has-text-weight-semibold is-size-2">
                    {ourServices.our_services_heading}
                  </h3>
                  <div className="multi-column">
                    <p>{ourServices.our_services_body}</p>
                    <ul>
                      {ourServices.service_list.map((item, index) => (
                        <li key={index}>{item.service}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="hero is-secondary is-clipped is-bold is-medium">
        <ParallaxHero
          image={tertiaryHero.tertiary_hero_image.childImageSharp.fluid}
          imageAlt={tertiaryHero.tertiary_hero_image_alt}
        />
      </section>
      <section id="projects" className="section">
        <div className="container">
          <div className="section">
            <div className="columns">
              <div className="column">
                <div className="content">
                  <h3 className="has-text-weight-semibold is-size-2">
                    {projectHeading}
                  </h3>
                  <ProjectTiles
                    project1={projects.project_1}
                    project2={projects.project_2}
                    project3={projects.project_3}
                    project4={projects.project_4}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="contact" className="section">
        <div className="container">
          <div className="section">
            <div className="columns">
              <div className="column">
                <div className="content">
                  <h3 className="has-text-weight-semibold is-size-2">
                    Contact
                  </h3>
                  <p>Contact section to come...</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

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
