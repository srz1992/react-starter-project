import React, {Component} from 'react';
import {AppRegistry, Text, View} from 'react-native';
import Component1 from './Component1/Component1';
import Component2 from './Component2/Component2';
import Component3 from './Component3/Component3';
import StatusBar from './StatusBar';

export default class MyApp extends Component {

    render(){
        return(
            <View>
                <StatusBar />
                <Component3/>
            </View>
        );
    }



}

AppRegistry.registerComponent('MyApp', ()=> MyApp)
