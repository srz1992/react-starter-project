import React, {Component} from 'react';
import {AppRegistry, Text, View, NavigatorIOS} from 'react-native';
import { createStackNavigator } from 'react-navigation';
import Component1 from './Component1/Component1';
import Component2 from './Component2/Component2';
import Component3 from './Component3/Component3';
import Component4 from './Component4/Component4';
import Component5 from './Component5/Component5';
import Component6 from './Component6/Component6';
import StatusBar from './StatusBar';

class MyApp extends Component {

    render(){
        return(
            <View>
                <StatusBar />
                <Component5 />
                <Component6/>
            </View>
        );
    }
}

export default createStackNavigator({
    Home: {
        screen: MyApp
    }
})

AppRegistry.registerComponent('MyApp', ()=> MyApp)
