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
      enter: false,
      linkWrap: '',
      hideClassAbout: '',
      hideClassProjects: '',
      hideClassSkills: '',
      hideClassContact: '',
    };
    this.glitchDaText = this.glitchDaText.bind(this);
    this.handleWordGlitch = this.handleWordGlitch.bind(this);
    this.handleToggle = this.handleToggle.bind(this);
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

    if (locationState === '/about') {
      this.setState({
        hideClassContact: hideClass,
        hideClassProjects: hideClass,
        hideClassSkills: hideClass,
        hideClassAbout: 'activeAbout',
        enter: true,
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
        enter: true,
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
        enter: true,
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
        enter: true,
      });
      toggleContact(true);
      toggleAbout(false);
      toggleProject(false);
      toggleSkills(false);
    }
  }

  handleWordGlitch(e) {
    const value = e.target.id;
    const words = glitchIt(value);
    this.glitchDaText(words, 120, value);
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

    this.setState({
      enter: true,
    });

    if (value === 'about') {
      this.setState({
        hideClassContact: hideClass,
        hideClassProjects: hideClass,
        hideClassSkills: hideClass,
        hideClassAbout: 'activeAbout',
      });
      toggleAbout(true);
    }

    if (value === 'projects') {
      this.setState({
        hideClassContact: hideClass,
        hideClassAbout: hideClass,
        hideClassSkills: hideClass,
        hideClassProjects: 'activeProjects',
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
      });
      toggleContact(true);
    }

  }

  render() {
    const {hideClassAbout, hideClassProjects, hideClassSkills, hideClassContact, linkWrap} = this.state;
    let style = {};
    if (this.state.enter) {
      style = {
        animation: 'none',
        transform: 'scale(1)',
        fontSize: '5vh',
        transformOrigin: 'left',
        opacity: 1,
        transitionDelay: '100ms',
      };
    }

    return (
      <div className="header-wrap">
        <div className={`link-wrap ${linkWrap}`}>
          <div className={`link-component ${hideClassAbout}`} id="about" onMouseEnter={this.handleWordGlitch}>
            <Link style={style} id="about" onClick={this.handleToggle} to="about" href="#">{this.state.about}</Link>
          </div>
          <div className={`link-component ${hideClassProjects}`} id="projects" onMouseEnter={this.handleWordGlitch}>
            <Link style={style} id="projects" onClick={this.handleToggle} to="projects" href="#">{this.state.projects}</Link>
          </div>
          <div className={`link-component ${hideClassSkills}`} id="skills" onMouseEnter={this.handleWordGlitch}>
            <Link style={style} id="skills" onClick={this.handleToggle} to="skills" href="#">{this.state.skills}</Link>
          </div>
          <div className={`link-component ${hideClassContact}`} id="contact" onMouseEnter={this.handleWordGlitch}>
            <Link style={style} id="contact" onClick={this.handleToggle} to="contact" href="#">{this.state.contact}</Link>
          </div>
        </div>
      </div>
    );
  }
}


Header.propTypes = {
  toggleAbout: PropTypes.func,
  toggleProject: PropTypes.func,
  toggleSkills: PropTypes.func,
  toggleContact: PropTypes.func,
  locationState: PropTypes.string,
};

const mapStateToProps = (state) => ({
  locationState: state.locationState,
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
