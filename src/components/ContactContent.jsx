import React, { PropTypes } from 'react';
import { styles } from '../styles/contactContent.css'; // eslint-disable-line no-unused-vars
import { connect } from 'react-redux';

class ContactContent extends React.Component {
  render() {
    const { contactState } = this.props;
    let sectionState = '';
    let toggleClass = '';
    if (contactState) {
      toggleClass = 'contactActive';
      sectionState = 'sectionActive';
    }
    return (
      <div className={`contact-content ${toggleClass}`}>
        <div className="contact-wrap">
          <div className={`contact-section ${sectionState}`}>
            <div className="section-text">
              <div style={{ display: 'flex' }}>
                <h1 className="section-count" style={{ paddingRight: '2vh', color: 'gray' }}>#1</h1>
                <h1>email</h1>
              </div>
              <span style={{ borderTop: '1px solid royalblue', paddingTop: "1.5vh", }}>
                Always looking forward working on exciting and interesting projects.
                If you're interested hit me up at <span style={{ color: 'royalblue' }} >davit_saginashvili@yahoo.com</span> and let's discuss some business.
                </span>
            </div>
          </div>
          <div className={`contact-section ${sectionState}`}>
            <div className="section-text">
              <div style={{ display: 'flex' }}>
                <h1 style={{ paddingRight: '2vh', color: 'gray' }}>#2</h1>
                <h1><a style={{ textDecoration: 'none', color: 'lightgray' }} target="blank" href="https://github.com/Swordys">github</a></h1>
              </div>
              <span style={{ borderTop: '1px solid #03A9F4', paddingTop: "1.5vh" }}>
                Check out my GitHub to see the past and ongoing projects.
                </span>
            </div>
          </div>
          <div className={`contact-section ${sectionState}`}>
            <div className="section-text">
              <div style={{ display: 'flex' }}>
                <h1 style={{ paddingRight: '2vh', color: 'gray' }}>#3</h1>
                <h1><a style={{ textDecoration: 'none', color: 'lightgray' }} target="blank" href="https://stackoverflow.com/users/5843204/swordys">stack</a></h1>
              </div>
              <span style={{ borderTop: '1px solid #CDDC39', paddingTop: "1.5vh" }}>
                Some of my Stackoverflow answers.
                 I try to be active when I can..
                 </span>
            </div>
          </div>
          <div className={`contact-section ${sectionState}`}>
            <div className="section-text">
              <div style={{ display: 'flex' }}>
                <h1 style={{ paddingRight: '2vh', color: 'gray' }}>#4</h1>
                <h1><a style={{ textDecoration: 'none', color: 'lightgray' }} target="blank" href="http://codepen.io/swordys">codepen</a></h1>
              </div>
              <span style={{ borderTop: '1px solid #F44336', paddingTop: "1.5vh" }}>
                My older and more recent code doodles, mostly for CSS experimentation.
                </span>
            </div>
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
