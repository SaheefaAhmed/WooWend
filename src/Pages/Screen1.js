import React, { Component } from 'react';
import { Text, View, StyleSheet,FlatList, Button , TouchableOpacity } from 'react-native';
import Dashboard from 'react-native-dashboard';

const items = [

 { name: 'Book Ride', background: '#D0B3D0', icon: 'car' },

];

export default class Screen1 extends Component {
  _card = el => {
    console.log('Card: ' + el.name)
    this.props.navigation.navigate("MainApp");
  };
  state = {
    data:[],
  };
  componentWillMount() {
    this.fetchData();
  }

  fetchData = async () => {
    const response = await fetch("https://randomuser.me/api?results=500");
    const json = await response.json();
    this.setState({ data: json.results });
  };

  render() {
    
    return (
 
      <View style={styles.container}>
        
       <Dashboard items={items} background={true} card={this._card} column={2} />
        <View style= {styles.list}>
        <FlatList data={this.state.data} 
        keyExtractor={(x, i) =>i}
        renderItem={({item}) => 
        <Text style = {styles.text}>
          {`${item.name.first} ${item.name.last}`}
        </Text>}
        />
        </View>
        
      </View>
      
    );
    
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 2,
    marginLeft:60,
    marginRight:60,
  },
  list: {
    flex: 1,
    marginTop:-150,
    fontSize:20,
    
    
  },
  text:{
    fontSize:10,
    color:'#FFFFFF',
    fontFamily:'Times New Roman',
    paddingLeft:40,
    paddingRight:40,
    paddingTop:20,
    paddingBottom:20,
    color:'black',
    borderColor: 'black',
    borderWidth: 1
  }
});