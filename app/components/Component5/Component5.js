import React, {Component} from 'react';
import {Platform, Text, View, AppRegistry, ListView, StyleSheet} from 'react-native';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

export default class Component5 extends Component {
  
constructor(){
    super();
    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2})
    this.state = {
        userDataSource: ds,
    }
}  

componentDidMount(){
    this.fetchUsers();
}

fetchUsers = () => {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then((response)=> response.json())
    .then((response) => {
        this.setState({
            ...this.state,
            userDataSource: this.state.userDataSource.cloneWithRows(response)
        })
    })
}
  
renderRow = (user, sectionId, rowId, highlightRow) => {
    return ( 
     <View style={styles.row}> 
         <Text style={styles.rowText}>{user.name}: {user.email}</Text>
     </View>
     )
 }

render() {
    return (
      <View>
    <ListView 
        dataSource={this.state.userDataSource}
        renderRow={this.renderRow}
      />
      </View>
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

AppRegistry.registerComponent('Component5', ()=> Component5)