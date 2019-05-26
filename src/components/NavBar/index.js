import React from "react";
import { Link } from "gatsby";
import AnchorLink from "react-anchor-link-smooth-scroll";
import "../../assets/sass/navBar.sass";
import siteLogo from "../../assets/img/site_logo.png";

const NavBar = ({ toggleNavbar, isActive }) => (
  <nav className="navbar is-fixed-top" aria-label="main navigation">
    <div className="navbar-brand">
      <Link to="/" className="navbar-item">
        <img src={siteLogo} />
      </Link>
      <button
        className={`button navbar-burger ${isActive ? "is-active" : ""}`}
        data-target="navMenu"
        onClick={toggleNavbar}
      >
        <span />
        <span />
        <span />
      </button>
    </div>
    <div className={`navbar-menu ${isActive ? "is-active" : ""}`} id="navMenu">
      <div className="navbar-end">
        <AnchorLink className="navbar-item" href="#home">
          Home
        </AnchorLink>
        <AnchorLink className="navbar-item" href="#about-us">
          About Us
        </AnchorLink>
        <AnchorLink className="navbar-item" href="#services">
          Services
        </AnchorLink>
        <AnchorLink className="navbar-item" href="#projects">
          Projects
        </AnchorLink>
        <AnchorLink className="navbar-item" href="#contact">
          Contact
        </AnchorLink>
      </div>
    </div>
  </nav>
);

export default NavBar;
