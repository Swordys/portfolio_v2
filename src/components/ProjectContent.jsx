import React, { PropTypes } from 'react';
import { styles } from '../styles/projectContent.css'; // eslint-disable-line no-unused-vars
import { connect } from 'react-redux';

class ProjectContent extends React.Component {

  render() {
    const { projectState } = this.props;
    let toggleClass = '';
    let toggleProj = '';
    if (projectState) {
      toggleClass = 'contentActive';
      toggleProj = 'projectActive';
    }
    return (
      <div className={`project-content ${toggleClass}`}>
        <div className="project-container">
          <div className={`project-file ${toggleProj}`}>
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
          <div className={`project-file ${toggleProj}`}>
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
          <div className={`project-file ${toggleProj}`}>
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
          <div className={`project-file ${toggleProj}`}>
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
          <div className={`project-file ${toggleProj}`}>
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
          <div className={`project-file ${toggleProj}`}>
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
          <div className={`project-file ${toggleProj}`}>
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
          <div className={`project-file ${toggleProj}`}>
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
          <div className={`project-file ${toggleProj}`}>
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
          <div className={`project-file ${toggleProj}`}>
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
