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
  AsyncStorage,
  Image
} from 'react-native';

import Dimensions from 'Dimensions'
const window  = Dimensions.get('window')
const windowWidth = window.width

class MainScreen extends Component {


    navigate(routeName){

    this.props.navigator.push({
    name : routeName
    })

    }


  render() {
    return (
      
      //\urbanservices\app\resources\home_bg.png
        <Image style = {styles.homeBgImage}
         source={require('./res/home_bg.png')}>
            
            <View style={styles.topNavBar}>
              <Text style={styles.topNavBarTitle}>Urban Services</Text>
            </View>
            
            <View style={{flex : 1}}>

            <View style={{flex : 1,justifyContent:'center'}} >
              <Text style={styles.homeButtonText}>Services</Text>
            </View>

             <View style={{flex : 1,alignItems:'center'}} >
              
              <TouchableHighlight style={styles.homeButton}>
              <Text style={styles.homeButtonText}>Water Can</Text>
              </TouchableHighlight> 
              
             
            </View>

            <View style={{flex : 1,alignItems:'center'}} >
              <TouchableHighlight style={styles.homeButton}>
              <Text style={styles.homeButtonText}>Laundry</Text>
              </TouchableHighlight>
            </View>

             <View style={{
               flex : 2,
               //borderColor:'red',
               //borderWidth:1
              }} >

              <View style={{
                flex : 1,
                //borderColor:'green',
                //borderWidth:1
              }}>
              <Text style={{textAlign:'center',marginLeft:10,marginRight:10,marginTop:20,color:'#80CBC4'}}>By continuing using this application, you agree to our Terms & Conditions</Text></View>
              
              <View style={{
                flex : 1,
                flexDirection: 'row',
                //borderColor:'green',
                //borderWidth:1,
                marginLeft:30,
                marginRight:30
              }}>
                  <View style={{flex:1}}>
                          <TouchableHighlight 
                          style={styles.SignInButton}
                          onPress={this.navigate.bind(this,'login')}
                          >
                          <Text style={styles.SignInButtonText}>Sign In</Text>
                          </TouchableHighlight>
                  </View>
                  <View style={{flex:1}}>
                      <TouchableHighlight 
                      style={styles.SignInButton}
                      onPress={this.navigate.bind(this,'register')}
                      >
                      <Text style={styles.SignInButtonText}>Register</Text>
                      </TouchableHighlight>
                  </View>
              </View>
              
            </View>
          

            </View>
            
            


        </Image>
      
      
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  homeBgImage : {
    flex : 1,
    width : null,
    height : null,
  },
  topNavBar : {
    height : 50,
    backgroundColor : '#00bcd4',
    elevation : 10,
    justifyContent : 'center'

  },
  topNavBarTitle : {
    alignItems : 'center',
    textAlign : 'center',
    fontSize : 22,
    fontWeight : "bold",
    color : 'white'

  },
  homeButton : {

  width: windowWidth * 0.6, 
  //backgroundColor : 'green', 
  height : 80,
  borderColor : 'white',
  borderWidth : 3,
  borderRadius : 5,
  justifyContent : 'center'

  },
  homeButtonText : {
  fontSize : 28,
  textAlign : 'center',
  color : 'white'
  },


  SignInButton : {

  width: windowWidth * 0.4, 
  //backgroundColor : 'green', 
  height : 50,
  borderColor : 'white',
  borderWidth : 3,
  borderRadius : 3,
  justifyContent : 'center',
  //alignSelf : 'flexEnd'

  },

  SignInButtonText : {
  fontSize : 18,
  textAlign : 'center',
  color : 'white'
  },
});

export default MainScreen
