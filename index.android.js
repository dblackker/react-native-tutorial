import React, { Component } from 'react';
import { AppRegistry, Text } from 'react-native';

class AwesomeProject extends Component {
  render() {
    return (
      <Text>Hello world!</Text>
    );
  }
}

AppRegistry.registerComponent('AwesomeProject', () => AwesomeProject);
