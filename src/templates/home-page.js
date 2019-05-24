import React from "react";
import PropTypes from "prop-types";
import { graphql } from "gatsby";
import HomePageTemplate from "../components/HomePageTemplate";
import Layout from "../components/Layout";

const HomePage = ({ data }) => {
  const { frontmatter } = data.markdownRemark;

  return (
    <Layout>
      <HomePageTemplate
        title={frontmatter.title}
        metaTitle={frontmatter.meta_title}
        metaDescription={frontmatter.meta_description}
        hero={frontmatter.hero}
        about={frontmatter.about_section}
        ourTeam={frontmatter.our_team_section}
        secondaryHero={frontmatter.secondary_hero}
        ourProcesses={frontmatter.our_process_section}
        ourServices={frontmatter.our_services_section}
        tertiaryHero={frontmatter.tertiary_hero}
        projectHeading={frontmatter.projects_section.projects_heading}
        projects={frontmatter.projects_section.projects}
      />
    </Layout>
  );
};

HomePage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object
    })
  })
};

export default HomePage;

export const pageQuery = graphql`
  query IndexPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      frontmatter {
        title
        meta_title
        meta_description
        hero {
          hero_content
          hero_image_alt
          hero_image {
            childImageSharp {
              fluid(maxWidth: 1280, quality: 72) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
        about_section {
          about_heading
          about_body
        }
        our_team_section {
          our_team_heading
          avatar {
            caption
            portrait {
              childImageSharp {
                fluid(maxWidth: 400, quality: 72) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
        secondary_hero {
          secondary_hero_image_alt
          secondary_hero_image {
            childImageSharp {
              fluid(maxWidth: 1280, quality: 72) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
        our_process_section {
          our_process_heading
          our_process_body
          our_process_image {
            childImageSharp {
              fluid(maxWidth: 640, quality: 72) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
        our_services_section {
          our_services_heading
          our_services_body
          our_services_list
        }
        tertiary_hero {
          tertiary_hero_image_alt
          tertiary_hero_image {
            childImageSharp {
              fluid(maxWidth: 1280, quality: 72) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
        projects_section {
          projects_heading
          projects {
            project_1 {
              project_details_1
              project_image_alt_1
              project_image_1 {
                childImageSharp {
                  fluid(maxWidth: 600, quality: 72) {
                    ...GatsbyImageSharpFluid
                  }
                }
              }
            }
            project_2 {
              project_details_2
              project_image_alt_2
              project_image_2 {
                childImageSharp {
                  fluid(maxWidth: 600, quality: 72) {
                    ...GatsbyImageSharpFluid
                  }
                }
              }
            }
            project_3 {
              project_details_3
              project_image_alt_3
              project_image_3 {
                childImageSharp {
                  fluid(maxWidth: 600, quality: 72) {
                    ...GatsbyImageSharpFluid
                  }
                }
              }
            }
            project_4 {
              project_details_4
              project_image_alt_4
              project_image_4 {
                childImageSharp {
                  fluid(maxWidth: 600, quality: 72) {
                    ...GatsbyImageSharpFluid
                  }
                }
              }
            }
          }
        }
      }
    }
  }
`;
