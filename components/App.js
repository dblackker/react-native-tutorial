import React, { Component } from 'react';
import { ListView, Image, Text, View } from 'react-native';
import favicon from '../img/favicon.png';

class App extends Component {
  constructor(props) {
    super(props);
    const ds = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2,
    });
    this.state = {
      dataSource: ds.cloneWithRows([
        {
          name: 'Daniel',
          profileImg: favicon,
        },
        {
          name: 'Nicholas',
          profileImg: favicon,
        },
        {
          name: 'Joshua',
          profileImg: favicon,
        },
        {
          name: 'Karen',
          profileImg: favicon,
        },
        {
          name: 'Adaline',
          profileImg: favicon,
        },
        {
          name: 'Paul',
          profileImg: favicon,
        },
        {
          name: 'Peter',
          profileImg: favicon,
        },
        {
          name: 'Amos',
          profileImg: favicon,
        },
        {
          name: 'Abraham',
          profileImg: favicon,
        },
        {
          name: 'Isaac',
          profileImg: favicon,
        },
        {
          name: 'Jacob',
          profileImg: favicon,
        },
        {
          name: 'Samuel',
          profileImg: favicon,
        },
        {
          name: 'Elijah',
          profileImg: favicon,
        },
        {
          name: 'Nathaniel',
          profileImg: favicon,
        },
      ]),
    };
  }

  render() {
    return (
      <View style={{ paddingTop: 22 }}>
        <ListView
          dataSource={this.state.dataSource}
          renderRow={rowData =>
            <View
              style={{
                flex: 1,
                flexDirection: 'column',
                justifyContent: 'space-between',
                alignItems: 'center' }}
            >
              <Text style={{ flex: 1 }}>{rowData.name}</Text>
              <Image source={rowData.profileImg} />
            </View>
          }
        />
      </View>
    );
  }
}

export default App;
