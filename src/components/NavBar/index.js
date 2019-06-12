import React from "react";
import { Link } from "gatsby";
import { useSpring, animated } from "react-spring";
import AnchorLink from "react-anchor-link-smooth-scroll";
import { useTriggerOnScrolled } from "../../hooks";
import "../../assets/sass/navBar.sass";
import siteLogo from "../../assets/img/site_logo.png";

const NavBar = ({ toggleNavbar, isActive, isHome }) => {
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
          {isHome ? (
            <>
              <AnchorLink className="navbar-item" href="#home">
                Home
              </AnchorLink>
              <AnchorLink className="navbar-item" href="#about-us">
                About Us
              </AnchorLink>
            </>
          ) : (
            <>
              <Link className="navbar-item" to="/#home">
                Home
              </Link>
              <Link className="navbar-item" to="/#about-us">
                About Us
              </Link>
            </>
          )}
          <div className="navbar-item has-dropdown is-hoverable">
            <a className="navbar-link" href="javascript:void(0);">
              Services
            </a>
            <div className="navbar-dropdown is-boxed">
              {isHome ? (
                <>
                  <AnchorLink className="navbar-item" href="#our-processes">
                    Our Processes
                  </AnchorLink>
                  <AnchorLink className="navbar-item" href="#our-services">
                    Our Services
                  </AnchorLink>
                </>
              ) : (
                <>
                  <Link className="navbar-item" to="/#our-processes">
                    Our Processes
                  </Link>
                  <Link className="navbar-item" to="/#our-services">
                    Our Services
                  </Link>
                </>
              )}
            </div>
          </div>
          {isHome ? (
            <>
              <AnchorLink className="navbar-item" href="#projects">
                Projects
              </AnchorLink>
              <AnchorLink className="navbar-item" href="#contact">
                Contact
              </AnchorLink>
            </>
          ) : (
            <>
              <Link className="navbar-item" to="#projects">
                Projects
              </Link>
              <Link className="navbar-item" to="#contact">
                Contact
              </Link>
            </>
          )}
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
