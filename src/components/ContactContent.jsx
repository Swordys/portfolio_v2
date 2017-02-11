import React, { PropTypes } from 'react';
import {styles} from '../styles/contactContent.css'; // eslint-disable-line no-unused-vars
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
