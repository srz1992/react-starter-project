import React, {Component} from 'react';
import {Platform, Text, View, AppRegistry, ListView, StyleSheet} from 'react-native';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

const users = [
    {name:'Sean'},
    {name:'Grace'},
    {name:'Denny'},
    {name:'Hannah'},
    {name:'James'},
    {name:'Mary'},
    {name:'Lauren'},
    {name:'Robert'},
]

export default class Component4 extends Component {
  
constructor(){
    super();
    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2})
    this.state = {
        userDataSource: ds.cloneWithRows(users)
    }
}  

renderRow = (user, sectionId, rowId, highlightRow) => {
   return ( 
    <View style={styles.row}> 
        <Text style={styles.rowText}>{user.name}</Text>
    </View>
    )
}

  
render() {
    return (
      <ListView 
        dataSource={this.state.userDataSource}
        renderRow={this.renderRow}
      />
    );
  }
}

const styles = StyleSheet.create({
    row: {
        flexDirection: 'row',
        justifyContent: 'center',
        padding: 10,
        backgroundColor: '#f4f4f4',
        marginBottom: 3
    },
    rowText: {
        flex: 1
    }
})

AppRegistry.registerComponent('Component4', ()=> Component4)