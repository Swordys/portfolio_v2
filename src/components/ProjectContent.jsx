import React, { Component, PropTypes } from 'react';
import { styles } from '../styles/projectContent.css'; // eslint-disable-line no-unused-vars

class ProjectContent extends Component {

  static propTypes = {
    activeLocation: PropTypes.string,
  }

  constructor(props) {
    super(props);
    this.state = {
      pjCont: 'project-content'
    };
  }

  componentWillMount() {
    const { activeLocation } = this.props;
    activeLocation === '/projects' ?
      this.setState({ pjCont: 'project-content project-content-active' }) :
      this.setState({ pjCont: 'project-content' });
  }

  componentWillReceiveProps(nextProps) {
    const { activeLocation } = nextProps;
    activeLocation === 'projects' ?
      this.setState({ pjCont: 'project-content project-content-active' }) :
      this.setState({ pjCont: 'project-content' });
  }


  render() {
    const {pjCont} = this.state;
    return (
      <div className={pjCont}>
        <div className="project-container">
          <div key="#1" className="project-file">
            <div className="project-wrap">
              <div className="file-pic" />
              <div className="file-info">
                <span className="info-text">
                  project description
              </span>
              </div>
            </div>
          </div>
          <div key="#2" className={`project-file`}>
            <div className="project-wrap">
              <div className="file-pic" />
              <div className="file-info">
                <span className="info-text">
                  project description
              </span>
              </div>
            </div>
          </div>
          <div key="#3" className={`project-file`}>
            <div className="project-wrap">
              <div className="file-pic" />
              <div className="file-info">
                <span className="info-text">
                  project description
              </span>
              </div>
            </div>
          </div>
          <div key="#4" className={`project-file`}>
            <div className="project-wrap">
              <div className="file-pic" />
              <div className="file-info">
                <span className="info-text">
                  project description
              </span>
              </div>
            </div>
          </div>
          <div key="#5" className={`project-file`}>
            <div className="project-wrap">
              <div className="file-pic" />
              <div className="file-info">
                <span className="info-text">
                  project description
              </span>
              </div>
            </div>
          </div>
          <div key="#6" className={`project-file`}>
            <div className="project-wrap">
              <div className="file-pic" />
              <div className="file-info">
                <span className="info-text">
                  project description
              </span>
              </div>
            </div>
          </div>
          <div key="#7" className={`project-file`}>
            <div className="project-wrap">
              <div className="file-pic" />
              <div className="file-info">
                <span className="info-text">
                  project description
              </span>
              </div>
            </div>
          </div>
          <div key="#8" className={`project-file`}>
            <div className="project-wrap">
              <div className="file-pic" />
              <div className="file-info">
                <span className="info-text">
                  project description
              </span>
              </div>
            </div>
          </div>
          <div key="#9" className={`project-file`}>
            <div className="project-wrap">
              <div className="file-pic" />
              <div className="file-info">
                <span className="info-text">
                  project description
              </span>
              </div>
            </div>
          </div>
          <div key="#10" className={`project-file`}>
            <div className="project-wrap">
              <div className="file-pic" />
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

export default ProjectContent;
