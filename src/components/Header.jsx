import { styles } from '../styles/header.css'; // eslint-disable-line no-unused-vars
import React, { PropTypes } from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import * as Actions from '../actions/Actions.jsx';


class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      clicked: false,
      linkWrap: '',
      hideClassAbout: '',
      hideClassProjects: '',
      hideClassSkills: '',
      hideClassContact: '',
      backArr: '',
    };
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
        backArr: 'back-showing-a',
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
        backArr: 'back-showing-b',
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
        backArr: 'back-showing-c',
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
        backArr: 'back-showing-d',
      });
      toggleContact(true);
      toggleAbout(false);
      toggleProject(false);
      toggleSkills(false);
    }
  }

  handleToggle(e) {
    const value = e.target.id;
    Actions.currentLocationState(value);
    this.props.router.push(`/${value}`);
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
        backArr: 'back-showing-a',
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
        backArr: 'back-showing-b',
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
        backArr: 'back-showing-c',
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
        backArr: 'back-showing-d',
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
      clicked: true,
      backArr: '',
    });
    this.props.router.push('');
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
      sliderClass = 'link-component-visable';
    }
    if (clicked) {
      animationStart = {
        transform: "translateY(0) rotate3d(1, 0, 0, 0)",
        opacity: "1",
      };
      animationStartLogo = {
        opacity: "1",
        transform: "translate3d(100vw, -50%, 0) rotate(0deg)",
        transitionDelay: '500ms',
        pointerEvents: 'none'
      };
      sliderClass = 'link-component-visable';
    }

    return (
      <div className="header-wrap">
        <div onClick={this.handleToggle} className={`link-wrap ${linkWrap}`}>
          <div
            className={`link-component ${hideClassAbout} ${sliderClass}`}
            id="about">
            <div onClick={this.handleBackToMenu} className="list-num">
              <h1 className={this.props.locationState === 'about' && 'listNumHide' ||
                this.props.locationState === '/about' && 'listNumHide'}>
                01
            </h1>
              <div className={`backBtn ${this.state.backArr === "back-showing-a" && this.state.backArr}`} >
                <h1 style={{ color: 'royalblue' }} >{"<"}</h1>
              </div>
            </div>
            <Link
              style={animationStart}
              id="about"
              to="about">about
            </Link>
            <div style={animationStartLogo} className={`logo`}>
              <img src="../styles/svg/logo.svg" alt="logo" className="logo-main" />
            </div>
          </div>
          <div
            className={`link-component ${hideClassProjects} ${sliderClass}`}
            id="projects">
            <div onClick={this.handleBackToMenu} className="list-num">
              <h1 className={this.props.locationState === 'projects' && 'listNumHide' ||
                this.props.locationState === '/projects' && 'listNumHide'}>
                02
            </h1>
              <div className={`backBtn ${this.state.backArr === "back-showing-b" && this.state.backArr}`} >
                <h1 style={{ color: 'royalblue' }} >{"<"}</h1>
              </div>
            </div>
            <Link
              style={animationStart}
              id="projects"
              to="projects">projects
            </Link>
            <div style={animationStartLogo} className={`logo ${showLogo}`}>
              <img src="../styles/svg/logo.svg" alt="logo" className="logo-main" />
            </div>
          </div>
          <div
            className={`link-component ${hideClassSkills} ${sliderClass}`}
            style={{ transformOrigin: 'bottom left' }}
            id="skills">
            <div onClick={this.handleBackToMenu} className="list-num">
              <h1 className={this.props.locationState === 'skills' && 'listNumHide' ||
                this.props.locationState === '/skills' && 'listNumHide'}>
                03
            </h1>
              <div className={`backBtn ${this.state.backArr === "back-showing-c" && this.state.backArr}`} >
                <h1 style={{ color: 'royalblue' }} >{"<"}</h1>
              </div>
            </div>
            <Link
              style={animationStart}
              id="skills"
              to="skills">skills
            </Link>
            <div style={animationStartLogo} className={`logo ${showLogo}`}>
              <img src="../styles/svg/logo.svg" alt="logo" className="logo-main" />
            </div>
          </div>
          <div
            className={`link-component ${hideClassContact} ${sliderClass}`}
            style={{ transformOrigin: 'bottom left' }}
            id="contact">
            <div onClick={this.handleBackToMenu} className="list-num">
              <h1 className={this.props.locationState === 'contact' && 'listNumHide' ||
                this.props.locationState === '/contact' && 'listNumHide'}>
                04
            </h1>
              <div className={`backBtn ${this.state.backArr === "back-showing-d" && this.state.backArr}`} >
                <h1 style={{ color: 'royalblue' }} >{"<"}</h1>
              </div>
            </div>
            <Link
              style={animationStart}
              id="contact"
              to="contact">contact
            </Link>
            <div style={animationStartLogo} className={`logo ${showLogo}`}>
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
