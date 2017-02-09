import React, { PropTypes } from 'react';
import { connect } from 'react-redux';

class ContactContent extends React.Component {
  render() {
    const { contactState } = this.props;
    let toggleClass = '';
    if (contactState) {
      toggleClass = 'contentActive';
    }
    return (
      <div className={`contact-content ${toggleClass}`}>
        <h1>contact</h1>
      </div>
    );
  }
}

ContactContent.propTypes = {
  contactState: PropTypes.bool,
};

const mapStateToProps = state => ({
  contactState: state.contactState,
});

export default connect(mapStateToProps)(ContactContent);
