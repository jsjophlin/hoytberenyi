import React from "react";
import PropTypes from "prop-types";
import ProjectsPageTemplate from "../../components/ProjectsPageTemplate";

const ProjectsPagePreview = ({ entry, getAsset }) => {
  return (
    <ProjectsPageTemplate
      title={entry.getIn(["data", "title"])}
      meta_title={entry.getIn(["data", "meta_title"])}
      meta_description={entry.getIn(["data", "meta_description"])}
      projects={{
        heading: entry.getIn(["data", "proects", "heading"]),
        description: entry.getIn(["data", "proects", "description"])
      }}
    />
  );
};

ProjectsPagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func
  }),
  getAsset: PropTypes.func
};

export default ProjectsPagePreview;
