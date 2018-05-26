import React, { Component } from "react";
import { styles } from "../styles/projectContent.css"; // eslint-disable-line no-unused-vars

class ProjectContent extends Component {
  // static propTypes = {
  //   activeLocation: PropTypes.string
  // };

  constructor(props) {
    super(props);
    this.state = {
      pjCont: "project-content",
      pjFile: "project-file"
    };
  }

  componentWillMount() {
    const { activeLocation } = this.props;
    activeLocation === "/projects"
      ? this.setState({
          pjCont: "project-content project-content-active",
          pjFile: "project-file project-file-active"
        })
      : this.setState({ pjCont: "project-content", pjFile: "project-file" });
  }

  componentWillReceiveProps(nextProps) {
    const { activeLocation } = nextProps;
    activeLocation === "projects"
      ? this.setState({
          pjCont: "project-content project-content-active",
          pjFile: "project-file project-file-active"
        })
      : this.setState({ pjCont: "project-content", pjFile: "project-file" });
  }

  render() {
    const { pjCont, pjFile } = this.state;
    return (
      <div className={pjCont}>
        <div className="project-container">
          <div key="#1" className={pjFile}>
            <div className="project-wrap">
              <div className="file-pic" />
              <div className="file-info">
                <span className="info-text">
                  socket messenger+
                </span>
                <div className="tech-text">
                  <span style={{ color: "royalblue" }}>
                    tech: <br />
                    {" "}
                    <span
                      style={{
                        fontFamily: "Rubik",
                        color: "black",
                        display: "block",
                        paddingTop: "5px"
                      }}
                    >
                      socket.io - react - node - webpack - css3 - html
                    </span>
                  </span>
                </div>
                <div className="tech-links">
                  <span style={{ display: "block" }}>
                    github:
                    <a
                      style={{
                        paddingLeft: "10px",
                        textDecoration: "none",
                        color: "blue"
                      }}
                      href="https://github.com/Swordys/reactSocket"
                    >
                      socket
                    </a>
                  </span>
                  <span>
                    demo:
                    {" "}<a
                      style={{
                        paddingLeft: "10px",
                        textDecoration: "none",
                        color: "blue"
                      }}
                    >
                      socket
                    </a>
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div key="#2" className={pjFile}>
            <div className="project-wrap">
              <div className="file-pic" />
              <div className="file-info">
                <span className="info-text">
                  poker api+
                </span>
                <div className="tech-text">
                  <span style={{ color: "royalblue" }}>
                    tech: <br />
                    {" "}
                    <span
                      style={{
                        fontFamily: "Rubik",
                        color: "black",
                        display: "block",
                        paddingTop: "5px"
                      }}
                    >
                      express - javascript - node - webpack - css3 - html
                    </span>
                  </span>
                </div>
                <div className="tech-links">
                  <span style={{ display: "block" }}>
                    github:
                    <a
                      style={{
                        paddingLeft: "10px",
                        textDecoration: "none",
                        color: "blue"
                      }}
                      href="https://github.com/Swordys/pokerApi"
                    >
                      poker
                    </a>
                  </span>
                  <span>
                    demo:
                    {" "}<a
                      style={{
                        paddingLeft: "10px",
                        textDecoration: "none",
                        color: "blue"
                      }}
                    >
                      poker
                    </a>
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div key="#3" className={pjFile}>
            <div className="project-wrap">
              <div className="file-pic" />
              <div className="file-info">
                <span className="info-text">
                  react messenger+
                </span>
                <div className="tech-text">
                  <span style={{ color: "royalblue" }}>
                    tech: <br />
                    {" "}
                    <span
                      style={{
                        fontFamily: "Rubik",
                        color: "black",
                        display: "block",
                        paddingTop: "5px"
                      }}
                    >
                      react - redux - node - firebase - webpack - css3 - html
                    </span>
                  </span>
                </div>
                <div className="tech-links">
                  <span style={{ display: "block" }}>
                    github:
                    <a
                      style={{
                        paddingLeft: "10px",
                        textDecoration: "none",
                        color: "blue"
                      }}
                      href="https://github.com/Swordys/reactMessage"
                    >
                      messenger
                    </a>
                  </span>
                  <span>
                    demo:
                    {" "}<a
                      style={{
                        paddingLeft: "10px",
                        textDecoration: "none",
                        color: "blue"
                      }}
                    >
                      messenger
                    </a>
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div key="#4" className={pjFile}>
            <div className="project-wrap">
              <div className="file-pic" />
              <div className="file-info">
                <span className="info-text">
                  movie quotes+
                </span>
                <div className="tech-text">
                  <span style={{ color: "royalblue" }}>
                    tech: <br />
                    {" "}
                    <span
                      style={{
                        fontFamily: "Rubik",
                        color: "black",
                        display: "block",
                        paddingTop: "5px"
                      }}
                    >
                      react - redux - node - moviedb api - express - webpack -
                      css3 - html
                    </span>
                  </span>
                </div>
                <div className="tech-links">
                  <span style={{ display: "block" }}>
                    github:
                    <a
                      style={{
                        paddingLeft: "10px",
                        textDecoration: "none",
                        color: "blue"
                      }}
                      href="https://github.com/Swordys/MovieQuote"
                    >
                      movies
                    </a>
                  </span>
                  <span>
                    demo:
                    {" "}<a
                      style={{
                        paddingLeft: "10px",
                        textDecoration: "none",
                        color: "blue"
                      }}
                    >
                      movies
                    </a>
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div key="#5" className={pjFile}>
            <div className="project-wrap">
              <div className="file-pic" />
              <div className="file-info">
                <span className="info-text">
                  note mate+
                </span>
                <div className="tech-text">
                  <span style={{ color: "royalblue" }}>
                    tech: <br />
                    {" "}
                    <span
                      style={{
                        fontFamily: "Rubik",
                        color: "black",
                        display: "block",
                        paddingTop: "5px"
                      }}
                    >
                      react - redux - node - firebase - css3 - webpack - html
                    </span>
                  </span>
                </div>
                <div className="tech-links">
                  <span style={{ display: "block" }}>
                    github:
                    <a
                      style={{
                        paddingLeft: "10px",
                        textDecoration: "none",
                        color: "blue"
                      }}
                      href="https://github.com/Swordys/NoteFirebase"
                    >
                      notes
                    </a>
                  </span>
                  <span>
                    demo:
                    {" "}<a
                      style={{
                        paddingLeft: "10px",
                        textDecoration: "none",
                        color: "blue"
                      }}
                      href="http://note-mate.herokuapp.com/"
                    >
                      notes
                    </a>
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div key="#6" className={pjFile}>
            <div className="project-wrap">
              <div className="file-pic" />
              <div className="file-info">
                <span className="info-text">
                  old portfolio+
                </span>
                <div className="tech-text">
                  <span style={{ color: "royalblue" }}>
                    tech: <br />
                    {" "}
                    <span
                      style={{
                        fontFamily: "Rubik",
                        color: "black",
                        display: "block",
                        paddingTop: "5px"
                      }}
                    >
                      javascript - css3 - html - photoshop
                    </span>
                  </span>
                </div>
                <div className="tech-links">
                  <span style={{ display: "block" }}>
                    github:
                    <a
                      style={{
                        paddingLeft: "10px",
                        textDecoration: "none",
                        color: "blue"
                      }}
                      href="https://github.com/Swordys/welcome"
                    >
                      portfolio
                    </a>
                  </span>
                  <span>
                    demo:
                    {" "}<a
                      style={{
                        paddingLeft: "10px",
                        textDecoration: "none",
                        color: "blue"
                      }}
                      href="http://davidsaginashvili.me/welcome"
                    >
                      portfolio
                    </a>
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div key="#7" className={pjFile}>
            <div className="project-wrap">
              <div className="file-pic" />
              <div className="file-info">
                <span className="info-text">
                  react weather+
                </span>
                <div className="tech-text">
                  <span style={{ color: "royalblue" }}>
                    tech: <br />
                    {" "}
                    <span
                      style={{
                        fontFamily: "Rubik",
                        color: "black",
                        display: "block",
                        paddingTop: "5px"
                      }}
                    >
                      react - node - openweathermap api - webpack - css3 - html
                    </span>
                  </span>
                </div>
                <div className="tech-links">
                  <span style={{ display: "block" }}>
                    github:
                    <a
                      style={{
                        paddingLeft: "10px",
                        textDecoration: "none",
                        color: "blue"
                      }}
                      href="https://github.com/Swordys/LiveWeather"
                    >
                      weather
                    </a>
                  </span>
                  <span>
                    demo:
                    {" "}<a
                      style={{
                        paddingLeft: "10px",
                        textDecoration: "none",
                        color: "blue"
                      }}
                      href="http://weather-fast.herokuapp.com/#/"
                    >
                      weather
                    </a>
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div key="#8" className={pjFile}>
            <div className="project-wrap">
              <div className="file-pic" />
              <div className="file-info">
                <span className="info-text">
                  retro radio+
                </span>
                <div className="tech-text">
                  <span style={{ color: "royalblue" }}>
                    tech: <br />
                    {" "}
                    <span
                      style={{
                        fontFamily: "Rubik",
                        color: "black",
                        display: "block",
                        paddingTop: "5px"
                      }}
                    >
                      javascript - css3 - gsap - photoshop - html
                    </span>
                  </span>
                </div>
                <div className="tech-links">
                  <span style={{ display: "block" }}>
                    github:
                    <a
                      style={{
                        paddingLeft: "10px",
                        textDecoration: "none",
                        color: "blue"
                      }}
                      href="https://github.com/Swordys/retroRadio"
                    >
                      radio
                    </a>
                  </span>
                  <span>
                    demo:
                    {" "}<a
                      style={{
                        paddingLeft: "10px",
                        textDecoration: "none",
                        color: "blue"
                      }}
                      href="http://davidsaginashvili.me/retroRadio/"
                    >
                      radio
                    </a>
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div key="#9" className={pjFile}>
            <div className="project-wrap">
              <div className="file-pic" />
              <div className="file-info">
                <span className="info-text">
                  react todo+
                </span>
                <div className="tech-text">
                  <span style={{ color: "royalblue" }}>
                    tech: <br />
                    {" "}
                    <span
                      style={{
                        fontFamily: "Rubik",
                        color: "black",
                        display: "block",
                        paddingTop: "5px"
                      }}
                    >
                      react - redux - node - webpack - css3 - html
                    </span>
                  </span>
                </div>
                <div className="tech-links">
                  <span style={{ display: "block" }}>
                    github:
                    <a
                      style={{
                        paddingLeft: "10px",
                        textDecoration: "none",
                        color: "blue"
                      }}
                      href="https://github.com/Swordys/reactTodo"
                    >
                      todo
                    </a>
                  </span>
                  <span>
                    demo:
                    {" "}<a
                      style={{
                        paddingLeft: "10px",
                        textDecoration: "none",
                        color: "blue"
                      }}
                      href="http://todo-fast.herokuapp.com/"
                    >
                      todo
                    </a>
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div key="#10" className={pjFile}>
            <div className="project-wrap">
              <div className="file-pic" />
              <div className="file-info">
                <span className="info-text">
                  react calc+
                </span>
                <div className="tech-text">
                  <span style={{ color: "royalblue" }}>
                    tech: <br />
                    {" "}
                    <span
                      style={{
                        fontFamily: "Rubik",
                        color: "black",
                        display: "block",
                        paddingTop: "5px"
                      }}
                    >
                      react - node - webpack - css3 - html
                    </span>
                  </span>
                </div>
                <div className="tech-links">
                  <span style={{ display: "block" }}>
                    github:
                    <a
                      style={{
                        paddingLeft: "10px",
                        textDecoration: "none",
                        color: "blue"
                      }}
                      href="https://github.com/Swordys/ReactStringMath"
                    >
                      calc
                    </a>
                  </span>
                  <span>
                    demo:
                    {" "}<a
                      style={{
                        paddingLeft: "10px",
                        textDecoration: "none",
                        color: "blue"
                      }}
                      href="http://davidsaginashvili.me/ReactStringMath/"
                    >
                      calc
                    </a>
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div key="#11" className={pjFile}>
            <div className="project-wrap">
              <div className="file-pic" />
              <div className="file-info">
                <span className="info-text">
                  iso server+
                </span>
                <div className="tech-text">
                  <span style={{ color: "royalblue" }}>
                    tech: <br />
                    {" "}
                    <span
                      style={{
                        fontFamily: "Rubik",
                        color: "black",
                        display: "block",
                        paddingTop: "5px"
                      }}
                    >
                      css3 - html
                    </span>
                  </span>
                </div>
                <div className="tech-links">
                  <span style={{ display: "block" }}>
                    github:
                    <a
                      style={{
                        paddingLeft: "10px",
                        textDecoration: "none",
                        color: "blue"
                      }}
                      href="https://github.com/Swordys/server"
                    >
                      server
                    </a>
                  </span>
                  <span>
                    demo:
                    {" "}<a
                      style={{
                        paddingLeft: "10px",
                        textDecoration: "none",
                        color: "blue"
                      }}
                      href="http://davidsaginashvili.me/server/"
                    >
                      server
                    </a>
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div key="#12" className={pjFile}>
            <div className="project-wrap">
              <div className="file-pic" />
              <div className="file-info">
                <span className="info-text">
                  galaxy phone+
                </span>
                <div className="tech-text">
                  <span style={{ color: "royalblue" }}>
                    tech: <br />
                    {" "}
                    <span
                      style={{
                        fontFamily: "Rubik",
                        color: "black",
                        display: "block",
                        paddingTop: "5px"
                      }}
                    >
                      css3 - gsap - javascript - html
                    </span>
                  </span>
                </div>
                <div className="tech-links">
                  <span style={{ display: "block" }}>
                    github:
                    <a
                      style={{
                        paddingLeft: "10px",
                        textDecoration: "none",
                        color: "blue"
                      }}
                      href="https://github.com/Swordys/responsive-mobile"
                    >
                      galaxy
                    </a>
                  </span>
                  <span>
                    demo:
                    {" "}<a
                      style={{
                        paddingLeft: "10px",
                        textDecoration: "none",
                        color: "blue"
                      }}
                      href="http://davidsaginashvili.me/responsive-mobile/"
                    >
                      galaxy
                    </a>
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
