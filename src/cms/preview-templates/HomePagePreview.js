import React from "react";
import PropTypes from "prop-types";
import HomePageTemplate from "../../components/HomePageTemplate";

const HomePagePreview = ({ entry, getAsset }) => {
  const entryHero = entry.getIn(["data", "hero"]);
  const hero = entryHero ? entryHero.toJS() : [];

  const entryAboutSection = entry.getIn(["data", "about_section"]);
  const aboutSection = entryAboutSection ? entryAboutSection.toJS() : [];

  const entryOurTeamSection = entry.getIn(["data", "our_team_section"]);
  const ourTeamSection = entryOurTeamSection ? entryOurTeamSection.toJS() : [];

  const entrySecondaryHero = entry.getIn(["data", "secondary_hero"]);
  const secondaryHero = entrySecondaryHero ? entrySecondaryHero.toJS() : [];

  const entryOurProcessSection = entry.getIn(["data", "our_process_section"]);
  const ourProcessSection = entryOurProcessSection
    ? entryOurProcessSection.toJS()
    : [];

  const entryOurServicesSection = entry.getIn(["data", "our_services_section"]);
  const ourServicesSection = entryOurServicesSection
    ? entryOurServicesSection.toJS()
    : [];

  const entryTertiaryHero = entry.getIn(["data", "tertiary_hero"]);
  const tertiaryHero = entryTertiaryHero ? entryTertiaryHero.toJS() : [];

  const entryProjectSection = entry.getIn(["data", "projects_section"]);
  const projectSection = entryProjectSection ? entryProjectSection.toJS() : [];

  const entryAvatar = entry.getIn(["data", "avatar"]);
  const avatar = entryAvatar ? entryAvatar.toJS() : [];

  const entryProject1 = entry.getIn(["data", "project_1"]);
  const project1 = entryProject1 ? entryProject1.toJS() : [];

  const entryProject2 = entry.getIn(["data", "project_2"]);
  const project2 = entryProject2 ? entryProject2.toJS() : [];

  const entryProject3 = entry.getIn(["data", "project_3"]);
  const project3 = entryProject3 ? entryProject3.toJS() : [];

  const entryProject4 = entry.getIn(["data", "project_4"]);
  const project4 = entryProject4 ? entryProject4.toJS() : [];

  return (
    <HomePageTemplate
      title={entry.getIn(["data", "title"])}
      meta_title={entry.getIn(["data", "meta_title"])}
      meta_description={entry.getIn(["data", "meta_description"])}
      hero={hero}
      aboutSection={aboutSection}
      ourTeamSection={ourTeamSection}
      secondaryHero={secondaryHero}
      ourProcessSection={ourProcessSection}
      ourServicesSection={ourServicesSection}
      ourServicesSection={ourServicesSection}
      tertiaryHero={tertiaryHero}
      projectSection={projectSection}
      avatar={avatar}
      project1={project1}
      project2={project2}
      project3={project3}
      project4={project4}
    />
  );
};

HomePagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func
  }),
  getAsset: PropTypes.func
};

export default HomePagePreview;
