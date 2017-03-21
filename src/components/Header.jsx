import { styles } from '../styles/header.css'; // eslint-disable-line no-unused-vars
import React, { PropTypes } from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';

class Header extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      clicked: false,
      linkWrap: '',
      hideClassAbout: '',
      hideClassProjects: '',
      hideClassSkills: '',
      hideClassContact: '',
      backArr: '',
    };
    this.handleBackToMenu = this.handleBackToMenu.bind(this);
  }

  componentWillMount() {
    const hideClass = 'hide-component';
    const {
      locationState,
    } = this.props;

    if (locationState !== '/') {
      this.setState({
        clicked: true,
      });
    }

    if (locationState === '/about') {
      this.setState({
        hideClassContact: hideClass,
        hideClassProjects: hideClass,
        hideClassSkills: hideClass,
        hideClassAbout: 'activeAbout',
        backArr: 'back-showing-a',
      });
    }

    if (locationState === '/projects') {
      this.setState({
        hideClassContact: hideClass,
        hideClassAbout: hideClass,
        hideClassSkills: hideClass,
        hideClassProjects: 'activeProjects',
        backArr: 'back-showing-b',
      });
    }

    if (locationState === '/skills') {
      this.setState({
        hideClassContact: hideClass,
        hideClassAbout: hideClass,
        hideClassProjects: hideClass,
        hideClassSkills: 'activeSkills',
        linkWrap: 'reverseFlex',
        backArr: 'back-showing-c',
      });
    }

    if (locationState === '/contact') {
      this.setState({
        hideClassSkills: hideClass,
        hideClassAbout: hideClass,
        hideClassProjects: hideClass,
        hideClassContact: 'activeContact',
        linkWrap: 'reverseFlex',
        backArr: 'back-showing-d',
      });
    }
  }

  componentWillReceiveProps(nextProps, prevProps) {
    const hideClass = 'hide-component';
    if (nextProps.locationState !== prevProps.locationState) {
      nextProps.locationState === '/' && this.handleBackToMenu();
      switch (nextProps.locationState) {
        case '/about':
        case 'about':
          this.setState({
            hideClassContact: hideClass,
            hideClassProjects: hideClass,
            hideClassSkills: hideClass,
            hideClassAbout: 'activeAbout',
            backArr: 'back-showing-a',
          });
          break;
        case '/projects':
        case 'projects':
          this.setState({
            hideClassContact: hideClass,
            hideClassAbout: hideClass,
            hideClassSkills: hideClass,
            hideClassProjects: 'activeProjects',
            backArr: 'back-showing-b',
          });
          break;
        case '/skills':
        case 'skills':
          this.setState({
            hideClassContact: hideClass,
            hideClassAbout: hideClass,
            hideClassProjects: hideClass,
            hideClassSkills: 'activeSkills',
            linkWrap: 'reverseFlex',
            backArr: 'back-showing-c',
          });
          break;
        case '/contact':
        case 'contact':
          this.setState({
            hideClassSkills: hideClass,
            hideClassAbout: hideClass,
            hideClassProjects: hideClass,
            hideClassContact: 'activeContact',
            linkWrap: 'reverseFlex',
            backArr: 'back-showing-d',
          });
          break;
      }
    }
  }

  handleBackToMenu() {
    this.setState({
      hideClassContact: '',
      hideClassProjects: '',
      hideClassSkills: '',
      hideClassAbout: '',
      backArr: '',
    });
  }

  render() {

    let sliderClass = '';
    let activeLink = '';
    let activeLogo = '';
    const svgLink = "../styles/svg/logo.svg";
    const { sliderState } = this.props;
    const {
      hideClassAbout,
      hideClassProjects,
      hideClassSkills,
      hideClassContact,
      backArr,
      linkWrap,
      clicked,
    } = this.state;


    if (sliderState || clicked) {
      sliderClass = 'link-component-visable';
      activeLink = "linkTextActive";
    }

    backArr ? activeLogo = "logoActive" : "";

    return (
      <div className="header-wrap">
        <div className={`link-wrap ${linkWrap}`}>
          <div
            className={`link-component ${hideClassAbout} ${sliderClass}`}
            id="about">
            <div className="list-num">
              <h1 className={backArr === 'back-showing-a' && 'listNumHide'}>
                01
            </h1>
              <div className={`backBtn ${hideClassAbout === 'activeAbout' && backArr}`} >
                <h1>{'<'}</h1>
              </div>
            </div>
            <Link
              className={activeLink}
              id="about"
              to="about"
            >about
            </Link>
            <div className={`logo ${activeLogo}`}>
              <img src={svgLink} alt="logo" className="logo-main" />
            </div>
          </div>
          <div
            className={`link-component ${hideClassProjects} ${sliderClass}`}
            id="projects">
            <div className="list-num">
              <h1 className={backArr === 'back-showing-b' && 'listNumHide'}>
                02
            </h1>
              <div className={`backBtn ${hideClassProjects === 'activeProjects' && backArr}`} >
                <h1>{"<"}</h1>
              </div>
            </div>
            <Link
              className={activeLink}
              id="projects"
              to="projects"
            >projects
            </Link>
            <div className={`logo ${activeLogo}`}>
              <img src={svgLink} alt="logo" className="logo-main" />
            </div>
          </div>
          <div
            className={`link-component ${hideClassSkills} ${sliderClass}`}
            style={{ transformOrigin: 'bottom left' }}
            id="skills">
            <div className="list-num">
              <h1 className={backArr === 'back-showing-c' && 'listNumHide'}>
                03
            </h1>
              <div className={`backBtn ${hideClassSkills === 'activeSkills' && backArr}`} >
                <h1>{"<"}</h1>
              </div>
            </div>
            <Link
              className={activeLink}
              id="skills"
              to="skills"
            >skills
            </Link>
            <div className={`logo ${activeLogo}`}>
              <img src={svgLink} alt="logo" className="logo-main" />
            </div>
          </div>
          <div
            className={`link-component ${hideClassContact} ${sliderClass}`}
            style={{ transformOrigin: 'bottom left' }}
            id="contact">
            <div className="list-num">
              <h1 className={backArr === 'back-showing-d' && 'listNumHide'}>
                04
            </h1>
              <div className={`backBtn ${hideClassContact === 'activeContact' && backArr}`} >
                <h1>{"<"}</h1>
              </div>
            </div>
            <Link
              className={activeLink}
              id="contact"
              to="contact"
            >contact
            </Link>
            <div className={`logo ${activeLogo}`}>
              <img src={svgLink} alt="logo" className="logo-main" />
            </div>
          </div>
        </div>
      </div >
    );
  }
}


Header.propTypes = {
  sliderState: PropTypes.bool,
  locationState: PropTypes.string,
};

const mapStateToProps = (state) => ({
  locationState: state.locationState,
  sliderState: state.slideState,
});

export default connect(mapStateToProps)(Header);
