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

var ConditionalView = null



import Dimensions from 'Dimensions'
const window  = Dimensions.get('window')
const windowWidth = window.width

class MainScreen extends Component {
    constructor(props){
    super(props)
    
    this.state = {
    //ACCESS_TOKEN : this.props.accessToken
    }

    }

    navigate(routeName){

    this.props.navigator.push({
    name : routeName
    })

    }

componentWillMount(props){

  var _keysize = String(this.props.accessToken).length
  

  if(_keysize <= 4){
    console.log("Customer Not logged In !!")
    ConditionalView = <View style={{
              flex : 2,
              //borderColor:'red',
              //borderWidth:1
              }} >

              <View style={{
              flex : 1,
              //borderColor:'green',
              //borderWidth:1
              }}>
              </View>



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

              <Text 
              style={{
              textAlign:'center',
              marginLeft:10,
              marginRight:10,
              //marginTop:20,
              marginBottom : 20,
              color:'#80CBC4'}}>
              By continuing using this application, you agree to our Terms & Conditions
              </Text>
              </View>


  }
  //console.log("Access Token is "+this.state.ACCESS_TOKEN)
  /*
  if(this.props.accessToken){
    console.log("yes "+ this.props.accessToken)
  }else{
    console.log("No")
  }*/
}    

    
  
render() {
  
    
    
return (
        <View>
         {ConditionalView}
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
