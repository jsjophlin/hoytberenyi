import React from "react";
import CardReveal from "../CardReveal";

const ProjectTiles = ({ project1, project2, project3, project4 }) => {
  return (
    <div className="project">
      <div className="tile is-ancestor">
        <div className="tile is-vertical is-parent">
          <div className="tile is-child">
            <CardReveal
              image={project1.project_image_1.childImageSharp.fluid}
              alt={project1.project_image_alt_1}
              details={project1.project_details_1}
            />
          </div>
          <div className="tile is-child">
            <CardReveal
              image={project2.project_image_2.childImageSharp.fluid}
              alt={project2.project_image_alt_2}
              details={project2.project_details_2}
            />
          </div>
        </div>
        <div className="tile is-vertical is-parent">
          <div className="tile is-child">
            <CardReveal
              image={project3.project_image_3.childImageSharp.fluid}
              alt={project3.project_image_alt_3}
              details={project3.project_details_3}
            />
          </div>

          <div className="tile is-child">
            <CardReveal
              image={project4.project_image_4.childImageSharp.fluid}
              alt={project4.project_image_alt_4}
              details={project4.project_details_4}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectTiles;
