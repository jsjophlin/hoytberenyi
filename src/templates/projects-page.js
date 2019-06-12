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
        projects={frontmatter.project_section}
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
        project_section {
          heading
          description
          project_image {
            image {
              childImageSharp {
                fluid(maxWidth: 1075, quality: 72) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
            image_alt
          }
        }
      }
    }
  }
`;
