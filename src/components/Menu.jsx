import React, { PropTypes } from 'react';
import { toggleSlideMenu } from '../actions/Actions.jsx';
import { connect } from 'react-redux';
import styles from '../styles/Menu.css'; // eslint-disable-line no-unused-vars

class Menu extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      toggleMenu: '',
      zMenu: '',
    };
  }

  componentWillMount() {
    const { activeLocation } = this.props;
    activeLocation !== '/' && this.setState({ toggleMenu: 'toggleActive', zMenu: 'sideMenu-wrap-hidden' });
  }

  componentWillReceiveProps(nextProps) {
    const { activeLocation, sliderState } = nextProps;
    activeLocation === '/' && !sliderState && this.setState({ toggleMenu: '', zMenu: '' });
  }

  render() {
    let { toggleMenu, zMenu } = this.state;
    const { toggleSlide } = this.props;
    return (
      <div onClick={() => {
        toggleSlide(true);
        this.setState({
          toggleMenu: 'toggleActive',
          zMenu: 'sideMenu-wrap-hidden',
        });
      }} className={`sideMenu-wrap ${zMenu}`} >
        <div className="clicker">
          <div className={`bar-main ${toggleMenu}`} />
        </div>
      </div>
    );
  }
}

Menu.propTypes = {
  toggleSlide: PropTypes.func.isRequired,
  activeLocation: PropTypes.string.isRequired,
};

const mapStateToProps = (state) => ({
  sliderState: state.slideState,
});

const mapDispatchToProps = dispatch => ({
  toggleSlide: value => {
    dispatch(toggleSlideMenu(value));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(Menu);
