import React, { Component, PropTypes } from 'react';
import { styles } from '../styles/mainWrap.css'; // eslint-disable-line no-unused-vars
import { transGroup } from '../styles/transGroup.css'; // eslint-disable-line no-unused-vars
import Header from './Header.jsx';
import Menu from './Menu.jsx';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import { Router } from 'react-router';
import {browserHistory} from 'react-router';

class App extends Component {

  static propTypes = {
    children: PropTypes.object,
    location: PropTypes.object,
  }


  render() {
    const { children, location } = this.props;
    const keyProp = location || "root";

    return (
      <div className="main-wrap">
        <div className="main-menu-wrap">
          <Header routerT={browserHistory} />
          <Menu />
        </div>
        <ReactCSSTransitionGroup
          transitionName="example"
          component="div"
          transitionEnterTimeout={500}
          transitionLeaveTimeout={500}>
          {children && React.cloneElement(children, { key: keyProp })}
        </ReactCSSTransitionGroup>
      </div>
    );
  }
}


export default App;
