import React, { Component, Fragment } from "react";
import Helmet from "react-helmet";
import "../../assets/sass/styles.sass";
import config from "../../../config";
import NavBar from "../NavBar";
import Footer from "../Footer";

class Layout extends Component {
  constructor(props) {
    super(props);
    this.state = { isActive: false };
    this.toggleNavbar = this.toggleNavbar.bind(this);
  }

  toggleNavbar() {
    this.setState({ isActive: !this.state.isActive });
  }

  render() {
    const pageTitle = this.props.children.props
      ? this.props.children.props.title
      : null;

    return (
      <Fragment>
        <Helmet>
          <title>{config.siteTitle}</title>
          <meta name="description" content={config.siteDescription} />
        </Helmet>
        <NavBar
          isActive={this.state.isActive}
          toggleNavbar={() => this.toggleNavbar()}
          isHome={pageTitle === "Hoyt + Berenyi" ? true : false}
        />
        <Fragment>{this.props.children}</Fragment>
        <Footer />
      </Fragment>
    );
  }
}

export default Layout;
