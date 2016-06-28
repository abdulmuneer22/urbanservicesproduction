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
//import Landingpage from './app/views/home'
import Register from './app/views/register'
import LogIn from './app/views/login'
import MyAccount from './app/views/myAccount'
import Categories from './app/views/categories'
import WaterCan from './app/views/watercan'
import MainScreen from './app/views/mainScreen'

class urbanservices extends Component {

renderScene(route,navigator){
  
  if(route.name == 'mainScreen'){
      return <MainScreen  navigator={navigator}/>
    }

  
  if(route.name == 'root'){
      return <Root  navigator={navigator}/>
    }

  if(route.name == 'home'){
      return <Landingpage  navigator={navigator}/>
    }
  
  
  if(route.name == 'register'){
      return <Register  navigator={navigator}/>
    }

  if(route.name == 'login'){
    return <LogIn  navigator={navigator}/>
  }

  if(route.name == 'myaccount'){
    return <MyAccount  navigator={navigator} {...route.passProps}/>
  }

if(route.name == 'categories'){
    return <Categories  navigator={navigator} {...route.passProps}/>
  }

if(route.name == 'watercan'){
    return <WaterCan  navigator={navigator} {...route.passProps}/>
  }



  
}

configureScene(route){

  let fromleft = Navigator.SceneConfigs.FloatFromLeft

  switch(route.name){
    case 'login':
      return Navigator.SceneConfigs.FloatFromBottom

    case 'myaccount':
      return Navigator.SceneConfigs.FloatFromLeft  

    case 'register':
      return Navigator.SceneConfigs.VerticalDownSwipeJump 
     
     case 'categories':
      return Navigator.SceneConfigs.HorizontalSwipeJump
    
      case 'watercan':
      return fromleft

      case 'mainScreen':
      return fromleft


  }




}


  render() {
    return (
      <Navigator 
      style = {styles.mainscreen}
      initialRoute={{name:'mainScreen'}}
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
    //justifyContent: 'center',
    //alignItems: 'center',
    backgroundColor: '#F5FCFF',
    margin:10
  },
});

AppRegistry.registerComponent('urbanservices', () => urbanservices);
