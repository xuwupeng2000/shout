import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import AccountScreen from '../screens/AccountScreen';
import ShoutOutScreen from '../screens/ShoutOutScreen';
import AlarmScreen from '../screens/AlarmScreen';
import ServiceScreen from '../screens/ServiceScreen';

const TABS = {
    Account: 'Account',
    ShoutOut: 'ShoutOut',
    Alarm: 'Alarm',
    Service: 'Service'
}

class BottomNavigator extends PureComponent {

  static get TABS() {
    return TABS;
  }
  
  render () {
    const mainRoute = (pageName) => {
      switch (pageName) {
        case TABS.Account:
            return (<AccountScreen />);
        case TABS.ShoutOut:
            return (<ShoutOutScreen />);
        case TABS.Alarm:
            return (<AlarmScreen />);
        case TABS.Service:
            return (<ServiceScreen />);
        default:
            return (<AccountScreen />);
      }
    }
    return mainRoute(this.props.activePage);
  }
}

BottomNavigator.propTypes = {
    activePage: PropTypes.string.isRequired,
}

export default BottomNavigator;
