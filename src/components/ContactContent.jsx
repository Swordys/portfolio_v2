import React, { Component } from 'react';
import { styles } from '../styles/contactContent.css'; // eslint-disable-line no-unused-vars

class ContactContent extends Component {
  render() {
    return (
      <div className={`contact-content`}>
        <div className="contact-wrap">
          <div className={`contact-section`}>
            <div className="section-text">
              <div style={{ display: 'flex' }}>
                <h1 className="section-count" style={{ paddingRight: '2vh', color: 'gray' }}>01</h1>
                <h1>email</h1>
              </div>
              <span style={{ borderTop: '1px solid royalblue', paddingTop: "1.5vh", }}>
                Always looking forward working on exciting and interesting projects.
                If you're interested hit me up at <span style={{ color: 'royalblue' }} >davit_saginashvili@yahoo.com</span> and let's discuss some business.
                </span>
            </div>
          </div>
          <div className={`contact-section`}>
            <div className="section-text">
              <div style={{ display: 'flex' }}>
                <h1 style={{ paddingRight: '2vh', color: 'gray' }}>02</h1>
                <h1><a style={{ textDecoration: 'none', color: 'lightgray' }} target="blank" href="https://github.com/Swordys">github</a></h1>
              </div>
              <span style={{ borderTop: '1px solid #03A9F4', paddingTop: "1.5vh" }}>
                Check out my GitHub to see the past and ongoing projects.
                </span>
            </div>
          </div>
          <div className={`contact-section`}>
            <div className="section-text">
              <div style={{ display: 'flex' }}>
                <h1 style={{ paddingRight: '2vh', color: 'gray' }}>03</h1>
                <h1><a style={{ textDecoration: 'none', color: 'lightgray' }} target="blank" href="https://stackoverflow.com/users/5843204/swordys">stack</a></h1>
              </div>
              <span style={{ borderTop: '1px solid #CDDC39', paddingTop: "1.5vh" }}>
                Some of my Stackoverflow answers.
                 I try to be active when I can..
                 </span>
            </div>
          </div>
          <div className={`contact-section`}>
            <div className="section-text">
              <div style={{ display: 'flex' }}>
                <h1 style={{ paddingRight: '2vh', color: 'gray' }}>04</h1>
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

export default ContactContent;
