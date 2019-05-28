const meta = {
  // Metadata
  // Finds usage in gatsby-config, i18n, and SEO component
  siteTitle: "Josiah Jophlin",
  siteDescription: "Personal portfolio site",
  siteHeadline: "Web Developer",
  siteTitleAlt: "JJ",
  siteShortName: "josiahjophlin",
  siteUrl: "http://localhost:8000" // No trailing slash!
};

const social = {
  siteLogo: `${meta.siteUrl}/social/avatar.png`,
  siteLogoSmall: `${meta.siteUrl}/social/avatar_small.png`,
  siteBanner: `${meta.siteUrl}/social/banner_`, // Locale ending + filetype gets added in SEO component
  siteBannerWidth: "776",
  siteBannerHeight: "382",
  twitter: "@jsjophlin"
};

const website = {
  ...meta,
  ...social,

  // Manifest
  themeColor: "#3498DB",
  backgroundColor: "#2e3246"
};

module.exports = website;
