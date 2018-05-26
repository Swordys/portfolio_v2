import React, { Component } from "react";
import { connect } from "react-redux";
import svgImg from "../styles/svg/logo-color.svg";

class LandingPage extends Component {

  constructor(props) {
    super(props);
    this.state = {
      pageActive: "main-wrap-text"
    };
  }

  componentWillMount() {
    const { activeLocation } = this.props;
    activeLocation !== "/" &&
      this.setState({ pageActive: "main-wrap-text landing-active" });
  }

  componentWillReceiveProps(nextProps) {
    const { activeLocation, sliderState } = nextProps;
    activeLocation === "/" && !sliderState
      ? this.setState({ pageActive: "main-wrap-text" })
      : this.setState({ pageActive: "main-wrap-text landing-active" });
  }

  render() {
    const { pageActive } = this.state;
    return (
      <div className={pageActive}>
        <div className={`logo-color`}>
          <img src={svgImg} alt="logo" className="logo-main" />
        </div>
        <div className="main-wrap-about">
          <h1 className="main-wrap-about-name">
            {"<"} davit saginashvili {"/>"}
          </h1>
          <h1 className="main-wrap-about-text">
            css perfectionist,<br />react enthusiast, <br /> front-end
            developer.
          </h1>
          <h2 className="main-wrap-about-status">+currently freelancing</h2>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  sliderState: state.slideState
});

export default connect(mapStateToProps)(LandingPage);
