import React, { PropTypes } from 'react';
import {styles} from '../styles/skillsContent.css'; // eslint-disable-line no-unused-vars
import { connect } from 'react-redux';

class SkillsContent extends React.Component {
  render() {
    const { skillsState } = this.props;
    let toggleClass = '';
    if (skillsState) {
      toggleClass = 'contentActive';
    }
    return (
      <div className={`skills-content ${toggleClass}`}>
        <h1>skills</h1>
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
