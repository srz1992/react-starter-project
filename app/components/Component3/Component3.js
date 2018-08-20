import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, AppRegistry, TextInput, Switch} from 'react-native';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

export default class Component3 extends Component {
  
constructor(){
    super();
    this.state = {
        textValue: 'Hello',
        switchValue: false
    }
}  

handleChangeFor = propName => async(event) => {
    console.log('handleChangeFor. propName:', propName);
    console.log('event:', event);
    
    await this.setState({
        ...this.state,
        [propName]: event
    })
    console.log('this.state:', this.state)
}

onSubmit = () => {
    console.log('Input Submitted');
    
}

onSwitchchange = (value) => {
    console.log('onSwitchChange. value:', value);
    this.setState({
        ...this.state,
        switchValue: value
    })
}
  
render() {
    return (
      <View>
          <TextInput
            placeholder="Enter Text"
            value={this.state.textValue}
            onChangeText={this.handleChangeFor("textValue")}
            onSubmitEditing={this.onSubmit}
          />
        <Text>{this.state.textValue}</Text>
        <Switch 
        value={this.state.switchValue}
        onValueChange={(value)=>this.onSwitchchange(value)}
        />
      </View>
    );
  }
}

AppRegistry.registerComponent('Component3', ()=> Component3)