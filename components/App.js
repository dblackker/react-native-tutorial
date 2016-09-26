import React, { Component } from 'react';
import { ScrollView, Image, Text } from 'react-native';
import favicon from '../img/favicon.png';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { text: '' };
  }

  render() {
    return (
      <ScrollView>
        <Text style={{ fontSize: 96 }}>Scroll me plz</Text>
        <Image source={favicon} />
        <Image source={favicon} />
        <Image source={favicon} />
        <Image source={favicon} />
        <Image source={favicon} />
        <Text style={{ fontSize: 96 }}>If you like</Text>
        <Image source={favicon} />
        <Image source={favicon} />
        <Image source={favicon} />
        <Image source={favicon} />
        <Image source={favicon} />
        <Text style={{ fontSize: 96 }}>Scrolling down</Text>
        <Image source={favicon} />
        <Image source={favicon} />
        <Image source={favicon} />
        <Image source={favicon} />
        <Image source={favicon} />
        <Text style={{ fontSize: 96 }}>What's the best</Text>
        <Image source={favicon} />
        <Image source={favicon} />
        <Image source={favicon} />
        <Image source={favicon} />
        <Image source={favicon} />
        <Text style={{ fontSize: 96 }}>Framework around?</Text>
        <Image source={favicon} />
        <Image source={favicon} />
        <Image source={favicon} />
        <Image source={favicon} />
        <Image source={favicon} />
        <Text style={{ fontSize: 80 }}>React Native</Text>
      </ScrollView>
    );
  }
}

export default App;
