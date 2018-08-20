import React, {Component} from 'react';
import {Platform, Text, View, AppRegistry, ListView, StyleSheet} from 'react-native';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

export default class Component6 extends Component {
  
constructor(){
    super();
    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2})
    this.state = {
        userDataSource: ds,
    }
}  

render() {
    return (
      <View>
          <Text>Details</Text>
      </View>
    );
  }
}



AppRegistry.registerComponent('Component6', ()=> Component6)