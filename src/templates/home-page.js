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
        heroBody={frontmatter.hero.hero_content}
        heroImageAlt={frontmatter.hero.hero_image_alt}
        heroImage={frontmatter.hero.hero_image}
        aboutHeading={frontmatter.about_section.about_heading}
        aboutBody={frontmatter.about_section.about_body}
        ourTeamHeading={frontmatter.our_team_section.our_team_heading}
        avatar={frontmatter.our_team_section.avatar}
        secondaryHeroImage={frontmatter.secondary_hero.secondary_hero_image}
        secondaryHeroImageAlt={
          frontmatter.secondary_hero.secondary_hero_image_alt
        }
        ourProcessHeading={frontmatter.our_process_section.our_process_heading}
        ourProcessBody={frontmatter.our_process_section.our_process_body}
        ourProcessImage={frontmatter.our_process_section.our_process_image}
        ourServicesHeading={
          frontmatter.our_services_section.our_services_heading
        }
        ourServicesBody={frontmatter.our_services_section.our_services_body}
        ourServicesList={frontmatter.our_services_section.our_services_list}
        tertiaryHeroImage={frontmatter.tertiary_hero.tertiary_hero_image}
        tertiaryHeroImageAlt={frontmatter.tertiary_hero.tertiary_hero_image_alt}
        projectHeading={frontmatter.projects_section.projects_heading}
        // projects={frontmatter.projects_section.projects}
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
        }
      }
    }
  }
`;
