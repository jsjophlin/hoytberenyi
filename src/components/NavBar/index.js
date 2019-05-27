import React from "react";
import { Link } from "gatsby";
import { useSpring, animated } from "react-spring";
import AnchorLink from "react-anchor-link-smooth-scroll";
import { useTriggerOnScrolled } from "../../hooks";
import "../../assets/sass/navBar.sass";
import siteLogo from "../../assets/img/site_logo.png";

const NavBar = ({ toggleNavbar, isActive }) => {
  const hidden = useTriggerOnScrolled();

  const logoProps = useSpring({
    to: {
      maxHeight: !hidden ? "5rem" : "2.5rem"
    },
    from: { maxHeight: "2.5rem" }
  });

  return (
    <nav
      className={
        !hidden ? "navbar is-fixed-top navbar-at-top" : "navbar is-fixed-top"
      }
      aria-label="main navigation"
    >
      <div className="navbar-brand">
        <Link to="/" className="navbar-item">
          <animated.img src={siteLogo} style={logoProps} />
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
      <div
        className={`navbar-menu ${isActive ? "is-active" : ""}`}
        id="navMenu"
      >
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
};

export default NavBar;
