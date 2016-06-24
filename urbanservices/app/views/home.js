'use strict'
import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableHighlight,
  BackAndroid,
  AsyncStorage
} from 'react-native';





class LandingPage extends Component {

  onSignInPress(){
     this.props.navigator.push({name : 'signin',transitionStyle : 'Navigator.SceneConfigs.FloatFromBottom'});
  }

  render() {

    return (
      <View style={styles.container}>
      <Text>LandingPage</Text>
            <TouchableHighlight onPress={this.onSignInPress.bind(this)}>
            <Text>Sign In</Text>
            </TouchableHighlight>

      </View>


        
      
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  }
 
});

export default LandingPage
