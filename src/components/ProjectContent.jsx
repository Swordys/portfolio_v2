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
    const { pjCont } = this.state;
    return (
      <div className={pjCont}>
        <div className="project-container">
          <div key="#1" className="project-file">
            <div className="project-wrap">
              <div className="file-pic" />
              <div className="file-info">
                <span className="info-text">
                  react messenger+
              </span>
                <div className="tech-text">
                  <span style={{ color: "royalblue" }}>tech: <br /> <span style={{ color: "black", display: 'block', paddingTop: "5px" }}>
                    react - redux - node - firebase - webpack - css3 - html</span></span>
                </div>
                <div className="tech-links">
                  <span style={{ display: "block" }}>github:
                    <a style={{ paddingLeft: "10px", textDecoration: "none", color: "blue" }} href="">messenger</a>
                  </span>
                  <span >demo: <a style={{ paddingLeft: "10px", textDecoration: "none", color: "blue" }} href="#">messenger</a>
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div key="#2" className={`project-file`}>
            <div className="project-wrap">
              <div className="file-pic" />
              <div className="file-info">
                <span className="info-text">
                  movie quotes+
              </span>
                <div className="tech-text">
                  <span style={{ color: "royalblue" }}>tech: <br /> <span style={{ color: "black", display: 'block', paddingTop: "5px" }}>
                    react - redux - node - moviedb api - express - webpack - css3 - html</span></span>
                </div>
                <div className="tech-links">
                  <span style={{ display: "block" }}>github:
                    <a style={{ paddingLeft: "10px", textDecoration: "none", color: "blue" }} href="">movies</a>
                  </span>
                  <span >demo: <a style={{ paddingLeft: "10px", textDecoration: "none", color: "blue" }} href="#">movies</a>
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div key="#3" className={`project-file`}>
            <div className="project-wrap">
              <div className="file-pic" />
              <div className="file-info">
                <span className="info-text">
                  note mate+
              </span>
                <div className="tech-text">
                  <span style={{ color: "royalblue" }}>tech: <br /> <span style={{ color: "black", display: 'block', paddingTop: "5px" }}>
                    react - redux - node - firebase - css3 - webpack - html</span></span>
                </div>
                <div className="tech-links">
                  <span style={{ display: "block" }}>github:
                    <a style={{ paddingLeft: "10px", textDecoration: "none", color: "blue" }} href="">notes</a>
                  </span>
                  <span >demo: <a style={{ paddingLeft: "10px", textDecoration: "none", color: "blue" }} href="#">notes</a>
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div key="#4" className={`project-file`}>
            <div className="project-wrap">
              <div className="file-pic" />
              <div className="file-info">
                <span className="info-text">
                  old portfolio+
              </span>
                <div className="tech-text">
                  <span style={{ color: "royalblue" }}>tech: <br /> <span style={{ color: "black", display: 'block', paddingTop: "5px" }}>
                    javascript - css3 - html - photoshop</span></span>
                </div>
                <div className="tech-links">
                  <span style={{ display: "block" }}>github:
                    <a style={{ paddingLeft: "10px", textDecoration: "none", color: "blue" }} href="">portfolio</a>
                  </span>
                  <span >demo: <a style={{ paddingLeft: "10px", textDecoration: "none", color: "blue" }} href="#">portfolio</a>
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div key="#5" className={`project-file`}>
            <div className="project-wrap">
              <div className="file-pic" />
              <div className="file-info">
                <span className="info-text">
                  react weather+
              </span>
                <div className="tech-text">
                  <span style={{ color: "royalblue" }}>tech: <br /> <span style={{ color: "black", display: 'block', paddingTop: "5px" }}>
                    react - node - openweathermap api - webpack - css3 - html</span></span>
                </div>
                <div className="tech-links">
                  <span style={{ display: "block" }}>github:
                    <a style={{ paddingLeft: "10px", textDecoration: "none", color: "blue" }} href="">weather</a>
                  </span>
                  <span >demo: <a style={{ paddingLeft: "10px", textDecoration: "none", color: "blue" }} href="#">weather</a>
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div key="#6" className={`project-file`}>
            <div className="project-wrap">
              <div className="file-pic" />
              <div className="file-info">
                <span className="info-text">
                  retro radio+
              </span>
                <div className="tech-text">
                  <span style={{ color: "royalblue" }}>tech: <br /> <span style={{ color: "black", display: 'block', paddingTop: "5px" }}>
                    javascript - css3 - gsap - photoshop - html</span></span>
                </div>
                <div className="tech-links">
                  <span style={{ display: "block" }}>github:
                    <a style={{ paddingLeft: "10px", textDecoration: "none", color: "blue" }} href="">radio</a>
                  </span>
                  <span >demo: <a style={{ paddingLeft: "10px", textDecoration: "none", color: "blue" }} href="#">radio</a>
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div key="#7" className={`project-file`}>
            <div className="project-wrap">
              <div className="file-pic" />
              <div className="file-info">
                <span className="info-text">
                  react todo+
              </span>
                <div className="tech-text">
                  <span style={{ color: "royalblue" }}>tech: <br /> <span style={{ color: "black", display: 'block', paddingTop: "5px" }}>
                    react - redux - node - webpack - css3 - html</span></span>
                </div>
                <div className="tech-links">
                  <span style={{ display: "block" }}>github:
                    <a style={{ paddingLeft: "10px", textDecoration: "none", color: "blue" }} href="">todo</a>
                  </span>
                  <span >demo: <a style={{ paddingLeft: "10px", textDecoration: "none", color: "blue" }} href="#">todo</a>
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div key="#8" className={`project-file`}>
            <div className="project-wrap">
              <div className="file-pic" />
              <div className="file-info">
                <span className="info-text">
                  react calc+
              </span>
                <div className="tech-text">
                  <span style={{ color: "royalblue" }}>tech: <br /> <span style={{ color: "black", display: 'block', paddingTop: "5px" }}>
                    react - node - webpack - css3 - html</span></span>
                </div>
                <div className="tech-links">
                  <span style={{ display: "block" }}>github:
                    <a style={{ paddingLeft: "10px", textDecoration: "none", color: "blue" }} href="">calc</a>
                  </span>
                  <span >demo: <a style={{ paddingLeft: "10px", textDecoration: "none", color: "blue" }} href="#">calc</a>
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div key="#9" className={`project-file`}>
            <div className="project-wrap">
              <div className="file-pic" />
              <div className="file-info">
                <span className="info-text">
                  iso server+
              </span>
                <div className="tech-text">
                  <span style={{ color: "royalblue" }}>tech: <br /> <span style={{ color: "black", display: 'block', paddingTop: "5px" }}>
                    css3 - html</span></span>
                </div>
                <div className="tech-links">
                  <span style={{ display: "block" }}>github:
                    <a style={{ paddingLeft: "10px", textDecoration: "none", color: "blue" }} href="">server</a>
                  </span>
                  <span >demo: <a style={{ paddingLeft: "10px", textDecoration: "none", color: "blue" }} href="#">server</a>
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div key="#10" className={`project-file`}>
            <div className="project-wrap">
              <div className="file-pic" />
              <div className="file-info">
                <span className="info-text">
                  galaxy phone+
              </span>
                <div className="tech-text">
                  <span style={{ color: "royalblue" }}>tech: <br /> <span style={{ color: "black", display: 'block', paddingTop: "5px" }}>
                    css3 - gsap - javascript - html</span></span>
                </div>
                <div className="tech-links">
                  <span style={{ display: "block" }}>github:
                    <a style={{ paddingLeft: "10px", textDecoration: "none", color: "blue" }} href="">galaxy</a>
                  </span>
                  <span >demo: <a style={{ paddingLeft: "10px", textDecoration: "none", color: "blue" }} href="#">galaxy</a>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ProjectContent;
