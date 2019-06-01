import React from "react";
import config from "../../../config";
import "../../assets/sass/footer.sass";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="content has-text-centered">
          <p>
            <span className="slice">
              Tel: <a href="tel:1-843-408-3546">{config.sitePhone}</a>
            </span>
            <span className="divider">|</span>
            <span className="slice">{`Fax: ${config.siteFax}`}</span>
            <span className="divider">|</span>
            <span className="slice">{config.siteAddress}</span>
            <span className="divider">|</span>
            <span className="slice">
              Email:{" "}
              <a href={`mailto:${config.siteEmail}`}>{config.siteEmail}</a>
            </span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
