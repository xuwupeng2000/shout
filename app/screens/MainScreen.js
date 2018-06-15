import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';
import MainBottomNavigation from '../components/MainBottomNavigation';
import BottomNavigator from '../components/BottomNavigator';
import { SharedStyle } from '../utils/ui';

class MainScreen extends Component {
  constructor(props, context) {
      super(props, context);

      this.state = {
        active: BottomNavigator.TABS.Account,
      };
  }

  render () {
      return (
      <View style={styles.container}>
        <MainBottomNavigation 
          navigateToPage = {(isSettingOpen, active) => this.navigateToPage(isSettingOpen, active)}
          paging = {{
            active: this.state.active,
            isSettingOpen: false
          }}
        />
      </View>
      );
  }

  navigateToPage(isSettingOpen, active) {
    // log.debug('navigateToPage {0} with {1}', active, this.state.dataFilter);
    // if (active && active !== BottomNavigator.TABS.Settings) {
      this.setState({ active });
    // }

    // if (isSettingOpen === this.state.isSettingOpen) return;
    // if (isSettingOpen) {
    //   this.setState({ active: BottomNavigator.TABS.Settings });
    //   this.settingMenu.openDrawer();
    // } else {
    //   // if its closing the drawer, then we reset the active to previous active one
    //   // which would be in the bottomNavigator's props.
    //   log.debug('restore active: ', this.bottomNavigator.props.activePage);
    //   if (active === BottomNavigator.TABS.Settings) {
    //     this.setState({ active: this.bottomNavigator.props.activePage });
    //   }
    //   this.settingMenu.closeDrawer();
    // }
  }
}

const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: SharedStyle.background,
  },
});

export default MainScreen;