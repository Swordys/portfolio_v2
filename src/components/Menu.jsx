import React, { PropTypes } from 'react';
import { toggleSlideMenu } from '../actions/Actions.jsx';
import { connect } from 'react-redux';
import styles from '../styles/Menu.css'; // eslint-disable-line no-unused-vars

class Menu extends React.Component {
  render() {
    const {toggleSlide} = this.props;
    return (
      <div onClick={() => toggleSlide(true)} className="sideMenu-wrap">
      </div>
    );
  }
}

Menu.propTypes = {
  toggleSlide: PropTypes.func.isRequired,
};

const mapDispatchToProps = dispatch => ({
  toggleSlide: value => {
    dispatch(toggleSlideMenu(value));
  }
});

export default connect(() => { return {}; }, mapDispatchToProps)(Menu);
