import React from "react";
import PropTypes from "prop-types";
import { graphql } from "gatsby";
import ProjectsPageTemplate from "../components/ProjectsPageTemplate";
import Layout from "../components/Layout";

const ProjectsPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark;

  return (
    <Layout>
      <ProjectsPageTemplate
        title={frontmatter.title}
        meta_title={frontmatter.meta_title}
        meta_description={frontmatter.meta_description}
        projects={frontmatter.projects}
      />
    </Layout>
  );
};

ProjectsPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object
    })
  })
};

export default ProjectsPage;

export const projectsPageQuery = graphql`
  query ProjectsPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      frontmatter {
        title
        meta_title
        meta_description
        projects {
          heading
          description
        }
      }
    }
  }
`;
