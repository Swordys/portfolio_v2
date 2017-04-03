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
      abFrame: 'about-frame',
      abPic: 'about-picture'
    };
  }

  componentWillMount() {
    const { activeLocation } = this.props;
    activeLocation === '/about' ?
      this.setState({
        abCont: 'about-content about-content-active',
        abPic: 'about-picture about-picture-active'
      }) :
      this.setState({ abCont: 'about-content', abFrame: 'about-frame', abPic: 'about-picture' });
  }

  componentWillReceiveProps(nextProps) {
    const { activeLocation } = nextProps;
    activeLocation === 'about' ?
      this.setState({
        abCont: 'about-content about-content-active',
        abPic: 'about-picture about-picture-active'
      }) :
      this.setState({ abCont: 'about-content', abFrame: 'about-frame', abPic: 'about-picture' });
  }

  render() {
    const { abCont, abFrame, abPic } = this.state;
    return (
      <div className={abCont}>
        <div className="about-compo">
          <div className="pic-wrap">
            <div className={abPic}>
              <div className={abFrame} />
            </div>
          </div>
        </div>
        <div className="about-compo">
          <div className="about-text">
            <div className="text-inner-wrap">
              <div className="text-flex">
                <h2 className="hi">who ?</h2>
                <p className="text-wrap">
                  I'm David, a 23 year-old Georgian self-taught developer. I love challenging myself, whether it be learning new library or solving a tricky problem. I always strive for greatness, trying to better myself mentally and physically. Writing code started as a hobby, but quickly grew into passion leading me to read books on subject and perfect my craft.
              </p>
              </div>
              <div className="text-flex">
                <h2 className="hi">so ?</h2>
                <p className="text-wrap">
                  I believe I have a solid foundation of the core concepts of web design and functionality.
                 The earlier OOP experience helped me with clean code principles and optimal solution planning,
                 but freedom of web environment gave me the inspiration to work on projects that people would enjoy.
              </p>
              </div>

            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default AboutContent;
