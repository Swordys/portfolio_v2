import { styles } from '../styles/header.css'; // eslint-disable-line no-unused-vars
import React, { PropTypes } from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import * as Actions from '../actions/Actions.jsx';
import glitchIt from '../constants/textGlitch.jsx';


class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      about: 'about',
      projects: 'projects',
      skills: 'skills',
      contact: 'contact',
      clicked: false,
      linkWrap: '',
      hideClassAbout: '',
      hideClassProjects: '',
      hideClassSkills: '',
      hideClassContact: '',
    };
    this.glitchDaText = this.glitchDaText.bind(this);
    this.handleWordGlitch = this.handleWordGlitch.bind(this);
    this.handleToggle = this.handleToggle.bind(this);
    this.handleBackToMenu = this.handleBackToMenu.bind(this);
  }

  componentWillMount() {
    const hideClass = 'hide-component';
    const {
      locationState,
      toggleAbout,
      toggleProject,
      toggleSkills,
      toggleContact,
    } = this.props;


    if (locationState !== '/') {
      this.setState({
        clicked: true,
      });
    }

    if (locationState === '/about') {
      this.setState({
        hideClassContact: hideClass,
        hideClassProjects: hideClass,
        hideClassSkills: hideClass,
        hideClassAbout: 'activeAbout',
      });
      toggleAbout(true);
      toggleProject(false);
      toggleSkills(false);
      toggleContact(false);
    }

    if (locationState === '/projects') {
      this.setState({
        hideClassContact: hideClass,
        hideClassAbout: hideClass,
        hideClassSkills: hideClass,
        hideClassProjects: 'activeProjects',
      });
      toggleProject(true);
      toggleSkills(false);
      toggleContact(false);
      toggleAbout(false);
    }

    if (locationState === '/skills') {
      this.setState({
        hideClassContact: hideClass,
        hideClassAbout: hideClass,
        hideClassProjects: hideClass,
        hideClassSkills: 'activeSkills',
        linkWrap: 'reverseFlex',
      });
      toggleSkills(true);
      toggleContact(false);
      toggleAbout(false);
      toggleProject(false);
    }

    if (locationState === '/contact') {
      this.setState({
        hideClassSkills: hideClass,
        hideClassAbout: hideClass,
        hideClassProjects: hideClass,
        hideClassContact: 'activeContact',
        linkWrap: 'reverseFlex',
      });
      toggleContact(true);
      toggleAbout(false);
      toggleProject(false);
      toggleSkills(false);
    }
  }

  // TURN OFF FOR MOBILE DEVICES
  handleWordGlitch(e) {
    if (!this.state.clicked) {
      const value = e.target.id;
      const words = glitchIt(value);
      this.glitchDaText(words, 120, value);
    }
  }

  glitchDaText(retWords, speed, value) {
    const that = this;
    (function timer() {
      for (let i = 0; i < retWords.length; i++) {
        setTimeout(() => {
          value === 'about' ? that.setState({ about: retWords[i] }) : 'about';
          value === 'projects' ? that.setState({ projects: retWords[i] }) : 'projects';
          value === 'skills' ? that.setState({ skills: retWords[i] }) : 'skills';
          value === 'contact' ? that.setState({ contact: retWords[i] }) : 'contact';
        }, i * speed);
      }
    })();
  }

  handleToggle(e) {
    const value = e.target.id;
    Actions.currentLocationState(value);
    const hideClass = 'hide-component';
    const {
      toggleAbout,
      toggleProject,
      toggleSkills,
      toggleContact,
    } = this.props;

    if (value === 'about') {
      this.setState({
        hideClassContact: hideClass,
        hideClassProjects: hideClass,
        hideClassSkills: hideClass,
        hideClassAbout: 'activeAbout',
        clicked: true,
      });
      toggleAbout(true);
    }

    if (value === 'projects') {
      this.setState({
        hideClassContact: hideClass,
        hideClassAbout: hideClass,
        hideClassSkills: hideClass,
        hideClassProjects: 'activeProjects',
        clicked: true,
      });
      toggleProject(true);
    }

    if (value === 'skills') {
      this.setState({
        hideClassContact: hideClass,
        hideClassAbout: hideClass,
        hideClassProjects: hideClass,
        hideClassSkills: 'activeSkills',
        linkWrap: 'reverseFlex',
        clicked: true,
      });
      toggleSkills(true);
    }

    if (value === 'contact') {
      this.setState({
        hideClassSkills: hideClass,
        hideClassAbout: hideClass,
        hideClassProjects: hideClass,
        hideClassContact: 'activeContact',
        linkWrap: 'reverseFlex',
        clicked: true,
      });
      toggleContact(true);
    }

  }

  handleBackToMenu() {
    const {
      toggleAbout,
      toggleProject,
      toggleSkills,
      toggleContact,
    } = this.props;

    toggleContact(false);
    toggleAbout(false);
    toggleProject(false);
    toggleSkills(false);
    this.setState({
      hideClassContact: '',
      hideClassProjects: '',
      hideClassSkills: '',
      hideClassAbout: '',
      clicked: false,
    });
  }

  render() {
    let showLogo = '';
    let sliderClass = '';
    let animationStart = {};
    let animationStartLogo = {};
    const {
      hideClassAbout,
      hideClassProjects,
      hideClassSkills,
      hideClassContact,
      linkWrap,
      clicked,
    } = this.state;


    const { sliderState } = this.props;
    if (sliderState) {
      sliderClass = 'link-component-visable';
      animationStart = {
        transform: "translateY(0) rotate3d(1, 0, 0, 0)",
        opacity: "1",
      };
    }
    if (clicked) {
      animationStart = {
        transform: "translateY(0) rotate3d(1, 0, 0, 0)",
        opacity: "1",
      };
      animationStartLogo = {
        opacity: "1",
        transform: "translate3d(100vw, -50%, 0) rotate(0deg)",
        transitionDelay: '400ms',
      };
      sliderClass = 'link-component-visable';
    }

    return (
      <div className="header-wrap">
        <div className={`link-wrap ${linkWrap}`}>
          <div
            className={`link-component ${hideClassAbout} ${sliderClass}`}
            id="about"
          >
            <Link
              //ANIMATION STYLE CAUSING LAG FIX IT
              style={animationStart}
              id="about"
              onClick={this.handleToggle}
              to="about"
              href="#"
            >
              {this.state.about}
            </Link>
            <div onClick={() => this.handleBackToMenu()} style={animationStartLogo} className={`logo`}>
              <img src="../styles/svg/logo.svg" alt="logo" className="logo-main" />
            </div>
          </div>
          <div
            className={`link-component ${hideClassProjects} ${sliderClass}`}
            id="projects"
          >
            <Link
              style={animationStart}
              id="projects"
              onClick={this.handleToggle}
              to="projects"
              href="#"
            >
              {this.state.projects}
            </Link>
            <div onClick={() => this.handleBackToMenu()} style={animationStartLogo} className={`logo ${showLogo}`}>
              <img src="../styles/svg/logo.svg" alt="logo" className="logo-main" />
            </div>
          </div>
          <div
            className={`link-component ${hideClassSkills} ${sliderClass}`}
            style={{ transformOrigin: 'bottom left' }}
            id="skills"
          >
            <Link
              style={animationStart}
              id="skills"
              onClick={this.handleToggle}
              to="skills"
              href="#"
            >
              {this.state.skills}
            </Link>
            <div onClick={() => this.handleBackToMenu()} style={animationStartLogo} className={`logo ${showLogo}`}>
              <img src="../styles/svg/logo.svg" alt="logo" className="logo-main" />
            </div>
          </div>
          <div
            className={`link-component ${hideClassContact} ${sliderClass}`}
            style={{ transformOrigin: 'bottom left' }}
            id="contact"
          >
            <Link
              style={animationStart}
              id="contact"
              onClick={this.handleToggle}
              to="contact"
              href="#"
            >
              {this.state.contact}
            </Link>
            <div onClick={() => this.handleBackToMenu()} style={animationStartLogo} className={`logo ${showLogo}`}>
              <img src="../styles/svg/logo.svg" alt="logo" className="logo-main" />
            </div>
          </div>
        </div>
      </div >
    );
  }
}


Header.propTypes = {
  toggleAbout: PropTypes.func,
  toggleProject: PropTypes.func,
  toggleSkills: PropTypes.func,
  toggleContact: PropTypes.func,
  sliderState: PropTypes.bool,
  locationState: PropTypes.string,
};

const mapStateToProps = (state) => ({
  locationState: state.locationState,
  sliderState: state.slideState,
  routes: state.routing
});

const mapDispatchToProps = dispatch => ({
  toggleAbout: (value) => {
    dispatch(Actions.toggleAbout(value));
  },
  toggleProject: (value) => {
    dispatch(Actions.toggleProject(value));
  },
  toggleSkills: (value) => {
    dispatch(Actions.toggleSkills(value));
  },
  toggleContact: (value) => {
    dispatch(Actions.toggleContact(value));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);
