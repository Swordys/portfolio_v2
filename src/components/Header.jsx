import React, { PropTypes } from 'react';
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

  handleWordGlitch(e) {
    const value = e.target.id;
    const words = glitchIt(value);
    this.glitchDaText(words, 100, value);
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
    const hideClass = 'hide-component';
    const {
      toggleAbout,
      toggleProject,
      toggleSkills,
      toggleContact
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
            <a style={style} id="about" onClick={this.handleToggle} href="#">{this.state.about}</a>
          </div>
          <div className={`link-component ${hideClassProjects}`} id="projects" onMouseEnter={this.handleWordGlitch}>
            <a style={style} id="projects" onClick={this.handleToggle} href="#">{this.state.projects}</a>
          </div>
          <div className={`link-component ${hideClassSkills}`} id="skills" onMouseEnter={this.handleWordGlitch}>
            <a style={style} id="skills" onClick={this.handleToggle} href="#">{this.state.skills}</a>
          </div>
          <div className={`link-component ${hideClassContact}`} id="contact" onMouseEnter={this.handleWordGlitch}>
            <a style={style} id="contact" onClick={this.handleToggle} href="#">{this.state.contact}</a>
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
};

const mapStateToProps = state => ({
  aboutState: state.aboutState,
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
