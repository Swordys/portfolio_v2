import React, { PropTypes } from 'react';
import { styles } from '../styles/skillsContent.css'; // eslint-disable-line no-unused-vars
import { connect } from 'react-redux';

class SkillsContent extends React.Component {

  render() {
    const { skillsState } = this.props;
    let toggleClass = '';
    if (skillsState) {
      toggleClass = 'skillsActive';
    }
    return (
      <div className={`skills-content ${toggleClass}`}>
        <div className='skills-container'>
          <ul className='skill-list'>
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

SkillsContent.propTypes = {
  skillsState: PropTypes.bool,
};

const mapStateToProps = state => ({
  skillsState: state.skillsState,
});

export default connect(mapStateToProps)(SkillsContent);
