import React, { Component, PropTypes } from 'react';
import { styles } from '../styles/mainWrap.css'; // eslint-disable-line no-unused-vars
import { transGroup } from '../styles/transGroup.css'; // eslint-disable-line no-unused-vars
import Header from './Header.jsx';
import Menu from './Menu.jsx';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

class App extends Component {

  static propTypes = {
    children: PropTypes.object,
  }

  render() {
    const { children } = this.props;
    return (
      <div className="main-wrap">
        <div className="main-menu-wrap">
          <Header />
          <Menu />
        </div>
        <ReactCSSTransitionGroup
          transitionName="example"
          transitionEnterTimeout={500}
          transitionLeaveTimeout={500}>
          {children}
        </ReactCSSTransitionGroup>
      </div>
    );
  }
}


export default App;
