import React, { Component, PropTypes } from 'react';
import { styles } from '../styles/mainWrap.css'; // eslint-disable-line no-unused-vars
import { browserHistory } from 'react-router';

// components
import Header from './Header.jsx';
import Menu from './Menu.jsx';
import AboutContent from './AboutContent.jsx';
import ProjectContent from './ProjectContent.jsx';
import SkillsContent from './SkillsContent.jsx';
import ContactContent from './ContactContent.jsx';


class App extends Component {

  static propTypes = {
    children: PropTypes.object,
    location: PropTypes.object,
  }

  render() {
    const { location } = this.props;
    return (
      <div className="main-wrap">
        <div className="main-wrap-text">
          <div className="main-wrap-about">
            <h1 className="main-wrap-about-name">{"<"} davit saginashvili {"/>"}</h1>
            <h1 className="main-wrap-about-text">css perfectionist,<br />react enthusiast, <br /> front-end developer.</h1>
            <h2 className="main-wrap-about-status">+currently freelancing</h2>
          </div>
        </div>
        <div className="main-menu-wrap">
          <Header
            activeLocation={location.pathname}
            routeRemote={browserHistory} />
          <Menu
            activeLocation={location.pathname}
            toggleSlide={this.toggleHeader} />
        </div>
        <AboutContent activeLocation={location.pathname} />
        <ProjectContent activeLocation={location.pathname} />
        <SkillsContent activeLocation={location.pathname} />
        <ContactContent activeLocation={location.pathname} />
      </div>
    );
  }
}


export default App;
