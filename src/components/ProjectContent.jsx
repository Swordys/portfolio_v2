import React, { PropTypes } from 'react';
import { styles } from '../styles/projectContent.css'; // eslint-disable-line no-unused-vars
import { connect } from 'react-redux';

class ProjectContent extends React.Component {

  render() {
    const { projectState } = this.props;
    let toggleClass = '';
    let toggleProj = '';
    if (projectState) {
      toggleClass = 'contentActiveProject';
      toggleProj = 'projectActive';
    }
    return (
      <div className={`project-content ${toggleClass}`}>
        <div className="project-container">
          <div key="#1" className={`project-file ${toggleProj}`}>
            <div className="project-wrap">
              <div className="file-pic">
              </div>
              <div className="file-info">
                <span className="info-text">
                  project description
              </span>
              </div>
            </div>
          </div>
          <div key="#2" className={`project-file ${toggleProj}`}>
            <div className="project-wrap">
              <div className="file-pic">
              </div>
              <div className="file-info">
                <span className="info-text">
                  project description
              </span>
              </div>
            </div>
          </div>
          <div key="#3" className={`project-file ${toggleProj}`}>
            <div className="project-wrap">
              <div className="file-pic">
              </div>
              <div className="file-info">
                <span className="info-text">
                  project description
              </span>
              </div>
            </div>
          </div>
          <div key="#4" className={`project-file ${toggleProj}`}>
            <div className="project-wrap">
              <div className="file-pic">
              </div>
              <div className="file-info">
                <span className="info-text">
                  project description
              </span>
              </div>
            </div>
          </div>
          <div key="#5" className={`project-file ${toggleProj}`}>
            <div className="project-wrap">
              <div className="file-pic">
              </div>
              <div className="file-info">
                <span className="info-text">
                  project description
              </span>
              </div>
            </div>
          </div>
          <div key="#6" className={`project-file ${toggleProj}`}>
            <div className="project-wrap">
              <div className="file-pic">
              </div>
              <div className="file-info">
                <span className="info-text">
                  project description
              </span>
              </div>
            </div>
          </div>
          <div key="#7" className={`project-file ${toggleProj}`}>
            <div className="project-wrap">
              <div className="file-pic">
              </div>
              <div className="file-info">
                <span className="info-text">
                  project description
              </span>
              </div>
            </div>
          </div>
          <div key="#8" className={`project-file ${toggleProj}`}>
            <div className="project-wrap">
              <div className="file-pic">
              </div>
              <div className="file-info">
                <span className="info-text">
                  project description
              </span>
              </div>
            </div>
          </div>
          <div key="#9" className={`project-file ${toggleProj}`}>
            <div className="project-wrap">
              <div className="file-pic">
              </div>
              <div className="file-info">
                <span className="info-text">
                  project description
              </span>
              </div>
            </div>
          </div>
          <div key="#10" className={`project-file ${toggleProj}`}>
            <div className="project-wrap">
              <div className="file-pic">
              </div>
              <div className="file-info">
                <span className="info-text">
                  project description
              </span>
              </div>
            </div>
          </div>
        </div>
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
