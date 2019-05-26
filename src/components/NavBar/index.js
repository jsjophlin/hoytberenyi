import React from "react";
import { Link } from "gatsby";
import "../../assets/sass/navBar.sass";
import siteLogo from "../../assets/img/site_logo.png";

const NavBar = ({ toggleNavbar, isActive }) => (
  <nav className="navbar is-fixed-top" aria-label="main navigation">
    <div className="inner is-flex">
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
      <div
        className={`navbar-menu ${isActive ? "is-active" : ""}`}
        id="navMenu"
      >
        <div className="navbar-end">
          <Link className="navbar-item" to="/pricing">
            Pricing
          </Link>
          <Link className="navbar-item" to="/portfolio">
            Projects
          </Link>
          <div className="navbar-item">
            <div className="field is-grouped">
              <p className="control">
                <Link className="button is-primary is-outlined" to="/contact">
                  Contact Us
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </nav>
);

export default NavBar;
