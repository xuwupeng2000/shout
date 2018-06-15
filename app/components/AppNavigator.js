import { StackNavigator } from 'react-navigation';
import MainScreen from '../screens/MainScreen';

export const navigationName = {
  Main: 'Main',
  Account: 'Account',
  ShoutOut: 'Shout Out',
  Alarm: 'Alarm',
  Service: 'Service'
}

const AppNavigator = StackNavigator({
    Main: { screen: MainScreen }
  }, {
    headerMode: 'none'
  });

export default AppNavigator;