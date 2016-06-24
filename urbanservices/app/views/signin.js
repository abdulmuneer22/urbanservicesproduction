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
  Dimensions
} from 'react-native';
import Firebase from 'firebase';


const window = Dimensions.get('window');
const ACCESS_TOKEN = 'access_token'


class Register extends Component {

// Constructor
constructor(){
super()
this.state = {
  accessToken : "",
  email : "",
  password : "",
  password_confirmation : "",
  errors:[]


}

}


async storeToken(accessToken){
  try{

    await AsyncStorage.setItem(ACCESS_TOKEN,accessToken)
    this.getToken()

  }catch(error){
    alert("Could not store ACCESS_TOKEN")
  }

}

async getToken(){
  try{

    let _accessToken = await AsyncStorage.getItem(ACCESS_TOKEN)
    console.log(_accessToken)
  }catch(error){
    alert("Could not store ACCESS_TOKEN")
  }

}


async removeToken(accessToken){
  try{

    await AsyncStorage.removeItem(ACCESS_TOKEN,accessToken)
    this.getToken()

  }catch(error){
    alert("Could not remove ACCESS_TOKEN")
  }

}

onSignInPress(){
  
  let app = new Firebase("https://todoappmuneer.firebaseio.com/")
  

  app.authWithPassword({

        'email':this.state.email,
        'password':this.state.password,

        },
  (error,authData) => 
  {
    if(error)
    {
      //alert(error.code)
      this.removeToken();
    }else
    {
         let token = authData.uid
         //alert(token)
         this.storeToken(token)
            
    }

    


    }
  );
 }




  render() {
    return (
      <View style={styles.container}>
      
      <TextInput 
      style={styles.input} 
      placeholder="Email" 
      onChangeText = {(text) => this.setState({email:text})} 
      value={this.state.email}
      />
      
 
      <TextInput 
      style={styles.input} 
      placeholder="Password" 
      secureTextEntry = {true}
      onChangeText = {(text) => this.setState({password:text})} 
      value={this.state.password}
      />

      
      <TouchableHighlight
        onPress = {this.onSignInPress.bind(this)}
      >
      <Text>SignIn</Text>
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
  },
  input :{
      //marginLeft : 10,
      //marginRight : 10,
      //marginBotton : 0,
      //paddingBottom : 0,    
      alignItems : 'center',
      alignSelf : 'center',
      width : window.width*0.7,
      borderColor : 'red'
  },
  inputWrapper : {
      borderColor : 'red',
      borderWidth : 1

  }
 
});

export default Register
