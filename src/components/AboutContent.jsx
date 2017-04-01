import React, { Component, PropTypes } from 'react';
import { styles } from '../styles/aboutContent.css'; // eslint-disable-line no-unused-vars

class AboutContent extends Component {

  static propTypes = {
    activeLocation: PropTypes.string,
  }

  constructor(props) {
    super(props);
    this.state = {
      abCont: 'about-content',
      abFrame: 'about-frame'
    };
  }

  componentWillMount() {
    const { activeLocation } = this.props;
    activeLocation === '/about' ?
      this.setState({ abCont: 'about-content about-content-active', abFrame: 'about-frame about-frame-active' }) :
      this.setState({ abCont: 'about-content', abFrame: 'about-frame' });
  }

  componentWillReceiveProps(nextProps) {
    const { activeLocation } = nextProps;
    activeLocation === 'about' ?
      this.setState({ abCont: 'about-content about-content-active', abFrame: 'about-frame about-frame-active' }) :
      this.setState({ abCont: 'about-content', abFrame: 'about-frame' });
  }

  render() {
    const { abCont, abFrame } = this.state;
    return (
      <div className={abCont}>
        <div className="about-compo">
          <div className="pic-wrap">
            <div className="about-picture">
              <div className={abFrame} />
            </div>
          </div>
        </div>
        <div className="about-compo">
          <div className="about-text">
            <div className="text-inner-wrap">
              <h2 className="hi">who ?</h2>
              <p className="text-wrap">
                I'm David, an passionate front-end developer, who loves challenging himself, whether it be learning new library or solving a tricky problem. I always strive for greatness, trying to better myself fiscally and mentally. I believe I have a solid foundation of the core concepts of web design and functionality. The previous OOP experience helped me with clean code principles and optimal solution planning, but freedom of web environment gave me the inspiration to work on projects that people would enjoy.
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default AboutContent;
