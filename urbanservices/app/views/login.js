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
import NavigationBar from './NavigationBar'
 

const window = Dimensions.get('window');
const ACCESS_TOKEN = 'access_token'


class LogIn extends Component {

// Constructor
constructor(){
super()
this.state = {
  accessToken : "",
  email : "",
  password : "",
  password_confirmation : "",
  errors:[],
  isLoggedIn : "",
  token : "",
  emptyPassWordEmailError : ""


}

}


redirect(routeName,token){

  this.props.navigator.push(
    {
      name:routeName,
      passProps:{
        accessToken : token
      }
    }
    )


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
    var _accessTokenSize = String(_accessToken).length
    //alert(_accessTokenSize)

    if(String(_accessToken).length > 4){
    this.setState({
      isLoggedIn : true
    })
    //alert(this.state.isLoggedIn)
    this.redirect('mainScreen',this._accessToken)
    }else{

    }
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
  if(!this.state.email || !this.state.password){
    
    this.setState({
      emptyPassWordEmailError : "Email or Password is Empty"
    })
    
    
    //alert("error")
  }else{
    this.setState({
      emptyPassWordEmailError : ""
    })}

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
      switch(error.code){
        case 'INVALID_PASSWORD':
          alert("Incorrect Password Or Email")
          break
        case 'INVALID_USER':
          alert("New User ? Please Register With Us")
          break
        
        default :
          alert(error.code)



      }
      this.removeToken();
    }else
    {
         let token = authData.uid
         //alert(token)
         this.storeToken(token)
         //Update uid to firebase database ? : not necessry


         // Seller is authnticated , redirect him to myaccount page
          this.redirect('mainScreen',token)
    }

    


    }
  );
 }

onSkipPress(){
  this.removeToken();
  var faketoken = "none"
  this.redirect('mainScreen',faketoken)

}

componentWillMount(){
  
  this.getToken()
  if(this.state.isLoggedIn = true){
    //alert("Logged In")
    //this.redirect('mainScreen',this._accessToken)
  }else{
    alert("Not Logged In")
  }
  
}


  render() {
    return (
     <View>
        <NavigationBar title={"Sign In"}/>
     
      <View style={styles.container}>
      <View style={styles.formWrapper}>
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
      style={styles.Button}
      onPress = 
      {this.onSignInPress.bind(this)}

      >
      <Text style={styles.ButtonText}>Login</Text>
      </TouchableHighlight>

      <TouchableHighlight 
      style={[styles.Button,styles.SkipButton]}
      onPress = 
      {this.onSkipPress.bind(this)}

      >
      <Text style={styles.ButtonText}>Skip >> </Text>
      </TouchableHighlight>
      <View>
      {this.state.emptyPassWordEmailError ?(<Text style={{color : '#ff1744'}}>{this.state.emptyPassWordEmailError}</Text>):(<Text></Text>)}
      </View>

      </View>
      </View>
      

</View>

        
      
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    //justifyContent: 'center',
    alignItems: 'center',
    //backgroundColor: '#F5FCFF',
    //height:window.height-100
  },
  formWrapper:
  
  {
    justifyContent:'center',
    marginTop : window.height*0.2

  },

  input :{
      
      alignItems : 'center',
      alignSelf : 'center',
      width : window.width*0.7,
      borderColor : 'red'
  },
  inputWrapper : {
      borderColor : 'red',
      borderWidth : 1

  },
  Button : {
  flexDirection : 'column',
  alignItems : 'center',
  width: window.width * 0.7, 
  backgroundColor : '#039BE5', 
  height : 45,
  borderColor : '#039BE5',
  borderWidth : 3,
  borderRadius : 0.5,
  justifyContent : 'center',
  marginBottom :10,
  marginTop : 10
  
  },
  SkipButton:{
    backgroundColor : '#37474F',
    borderColor : '#37474F'
  },

  ButtonText:{
    fontSize : 16,
    fontWeight : 'bold',
    color : 'white'
  }
 
});

export default LogIn
