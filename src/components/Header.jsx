import { styles } from "../styles/header.css"; // eslint-disable-line no-unused-vars
import React, { PropTypes } from "react";
import { Link } from "react-router";
import { connect } from "react-redux";
import { toggleSlideMenu } from "../actions/Actions.jsx";
import svgImg from "../styles/svg/logo.svg";

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      linkWrap: "",
      hideClassAbout: "",
      hideClassProjects: "",
      hideClassSkills: "",
      hideClassContact: "",
      backArr: ""
    };
    this.handleBackToMenu = this.handleBackToMenu.bind(this);
    this.handleBackToStart = this.handleBackToStart.bind(this);
  }

  componentWillMount() {
    const hideClass = "hide-component";
    const { activeLocation, toggleSlideMenu } = this.props;

    if (activeLocation !== "/") {
      toggleSlideMenu(true);
    }

    if (activeLocation === "/about") {
      this.setState({
        hideClassContact: hideClass,
        hideClassProjects: hideClass,
        hideClassSkills: hideClass,
        hideClassAbout: "activeAbout",
        backArr: "back-showing-a"
      });
    }

    if (activeLocation === "/projects") {
      this.setState({
        hideClassContact: hideClass,
        hideClassAbout: hideClass,
        hideClassSkills: hideClass,
        hideClassProjects: "activeProjects",
        backArr: "back-showing-b"
      });
    }

    if (activeLocation === "/skills") {
      this.setState({
        hideClassContact: hideClass,
        hideClassAbout: hideClass,
        hideClassProjects: hideClass,
        hideClassSkills: "activeSkills",
        linkWrap: "reverseFlex",
        backArr: "back-showing-c"
      });
    }

    if (activeLocation === "/contact") {
      this.setState({
        hideClassSkills: hideClass,
        hideClassAbout: hideClass,
        hideClassProjects: hideClass,
        hideClassContact: "activeContact",
        linkWrap: "reverseFlex",
        backArr: "back-showing-d"
      });
    }
  }

  componentWillReceiveProps(nextProps) {
    const hideClass = "hide-component";
    const { activeLocation } = nextProps;
    activeLocation === "/" && this.handleBackToMenu();

    switch (activeLocation) {
      case "about":
        this.setState({
          hideClassContact: hideClass,
          hideClassProjects: hideClass,
          hideClassSkills: hideClass,
          hideClassAbout: "activeAbout",
          backArr: "back-showing-a"
        });
        return;
      case "projects":
        this.setState({
          hideClassContact: hideClass,
          hideClassAbout: hideClass,
          hideClassSkills: hideClass,
          hideClassProjects: "activeProjects",
          backArr: "back-showing-b"
        });
        return;
      case "skills":
        this.setState({
          hideClassContact: hideClass,
          hideClassAbout: hideClass,
          hideClassProjects: hideClass,
          hideClassSkills: "activeSkills",
          linkWrap: "reverseFlex",
          backArr: "back-showing-c"
        });
        return;
      case "contact":
        this.setState({
          hideClassSkills: hideClass,
          hideClassAbout: hideClass,
          hideClassProjects: hideClass,
          hideClassContact: "activeContact",
          linkWrap: "reverseFlex",
          backArr: "back-showing-d"
        });
        return;
    }
  }

  handleBackToMenu() {
    this.setState({
      hideClassContact: "",
      hideClassProjects: "",
      hideClassSkills: "",
      hideClassAbout: "",
      backArr: ""
    });
  }

  handleBackToStart() {
    const { toggleSlideMenu, routeRemote } = this.props;
    routeRemote.push("/");
    toggleSlideMenu(false);
    this.setState({
      clicked: false
    });
  }

  render() {
    let sliderClass = "";
    let activeLink = "";
    let activeLogo = "";

    const { sliderState, routeRemote } = this.props;
    const {
      hideClassAbout,
      hideClassProjects,
      hideClassSkills,
      hideClassContact,
      backArr,
      linkWrap
    } = this.state;

    if (sliderState) {
      sliderClass = "link-component-visable";
      activeLink = "linkTextActive";
    }

    backArr ? (activeLogo = "logoActive") : "";

    return (
      <div className="header-wrap">
        <div className={`link-wrap ${linkWrap}`}>
          <div
            className={`link-component ${hideClassAbout} ${sliderClass}`}
            id="about"
          >
            <div className="list-num">
              <h1 className={backArr === "back-showing-a" && "listNumHide"}>
                01
              </h1>
              <div
                onClick={() => routeRemote.push("/")}
                className={`backBtn ${hideClassAbout === "activeAbout" &&
                  backArr}`}
              >
                <h1>{"<"}</h1>
              </div>
            </div>
            <Link className={activeLink} id="about" to="about">
              about
            </Link>
            <div
              onClick={this.handleBackToStart}
              className={`logo ${activeLogo}`}
            >
              <img src={svgImg} alt="logo" className="logo-main" />
            </div>
          </div>
          <div
            className={`link-component ${hideClassProjects} ${sliderClass}`}
            id="projects"
          >
            <div className="list-num">
              <h1 className={backArr === "back-showing-b" && "listNumHide"}>
                02
              </h1>
              <div
                onClick={() => routeRemote.push("/")}
                className={`backBtn ${hideClassProjects === "activeProjects" &&
                  backArr}`}
              >
                <h1>{"<"}</h1>
              </div>
            </div>
            <Link className={activeLink} id="projects" to="projects">
              projects
            </Link>
            <div
              onClick={this.handleBackToStart}
              className={`logo ${activeLogo}`}
            >
              <img src={svgImg} alt="logo" className="logo-main" />
            </div>
          </div>
          <div
            className={`link-component ${hideClassSkills} ${sliderClass}`}
            style={{ transformOrigin: "bottom left" }}
            id="skills"
          >
            <div className="list-num">
              <h1 className={backArr === "back-showing-c" && "listNumHide"}>
                03
              </h1>
              <div
                onClick={() => routeRemote.push("/")}
                className={`backBtn ${hideClassSkills === "activeSkills" &&
                  backArr}`}
              >
                <h1>{"<"}</h1>
              </div>
            </div>
            <Link className={activeLink} id="skills" to="skills">
              skills
            </Link>
            <div
              onClick={this.handleBackToStart}
              className={`logo ${activeLogo}`}
            >
              <img src={svgImg} alt="logo" className="logo-main" />
            </div>
          </div>
          <div
            className={`link-component ${hideClassContact} ${sliderClass}`}
            style={{ transformOrigin: "bottom left" }}
            id="contact"
          >
            <div className="list-num">
              <h1 className={backArr === "back-showing-d" && "listNumHide"}>
                04
              </h1>
              <div
                onClick={() => routeRemote.push("/")}
                className={`backBtn ${hideClassContact === "activeContact" &&
                  backArr}`}
              >
                <h1>{"<"}</h1>
              </div>
            </div>
            <Link className={activeLink} id="contact" to="contact">
              contact
            </Link>
            <div
              onClick={this.handleBackToStart}
              className={`logo ${activeLogo}`}
            >
              <img src={svgImg} alt="logo" className="logo-main" />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

Header.propTypes = {
  activeLocation: PropTypes.string.isRequired,
  sliderState: PropTypes.bool,
  toggleSlideMenu: PropTypes.func.isRequired,
  routeRemote: PropTypes.object
};

const mapStateToProps = state => ({
  sliderState: state.slideState
});

const mapDispatchToProps = dispatch => ({
  toggleSlideMenu: value => {
    dispatch(toggleSlideMenu(value));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);
