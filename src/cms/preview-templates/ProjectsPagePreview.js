import React from "react";
import PropTypes from "prop-types";
import ProjectsPageTemplate from "../../components/ProjectsPageTemplate";

const ProjectsPagePreview = ({ entry, getAsset }) => {
  const entryProjectSection = entry.getIn(["data", "project_section"]);
  const projectSection = entryProjectSection ? entryProjectSection.toJS() : [];

  return (
    <ProjectsPageTemplate
      title={entry.getIn(["data", "title"])}
      meta_title={entry.getIn(["data", "meta_title"])}
      meta_description={entry.getIn(["data", "meta_description"])}
      projects={projectSection}
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
