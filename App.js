import React, { Component } from 'react';
import {ThemeProvider} from 'react-native-material-ui';
import { SharedStyle } from './app/utils/ui';
import AppNavigator from './app/components/AppNavigator';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';

const uiTheme = {
  palette: {
    primaryColor: SharedStyle.primaryColor,
    accentColor: SharedStyle.accentColor
  },

  bottomNavigationAction: {
    containerActive: {
      paddingTop: 8
    },
    labelActive: {
      color: SharedStyle.primaryColor,
      fontSize: 12
    }
  }
}

const App = () => (
  <ThemeProvider uitheme={uiTheme}>
    <AppNavigator />
  </ThemeProvider>
);

export default App;


