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

 
  render() {

    return (
      <View style={styles.container}>
        <Text>My Account Details</Text>

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
