import React, { Component } from 'react';
import { styles } from '../styles/skillsContent.css'; // eslint-disable-line no-unused-vars

class SkillsContent extends Component {

  render() {
    return (
      <div className={`skills-content`}>
        <div className="skills-container">
          <ul className="skill-list">
            <li>
              c#
            </li>
            <li>
              javascript
            </li>
            <li>
              node
            </li>
            <li>
              html5
            </li>
            <li>
              css3
            </li>
            <li>
              photoshop
            </li>
            <li>
              react
            </li>
            <li>
              redux
            </li>
            <li>
              git
            </li>
            <li>
              firebase
            </li>
          </ul>
        </div>
      </div>
    );
  }
}


export default SkillsContent;
