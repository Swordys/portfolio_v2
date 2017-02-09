import React from 'react';
import Header from './Header.jsx';
import { connect } from 'react-redux';
import AboutContent from './AboutContent.jsx';
import ProjectContent from './ProjectContent.jsx';
import SkillsContent from './SkillsContent.jsx';
import ContactContent from './ContactContent.jsx';

class App extends React.Component {
  render() {
    return (
      <div className="main-wrap">
        <AboutContent />
        <ProjectContent />
        <SkillsContent />
        <ContactContent />
        <Header />
      </div>
    );
  }
}


export default connect()(App);
