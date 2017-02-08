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
    };
    this.glitchDaText = this.glitchDaText.bind(this);
    this.handleWordGlitch = this.handleWordGlitch.bind(this);
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
        setTimeout(function clog() {
          value === 'about' ? that.setState({ about: retWords[i] }) : 'about';
          value === 'projects' ? that.setState({ projects: retWords[i] }) : 'projects';
          value === 'skills' ? that.setState({ skills: retWords[i] }) : 'skills';
          value === 'contact' ? that.setState({ contact: retWords[i] }) : 'contact';
        }, i * speed);
      }
    })();
  }


  render() {
    return (
      <div className="header-wrap">
        <div className="link-wrap">
          <div className="link-component" id="about" onMouseEnter={this.handleWordGlitch}>
            <a href="#">{this.state.about}</a>
          </div>
          <div className="link-component" id="projects" onMouseEnter={this.handleWordGlitch}>
            <a href="#">{this.state.projects}</a>
          </div>
          <div className="link-component" id="skills" onMouseEnter={this.handleWordGlitch}>
            <a href="#">{this.state.skills}</a>
          </div>
          <div className="link-component" id="contact" onMouseEnter={this.handleWordGlitch}>
            <a href="#">{this.state.contact}</a>
          </div>
        </div>
      </div>
    );
  }
}

export default Header;
