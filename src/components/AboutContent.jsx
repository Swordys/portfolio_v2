import React, { Component } from 'react';
import { styles } from '../styles/aboutContent.css'; // eslint-disable-line no-unused-vars

class AboutContent extends Component {
  render() {
    return (
      <div className="about-content">
        <div className="about-compo">
          <div className="pic-wrap">
            <div className="about-picture">
              <div className="about-frame" />
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
