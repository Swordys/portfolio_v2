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

    if (this.state.backArr) {
      this.handleBackToMenu();
      return;
    }
    const value = e.target.id;

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
        backArr: 'back-showing-a',
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

    let sliderClass = '';
    let activeLink = '';
    let activeLogo = '';
    const svgLink = "../styles/svg/logo.svg";
    const { sliderState } = this.props;

    const {
      hideClassAbout,
      hideClassProjects,
      hideClassSkills,
      hideClassContact,
      backArr,
      linkWrap,
      clicked,
    } = this.state;


    if (sliderState || clicked) {
      sliderClass = 'link-component-visable';
      activeLink = "linkTextActive";
    }

    backArr ? activeLogo = "logoActive" : "";

    return (
      <div className="header-wrap">
        <div onClick={this.handleToggle} className={`link-wrap ${linkWrap}`}>
          <div
            className={`link-component ${hideClassAbout} ${sliderClass}`}
            id="about">
            <div className="list-num">
              <h1 className={backArr === 'back-showing-a' && 'listNumHide'}>
                01
            </h1>
              <div className={`backBtn ${hideClassAbout === 'activeAbout' && backArr}`} >
                <h1>{'<'}</h1>
              </div>
            </div>
            <Link
              className={activeLink}
              id="about"
              to="about">about
            </Link>
            <div className={`logo ${activeLogo}`}>
              <img src={svgLink} alt="logo" className="logo-main" />
            </div>
          </div>
          <div
            className={`link-component ${hideClassProjects} ${sliderClass}`}
            id="projects">
            <div className="list-num">
              <h1 className={backArr === 'back-showing-b' && 'listNumHide'}>
                02
            </h1>
              <div className={`backBtn ${hideClassProjects === 'activeProjects' && backArr}`} >
                <h1>{"<"}</h1>
              </div>
            </div>
            <Link
              className={activeLink}
              id="projects"
              to="projects">projects
            </Link>
            <div className={`logo ${activeLogo}`}>
              <img src={svgLink} alt="logo" className="logo-main" />
            </div>
          </div>
          <div
            className={`link-component ${hideClassSkills} ${sliderClass}`}
            style={{ transformOrigin: 'bottom left' }}
            id="skills">
            <div className="list-num">
              <h1 className={backArr === 'back-showing-c' && 'listNumHide'}>
                03
            </h1>
              <div className={`backBtn ${hideClassSkills === 'activeSkills' && backArr}`} >
                <h1>{"<"}</h1>
              </div>
            </div>
            <Link
              className={activeLink}
              id="skills"
              to="skills">skills
            </Link>
            <div className={`logo ${activeLogo}`}>
              <img src={svgLink} alt="logo" className="logo-main" />
            </div>
          </div>
          <div
            className={`link-component ${hideClassContact} ${sliderClass}`}
            style={{ transformOrigin: 'bottom left' }}
            id="contact">
            <div className="list-num">
              <h1 className={backArr === 'back-showing-d' && 'listNumHide'}>
                04
            </h1>
              <div className={`backBtn ${hideClassContact === 'activeContact' && backArr}`} >
                <h1>{"<"}</h1>
              </div>
            </div>
            <Link
              className={activeLink}
              id="contact"
              to="contact">contact
            </Link>
            <div className={`logo ${activeLogo}`}>
              <img src={svgLink} alt="logo" className="logo-main" />
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
