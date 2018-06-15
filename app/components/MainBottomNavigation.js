import React, { PureComponent } from 'react';
import { Image, TouchableOpacity } from 'react-native';
import { BottomNavigation, Icon } from 'react-native-material-ui';
import BottomNavigator from './BottomNavigator';
import { SharedStyle, UiConstant } from '../utils/ui';
import PropTypes from 'prop-types';

class MainBottomNavigation extends PureComponent {
  render() {
    return (
      <BottomNavigation
        active={this.props.paging.active}
        hidden={false}
        style={{
          container: {
              position: 'absolute', bottom: 0, left: 0, right: 0, height: UiConstant.bottomNavHeight + UiConstant.bottomSpace,
          },
        }}>

        <ButtonNavigationActionNoColor
          key="Account"
          icon={
            <TouchableOpacity>
              <Image
                /* eslint-disable global-require */
                style={IconStyle}
                source={require('../../res/img/ic_account.png')}/>
            </TouchableOpacity>
          }
          label={"Account"}
          onPress={() => this.props.navigateToPage(false, BottomNavigator.TABS.Account)}/>

          <ButtonNavigationActionNoColor
            key="ShoutOut"
            icon={
              <TouchableOpacity>
                <Image
                  /* eslint-disable global-require */
                  style={IconStyle}
                  source={require('../../res/img/ic_shoutout.png')}/>
              </TouchableOpacity>
            }
            label={BottomNavigator.TABS.ShoutOut}
            onPress={() => this.props.navigateToPage(false, BottomNavigator.TABS.ShoutOut)}/>

          <ButtonNavigationActionNoColor
            key="Alarm"
            icon={
              <TouchableOpacity>
                <Image
                  /* eslint-disable global-require */
                  style={IconStyle}
                  source={require('../../res/img/ic_alarm.png')}/>
              </TouchableOpacity>
            }
            label={ BottomNavigator.TABS.Alarm}
            onPress={() => this.props.navigateToPage(false, BottomNavigator.TABS.Alarm)}/>

          <ButtonNavigationActionNoColor
            key="Services"
            icon={
              <TouchableOpacity>
                <Image
                  /* eslint-disable global-require */
                  style={IconStyle}
                  source={require('../../res/img/ic_services.png')}/>
              </TouchableOpacity>
            }
            label={BottomNavigator.TABS.Alarm}
            onPress={() => this.props.navigateToPage(false, BottomNavigator.TABS.Service)}/>
      </BottomNavigation>
    );
  }
}

/**
 * Because the original class would pass color prop to the <View> class in <Icon>
 * we use this class to overwrite the renderIcon method to drop the color props to prevent the invalid props warning.
 */
class ButtonNavigationActionNoColor extends BottomNavigation.Action {
  renderIcon(styles) {
    const { icon } = this.props;

    delete styles.icon.color;
    let element;
    if (React.isValidElement(icon)) {
      // we need icon to change color after it's selected, so we send the color and style to custom element
      element = React.cloneElement(icon, {});
    } else {
      element = <Icon name={icon} style={styles.icon}/>;
    }
    return element;
  }
}

const IconStyle = {
  height: UiConstant.bottomNavigationIconDimension,
  width: UiConstant.bottomNavigationIconDimension,
  tintColor: SharedStyle.primaryColor
};

MainBottomNavigation.propTypes = {
  navigateToPage: PropTypes.func.isRequired,
  paging: PropTypes.object.isRequired,
};

export default MainBottomNavigation;