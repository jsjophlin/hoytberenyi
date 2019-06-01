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
      maxHeight: !hidden ? "3.5rem" : "2.5rem"
    },
    from: { maxHeight: "2.5rem" }
  });

  return (
    <nav
      className={
        !hidden
          ? "navbar is-fixed-top navbar-at-top is-transparent"
          : "navbar is-fixed-top is-transparent"
      }
      aria-label="main navigation"
    >
      <div className="navbar-brand">
        <Link to="/" className="navbar-item">
          <animated.img src={siteLogo} style={logoProps} />
        </Link>
        <button
          className={`button navbar-burger is-text ${
            isActive ? "is-active" : ""
          }`}
          data-target="navMenu"
          onClick={toggleNavbar}
        >
          <span />
          <span />
          <span />
        </button>
      </div>

      <div
        id="navMenu"
        className={`navbar-menu ${isActive ? "is-active" : ""}`}
      >
        <div className="navbar-end">
          <AnchorLink className="navbar-item" href="#home">
            Home
          </AnchorLink>
          <AnchorLink className="navbar-item" href="#about-us">
            About Us
          </AnchorLink>
          <div className="navbar-item has-dropdown is-hoverable">
            <a className="navbar-link" href="#">
              Services
            </a>
            <div className="navbar-dropdown is-boxed">
              <AnchorLink className="navbar-item" href="#our-processes">
                Our Processes
              </AnchorLink>
              <AnchorLink className="navbar-item" href="#our-services">
                Our Services
              </AnchorLink>
            </div>
          </div>
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
