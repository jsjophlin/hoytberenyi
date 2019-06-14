import CMS from "netlify-cms";
import "../assets/sass/styles.sass";
import HomePagePreview from "./preview-templates/HomePagePreview";
import ArticlePreview from "./preview-templates/ArticlePreview";
import ProjectsPagePreview from "./preview-templates/ProjectsPagePreview";

CMS.registerPreviewStyle("/styles.css");
CMS.registerPreviewTemplate("home", HomePagePreview);
CMS.registerPreviewTemplate("our_projects", ProjectsPagePreview);
CMS.registerPreviewTemplate("projects", ArticlePreview);
