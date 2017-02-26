import React, { PropTypes } from 'react';
import { styles } from '../styles/contactContent.css'; // eslint-disable-line no-unused-vars
import { connect } from 'react-redux';

class ContactContent extends React.Component {
  render() {
    const { contactState } = this.props;
    let toggleClass = '';
    if (contactState) {
      toggleClass = 'contactActive';
    }
    return (
      <div className={`contact-content ${toggleClass}`}>
        <div className='contact-wrap'>
          <div className='contact-section'>
            <div style={{ display: 'flex' }}>
              <h1 style={{ paddingRight: '2vh', color: 'gray' }}>01</h1>
              <h1>email</h1>
            </div>
            <span>Always looking forward working on interesting projects. <br />davit_saginashvili@yahoo.com</span>
          </div>
          <div className='contact-section'>
            <div style={{ display: 'flex' }}>
              <h1 style={{ paddingRight: '2vh', color: 'gray' }}>02</h1>
              <h1>github</h1>
            </div>
            <span>Check out my github for latest projects</span>
          </div>
          <div className='contact-section'>
            <div style={{ display: 'flex' }}>
              <h1 style={{ paddingRight: '2vh', color: 'gray' }}>03</h1>
              <h1>stackoverflow</h1>
            </div>
            <span>Place where i answer some of the questions</span>
          </div>
          <div className='contact-section'>
            <div style={{ display: 'flex' }}>
              <h1 style={{ paddingRight: '2vh', color: 'gray' }}>04</h1>
              <h1>codepen</h1>
            </div>
            <span>Some of the code doodles</span>
          </div>
        </div>
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
