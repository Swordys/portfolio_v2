import React, { PropTypes } from 'react';
import { styles } from '../styles/aboutContent.css'; // eslint-disable-line no-unused-vars
import { connect } from 'react-redux';

class AboutContent extends React.Component {
  render() {
    const { aboutState } = this.props;
    let toggleClass = '';
    if (aboutState) {
      toggleClass = 'contentActive';
    }
    return (
      <div className={`about-content ${toggleClass}`}>
        <div className="about-compo">
          <div className="about-picture"></div>
        </div>
        <div className="about-compo">
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
