/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableHighlight,
  Navigator
} from 'react-native';

import Root from './app/views/root'
import Landingpage from './app/views/home'
import Register from './app/views/register'
import SignIn from './app/views/signin'





class urbanservices extends Component {

renderScene(route,navigator){
  
  if(route.name == 'root'){
      return <Root  navigator={navigator}/>
    }

  if(route.name == 'home'){
      return <Landingpage  navigator={navigator}/>
    }
  
  
  if(route.name == 'register'){
      return <Register  navigator={navigator}/>
    }

  if(route.name == 'signin'){
    return <SignIn  navigator={navigator}/>
  }

  
}

configureScene(route){

if(route.name == 'signin'){
    return Navigator.SceneConfigs.FloatFromLeft
  }

}


  render() {
    return (
      <Navigator 
      style = {styles.mainscreen}
      initialRoute={{name:'root'}}
      renderScene={this.renderScene.bind(this)}
      //configureScene={()=>{return Navigator.SceneConfigs.FloatFromRight}}   
      configureScene={this.configureScene.bind(this)}    
      />
    
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
    margin:30
  },
});

AppRegistry.registerComponent('urbanservices', () => urbanservices);