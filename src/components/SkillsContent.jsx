import React, { Component, PropTypes } from "react";
import { styles } from "../styles/skillsContent.css"; // eslint-disable-line no-unused-vars

class SkillsContent extends Component {
  static propTypes = {
    activeLocation: PropTypes.string
  };

  constructor(props) {
    super(props);
    this.state = {
      skCont: "skills-content"
    };
  }

  componentWillMount() {
    const { activeLocation } = this.props;
    activeLocation === "/skills"
      ? this.setState({ skCont: "skills-content skills-content-active" })
      : this.setState({ skCont: "project-content" });
  }

  componentWillReceiveProps(nextProps) {
    const { activeLocation } = nextProps;
    activeLocation === "skills"
      ? this.setState({ skCont: "skills-content skills-content-active" })
      : this.setState({ skCont: "skills-content" });
  }

  render() {
    const { skCont } = this.state;
    return (
      <div className={skCont}>
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
