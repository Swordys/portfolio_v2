import React from 'react';
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

    this.setState({
      enter: true,
    });

    value === 'about' ? this.setState({
      hideClassContact: hideClass,
      hideClassProjects: hideClass,
      hideClassSkills: hideClass,
      hideClassAbout: 'activeAbout',
    }) : hideClass;

    value === 'projects' ? this.setState({
      hideClassContact: hideClass,
      hideClassAbout: hideClass,
      hideClassSkills: hideClass,
      hideClassProjects: 'activeProjects',
    }) : hideClass;

    value === 'skills' ? this.setState({
      hideClassContact: hideClass,
      hideClassAbout: hideClass,
      hideClassProjects: hideClass,
      hideClassSkills: 'activeSkills',
    }) : hideClass;

    value === 'contact' ? this.setState({
      hideClassSkills: hideClass,
      hideClassAbout: hideClass,
      hideClassProjects: hideClass,
      hideClassContact: 'activeContact',
    }) : hideClass;
  }

  render() {
    const {hideClassAbout, hideClassProjects, hideClassSkills, hideClassContact} = this.state;
    let style = {};
    if (this.state.enter) {
      style = {
        animation: 'none',
        transform: 'scale(1)',
        fontSize: '5vh',
        transformOrigin: 'left',
        opacity: 1,
        transitionDelay: '200ms',
      };
    }

    return (
      <div className="header-wrap">
        <div className="link-wrap">
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

export default Header;
