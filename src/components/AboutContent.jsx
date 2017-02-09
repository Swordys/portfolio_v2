import React, { PropTypes } from 'react';
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
        <h1>about</h1>
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
