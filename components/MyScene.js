import React, { Component } from 'react';
import { Text, View, TouchableHighlight } from 'react-native';

export default class MyScene extends Component {

  render() {
    return (
      <View>
        <Text>Current Scene: {this.props.title}</Text>
        <TouchableHighlight onPress={this.props.onForward}>
          <Text>Tap me to load the next scene</Text>
        </TouchableHighlight>
        <TouchableHighlight onPress={this.props.onBack}>
          <Text>Tap me to go back</Text>
        </TouchableHighlight>
      </View>
    );
  }
}

MyScene.propTypes = {
  title: React.PropTypes.string.isRequired,
  onForward: React.PropTypes.func.isRequired,
  onBack: React.PropTypes.func.isRequired,
};

MyScene.defaultProps = {
  title: 'Nada',
};
