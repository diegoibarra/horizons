import React from 'react';
var _ = require('underscore');
import {Image, ListView, TouchableOpacity, StyleSheet, Text, View } from 'react-native';
import {StackNavigator} from 'react-navigation'


class App extends React.Component {
  constructor(){
    super();
    this.state = {
    }
  }
  static navigationOptions = (props) =>({
    title: 'Home Page',
    headerRight: <TouchableOpacity onPress={(() => props.navigation.navigate('Page2'))}>
      <Text style={{width: 50, height: 50}}>👉🏽</Text>
    </TouchableOpacity>
  })

  render() {
    return (
      <View style={{alignItems:'center', justifyContent:'center'}}>
        <TouchableOpacity onPress={(() => this.props.navigation.navigate('Page2'))}>
          <Image
              style={{width: 50, height: 50}}
              source={{uri: 'https://facebook.github.io/react-native/docs/assets/favicon.png'}}
          />
        </TouchableOpacity>
        <Text>Click the image to view the next page!</Text>
      </View>
    )
  }
}

class Second extends React.Component {
  static navigationOptions = (props) => ({
    title: 'Second',
    headerRight: <TouchableOpacity onPress={(() => props.navigation.navigate('Page3'))}>
      <Text style={{width: 50, height: 50}}>👉🏽</Text>
    </TouchableOpacity>
  })
  render() {
    return(
      <View style={{justifyContent:"center", alignItems:"center"}}>
        <Text>🤷🏽‍♂️</Text>
      </View>
    )
  }
}

class Third extends React.Component {
  static navigationOptions = (props) => ({
    title: 'Page3',
    headerLeft: <TouchableOpacity onPress={(() => props.navigation.navigate('Page2'))}>
      <Text style={{width: 50, height: 50}}>👈🏽</Text>
    </TouchableOpacity>
  })
  render() {
    return(
      <View style={{justifyContent:"center", alignItems:"center"}}>
        <Text>🏃🏽‍</Text>
      </View>
    )
  }
}

const Navigator = StackNavigator ({
  Home: {screen: App},
  Page2: {screen: Second},
  Page3: {screen: Third}
})

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default Navigator
