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
