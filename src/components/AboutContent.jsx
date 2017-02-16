import React, { PropTypes } from 'react';
import { styles } from '../styles/aboutContent.css'; // eslint-disable-line no-unused-vars
import { connect } from 'react-redux';

class AboutContent extends React.Component {
  render() {
    const { aboutState } = this.props;
    let toggleCompo = '';
    let toggleClass = '';
    let togglePic = '';
    let toggleFrame = '';
    if (aboutState) {
      toggleCompo = 'about-compo-active';
      toggleClass = 'contentActive';
      togglePic = 'about-picture-active';
      toggleFrame = 'about-frame-active';
    }
    return (
      <div className={`about-content ${toggleClass}`}>
        <div className={`about-compo ${toggleCompo}`}>
          <div className="pic-wrap">
            <div className={`about-picture ${togglePic}`}>
              <div className={`about-frame ${toggleFrame}`}>
              </div>
            </div>
          </div>
        </div>
        <div className={`about-compo ${toggleCompo}`}>
          <div className="about-text">
            <p className="text-wrap">
              I'm David, a passionate front-end developer, who loves challenging himself, whether it be learning new library or solving a tricky problem. I always strive for greatness, trying to better myself fiscally and mentally. I believe I have a solid foundation of the core concepts of web design and functionality. The previous OOP experience helped me with clean code principles and optimal solution planning, but freedom of web environment gave me the inspiration to work on projects that people would enjoy.
            </p>
          </div>
        </div>
      </div>
    );
  }
}

AboutContent.propTypes = {
  aboutState: PropTypes.bool,
};

const mapStateToProps = state => ({
  aboutState: state.aboutState,
});

export default connect(mapStateToProps)(AboutContent);
