import React from "react";
import Img from "gatsby-image";

const ProjectTiles = ({ project1, project2, project3, project4 }) => {
  return (
    <div className="project">
      <div className="tile is-ancestor">
        <div className="tile is-vertical is-parent">
          <div className="tile is-child">
            <Img
              fluid={project1.project_image_1.childImageSharp.fluid}
              alt={project1.project_image_alt_1}
            />
            <p>{project1.project_details_1}</p>
          </div>
          <div className="tile is-child">
            <Img
              fluid={project2.project_image_2.childImageSharp.fluid}
              alt={project2.project_image_alt_2}
            />
            <p>{project2.project_details_2}</p>
          </div>
        </div>
        <div className="tile is-vertical is-parent">
          <div className="tile is-child">
            <Img
              fluid={project3.project_image_3.childImageSharp.fluid}
              alt={project3.project_image_alt_3}
            />
            <p>{project3.project_details_3}</p>
          </div>
          <div className="tile is-child">
            <Img
              fluid={project4.project_image_4.childImageSharp.fluid}
              alt={project4.project_image_alt_4}
            />
            <p>{project4.project_details_4}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectTiles;
