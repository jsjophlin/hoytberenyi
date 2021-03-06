import React, { Component } from "react";
import { navigate } from "gatsby-link";
import PropTypes from "prop-types";

const encode = data => {
  return Object.keys(data)
    .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
    .join("&");
};

class ContactForm extends Component {
  constructor(props) {
    super(props);
    this.state = { isValidated: false };
  }

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = e => {
    e.preventDefault();
    const form = e.target;
    // eslint-disable-next-line
    fetch("/?no-cache=1", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({
        "form-name": form.getAttribute("name"),
        ...this.state
      })
    })
      .then(() => navigate(form.getAttribute("action")))
      // eslint-disable-next-line
      .catch(error => alert(error));
  };

  render() {
    return (
      <div>
        <section className="section">
          <div className="container">
            <form
              name="contact"
              method="post"
              action="/contact/success"
              encType="application/x-www-form-urlencoded"
              data-netlify="true"
              data-netlify-honeypot="bot-field"
              onSubmit={this.handleSubmit}
            >
              <input type="hidden" name="form-name" value="contact" />
              <div hidden>
                <label>
                  Don’t fill this out:{" "}
                  <input name="bot-field" onChange={this.handleChange} />
                </label>
              </div>
              <div className="field">
                <label className="label">Name</label>
                <div className="control">
                  <input
                    className="input"
                    type="text"
                    placeholder="Full Name"
                    name="name"
                    id="name"
                    onChange={this.handleChange}
                  />
                </div>
              </div>

              <div className="field">
                <label className="label">Email</label>
                <div className="control">
                  <input
                    className="input"
                    type="email"
                    placeholder="Email"
                    name="email"
                    id="email"
                    onChange={this.handleChange}
                  />
                </div>
              </div>

              <div className="field">
                <label className="label">Message</label>
                <div className="control">
                  <textarea
                    className="textarea"
                    placeholder="Message"
                    name="message"
                    id="message"
                    rows="6"
                    onChange={this.handleChange}
                  />
                </div>
              </div>

              <div className="field is-grouped">
                <div className="control">
                  <button
                    className="button is-primary"
                    type="submit"
                    disabled={
                      !this.state.name ||
                      !this.state.email ||
                      !this.state.message
                    }
                  >
                    Submit
                  </button>
                </div>
                <div className="control">
                  <button className="button is-text" type="reset">
                    Cancel
                  </button>
                </div>
              </div>
            </form>
          </div>
        </section>
      </div>
    );
  }
}

ContactForm.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string,
  meta_title: PropTypes.string,
  meta_description: PropTypes.string
};

export default ContactForm;
