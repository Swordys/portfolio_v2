import React, { PropTypes } from 'react';
import {styles} from '../styles/projectContent.css'; // eslint-disable-line no-unused-vars
import { connect } from 'react-redux';

class ProjectContent extends React.Component {
  render() {
    const { projectState } = this.props;
    let toggleClass = '';
    if (projectState) {
      toggleClass = 'contentActive';
    }
    return (
      <div className={`project-content ${toggleClass}`}>
        <h1>project</h1>
      </div>
    );
  }
}

ProjectContent.propTypes = {
  projectState: PropTypes.bool,
};

const mapStateToProps = state => ({
  projectState: state.projectState,
});

export default connect(mapStateToProps)(ProjectContent);