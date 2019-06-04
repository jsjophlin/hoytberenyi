import React from "react";
import Helmet from "react-helmet";
import PropTypes from "prop-types";
import Img from "gatsby-image";
import { Link } from "gatsby";
import ParallaxHero from "../ParallaxHero";
import ProjectTiles from "../ProjectTiles";
import ContactForm from "../ContactForm";
import Carousel from "../Carousel";
import AnimatedEntranceBlock from "../AnimatedEntranceBlock";
import "../../assets/sass/homePageTemplate.sass";

const HomePageTemplate = ({
  metaTitle,
  metaDescription,
  heroCarousel,
  about,
  ourTeam,
  secondaryHero,
  ourProcesses,
  ourServices,
  tertiaryHero,
  projectHeading,
  projects
}) => {
  return (
    <main role="main">
      <Helmet>
        <title>{metaTitle}</title>
        <meta name="description" content={metaDescription} />
      </Helmet>
      <section
        id="home"
        className="hero is-primary is-fullheight primary-hero--section"
      >
        <Carousel
          items={heroCarousel}
          slideWidth={2160}
          slideHeight={1352}
          numItems={heroCarousel.length}
        />
      </section>
      <section id="about-us" className="about-us--section">
        <AnimatedEntranceBlock>
          <div className="container">
            <div className="section">
              <div className="columns">
                <div className="column is-one-third">
                  <div className="content">
                    <h2>{about.about_heading}</h2>
                  </div>
                </div>
                <div className="column is-two-thirds">{about.about_body}</div>
              </div>
            </div>
          </div>
        </AnimatedEntranceBlock>
      </section>
      <section className="our-team--section">
        <div className="container">
          <div className="section">
            <div className="columns">
              <div className="column is-one-third">
                <div className="content">
                  <AnimatedEntranceBlock>
                    <h2>{ourTeam.our_team_heading}</h2>
                  </AnimatedEntranceBlock>
                </div>
              </div>
              <div className="column is-two-thirds">
                <ul className="columns is-multiline avatars">
                  {ourTeam.avatar.map((item, index) => (
                    <li
                      key={index}
                      className="column is-one-third has-text-centered"
                    >
                      <AnimatedEntranceBlock>
                        <figure className={`content item-` + index}>
                          <Img fluid={item.portrait.childImageSharp.fluid} />
                          <figcaption>{item.caption}</figcaption>
                        </figure>
                      </AnimatedEntranceBlock>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="hero is-secondary is-clipped is-bold is-medium secondary-hero--section">
        <ParallaxHero
          image={secondaryHero.secondary_hero_image.childImageSharp.fluid}
          imageAlt={secondaryHero.secondary_hero_image_alt}
        />
      </section>
      <section id="our-processes" className="our-processes--section">
        <AnimatedEntranceBlock>
          <div className="container">
            <div className="section">
              <div className="columns">
                <div className="column is-half">
                  <div className="content">
                    <Img
                      fluid={
                        ourProcesses.our_process_image.childImageSharp.fluid
                      }
                    />
                  </div>
                </div>
                <div className="column is-half">
                  <div className="content">
                    <h2>{ourProcesses.our_process_heading}</h2>
                    <p>{ourProcesses.our_process_body}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </AnimatedEntranceBlock>
      </section>
      <section id="our-services" className="services--section">
        <AnimatedEntranceBlock>
          <div className="container">
            <div className="section">
              <div className="columns">
                <div className="column">
                  <div className="content">
                    <h2>{ourServices.our_services_heading}</h2>
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
        </AnimatedEntranceBlock>
      </section>
      <section className="hero is-secondary is-clipped is-bold is-medium tertiary-hero--section">
        <ParallaxHero
          image={tertiaryHero.tertiary_hero_image.childImageSharp.fluid}
          imageAlt={tertiaryHero.tertiary_hero_image_alt}
        />
      </section>
      <section id="projects" className="projects--section">
        <div className="container">
          <div className="section">
            <div className="columns">
              <div className="column">
                <div className="content">
                  <h2>{projectHeading}</h2>
                  <ProjectTiles
                    project1={projects.project_1}
                    project2={projects.project_2}
                    project3={projects.project_3}
                    project4={projects.project_4}
                  />
                  <p className="mt-3">
                    <Link
                      className="button is-primary"
                      to="/portfolio"
                      alt="More projects"
                    >
                      See more projects
                    </Link>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="contact" className="contact--section">
        <AnimatedEntranceBlock>
          <div className="container">
            <div className="section">
              <div className="columns">
                <div className="column is-one-third">
                  <div className="content">
                    <h2>Contact</h2>
                    <p>
                      To contact us about providing you with any of our services
                      please contact us at{" "}
                      <a href="tel:1-843-408-3546">843.408.3546</a>.
                    </p>
                    <p>Social icons here...</p>
                    <h3>Career Opportunities</h3>
                    <p>
                      Hoyt + Berenyi is a great place to work. Please feel free
                      to forward your resume in confidence at any time.
                    </p>
                  </div>
                </div>
                <div className="column is-two-thirds">
                  <div className="content">
                    <ContactForm
                      title="Contact Title"
                      subtitle="Contact Subtitle"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </AnimatedEntranceBlock>
      </section>
    </main>
  );
};

HomePageTemplate.propTypes = {
  metaTitle: PropTypes.string,
  metaDescription: PropTypes.string,
  heroCarousel: PropTypes.array,
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
