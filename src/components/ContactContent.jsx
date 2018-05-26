import React, { Component } from "react";
import { styles } from "../styles/contactContent.css"; // eslint-disable-line no-unused-vars

class ContactContent extends Component {

  constructor(props) {
    super(props);
    this.state = {
      ctCont: "contact-content"
    };
  }

  componentWillMount() {
    const { activeLocation } = this.props;
    activeLocation === "/contact"
      ? this.setState({ ctCont: "contact-content contact-content-active" })
      : this.setState({ ctCont: "contact-content" });
  }

  componentWillReceiveProps(nextProps) {
    const { activeLocation } = nextProps;
    activeLocation === "contact"
      ? this.setState({ ctCont: "contact-content contact-content-active" })
      : this.setState({ ctCont: "contact-content" });
  }

  render() {
    const { ctCont } = this.state;

    return (
      <div className={ctCont}>
        <div className="contact-wrap">
          <div className={`contact-section`}>
            <div className="section-text">
              <div style={{ display: "flex" }}>
                <h1
                  className="section-count"
                  style={{ paddingRight: "1vh", color: "darkgray" }}
                >
                  01
                </h1>
                <h1>email</h1>
              </div>
              <span
                style={{
                  borderTop: "1px solid royalblue",
                  paddingTop: "1.5vh"
                }}
              >
                Always looking forward working on exciting projects.
                Hit me up at
                {" "}<span style={{ color: "royalblue" }}>
                  davit_saginashvili@yahoo.com
                </span>
                {" "}and let's discuss some business!
              </span>
            </div>
          </div>
          <div className={`contact-section`}>
            <div className="section-text">
              <div style={{ display: "flex" }}>
                <h1 style={{ paddingRight: "1vh", color: "darkgray" }}>02</h1>
                <h1>
                  <a
                    style={{ textDecoration: "none", color: "cornflowerblue" }}
                    target="blank"
                    href="https://github.com/Swordys"
                  >
                    github
                  </a>
                </h1>
              </div>
              <span
                style={{ borderTop: "1px solid #03A9F4", paddingTop: "1.5vh" }}
              >
                Check out my GitHub to see the past and ongoing projects.
              </span>
            </div>
          </div>
          <div className={`contact-section`}>
            <div className="section-text">
              <div style={{ display: "flex" }}>
                <h1 style={{ paddingRight: "1vh", color: "darkgray" }}>03</h1>
                <h1>
                  <a
                    style={{ textDecoration: "none", color: "cornflowerblue" }}
                    target="blank"
                    href="https://stackoverflow.com/users/5843204/swordys"
                  >
                    stack
                  </a>
                </h1>
              </div>
              <span
                style={{ borderTop: "1px solid #CDDC39", paddingTop: "1.5vh" }}
              >
                Some of my Stackoverflow answers.
                I try to be active when I can..
              </span>
            </div>
          </div>
          <div className={`contact-section`}>
            <div className="section-text">
              <div style={{ display: "flex" }}>
                <h1 style={{ paddingRight: "1vh", color: "darkgray" }}>04</h1>
                <h1>
                  <a
                    style={{ textDecoration: "none", color: "cornflowerblue" }}
                    target="blank"
                    href="http://codepen.io/swordys"
                  >
                    codepen
                  </a>
                </h1>
              </div>
              <span
                style={{ borderTop: "1px solid #F44336", paddingTop: "1.5vh" }}
              >
                My older and more recent code doodles, mostly for CSS
                experimentation.
              </span>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ContactContent;
