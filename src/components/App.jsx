import React from 'react';
import { connect } from 'react-redux';
import { styles } from '../styles/mainWrap.css'; // eslint-disable-line no-unused-vars
import Header from './Header.jsx';
import Menu from './Menu.jsx';
import AboutContent from './AboutContent.jsx';
import ProjectContent from './ProjectContent.jsx';
import SkillsContent from './SkillsContent.jsx';
import ContactContent from './ContactContent.jsx';

class App extends React.Component {
  render() {
    return (
      <div className="main-wrap">
        <ProjectContent />
        <SkillsContent />
        <ContactContent />
        <div className="main-menu-wrap">
          <Header />
          <Menu />
        </div>
        <AboutContent />
      </div>
    );
  }
}


export default connect()(App);
