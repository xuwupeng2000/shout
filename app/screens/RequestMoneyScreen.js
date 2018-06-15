import React, { Component } from 'react';
import { StyleSheet } from 'react-native';

class RequestMoneyScreen extends Component {
    constructor(props, context) {
        super(props, context);
    }

    render () {
        return (
        <View style={styles.container}>
            <Text>This is request money screen.</Text>
        </View>
        );
    }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});