import { StyleSheet } from 'react-native';

export const SharedStyle = {
  primaryColor: '#F26522',
  lightColor: '#FF7F3C',
  messageBackground: '#FFA726',
  accentColor: '#003F52',
  textColorPrimary: '#FFFFFF',
  textColorPrimaryReverse: '#003F52',
  disabledColor: '#7e7e7e',
  mapSecondaryColor: '#1C679F',
  radioUnselectedColor: '#8E8E8E',
  splashBackground: '#E27044',
  background: '#F5FCFF',
  buttonBackground: '#D3D3D3',

  style: {
    button: {
      color: '#F17133',
    },
    separator: {
      alignSelf: 'stretch',
      height: StyleSheet.hairlineWidth,
      backgroundColor: '#8E8E8E',
      marginBottom: 1, // Without it the separator can be invisible
    },
  },
};

export const UiConstant = {
  bottomNavHeight: 56,
  bottomNavigationIconDimension: 30,
  toolbarHeight: 56,
  statusbarHeight: 0,
  totalTopSpace: 56,
  bottomSpace: 0, // For iPhoneX
}