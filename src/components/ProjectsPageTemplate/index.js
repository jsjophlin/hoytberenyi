import React from "react";
import Helmet from "react-helmet";
import PropTypes from "prop-types";

const ProjectsPageTemplate = ({
  title,
  meta_title,
  meta_description,
  projects
}) => (
  <div>
    <Helmet>
      <title>{meta_title}</title>
      <meta name="description" content={meta_description} />
    </Helmet>
    <section className="hero is-primary is-bold is-medium">
      <div className="hero-body">
        <div className="container">
          <div className="columns">
            <div className="column is-10 is-offset-1">
              <div className="section">
                <h1 className="title">{title}</h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section className="section section--gradient">
      <div className="container">
        <div className="section">
          <div className="columns">
            <div className="column is-10 is-offset-1">
              <div className="content">
                {projects.map((project, index) => (
                  <div key={index} className="project-item">
                    <h2 className="has-text-weight-semibold is-size-2">
                      {project.heading}
                    </h2>
                    <p className="is-size-5">{project.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
);

ProjectsPageTemplate.propTypes = {
  title: PropTypes.string,
  meta_title: PropTypes.string,
  meta_description: PropTypes.string,
  projects: PropTypes.array
};

export default ProjectsPageTemplate;
