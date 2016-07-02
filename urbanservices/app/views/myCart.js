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
  Navigator,
  ListView,
  ScrollView,
  Image,
  Dimensions,
  alert
} from 'react-native';

import Firebase from 'firebase';

const window = Dimensions.get('window');

const FirebaseURL = "https://todoappmuneer.firebaseio.com/production/products/"
var ref = new Firebase(FirebaseURL)
var AlertTile = "Thank You"
var 

class MyCart extends Component {

onCheckout(){
  Alert.alert()
}

/*
<Image
              style = {styles.dpImage}
              source = {{uri: this.props.rowData.imageurl}}
              resizeMode = {Image.resizeMode.contain}
          
          />

        <Text>{this.props.rowData.sku}</Text>
        <Text>{this.props.rowData.name}</Text>


*/
  render(){
    return(

     <View style={styles.container}>

       <View style={styles.cartItemsWrapper}>
              <View style={styles.cartItemsImageWrapper}>
              <Image
              style = {styles.dpImage}
              source = {{uri: 'http://4.imimg.com/data4/OF/BI/MY-23505475/mineral-water-can-250x250.jpg'}}
              resizeMode = {Image.resizeMode.contain}
          
            />
              </View>
              <View style={styles.cart}>
              <Text style={{fontSize:18,fontWeight:'bold',marginBottom:10}}>AquaFina - 25 Ltr</Text>
              
              <Text style={{textAlign:'center'}}>Reverse osmosised hygeninc mineral water from aquafina</Text>
              <Text style={{color:'red',marginTop : 20,fontSize : 18}}>Rs . 80</Text>
              </View>

                

       </View>

        <TouchableHighlight 
                style={[styles.Button,styles.SkipButton]}
                onPress = 
                {this.onCheckout.bind(this)}

                >
                <Text style={styles.ButtonText}> Check Out</Text>
                </TouchableHighlight>

    
    </View>
    );

  }


}





const styles = StyleSheet.create({
  container: {
    flex: 1,
    //justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5F5F5',
    flexDirection : 'column'
    
  },
  dpImage:{
    width : 120,
    height : 140,
    alignSelf:'center'
    
  },
  cartItemsWrapper:{
    flexDirection : 'row',
    //borderColor : '#FAFAFA',
    //borderWidth : 1,
    width:window.width*0.95,
    height : 150,
    backgroundColor : '#FFFFFF',
    marginTop : 20
    
    //marginLeft : 20,
    //marginRight : 20
    //alignSelf : 'center'
  },
  cartItemsImageWrapper:{
    flex : 5,
    //borderColor : 'red',
    //borderWidth : 1
  },
  cart:{
    flex : 8,
    //borderColor : 'green',
    //borderWidth : 1,
    marginTop : 20,
    alignItems : 'center'
  },
  Button : {
  flexDirection : 'column',
  alignItems : 'center',
  width: window.width * 0.95, 
  backgroundColor : '#039BE5', 
  height : 45,
  borderColor : '#039BE5',
  borderWidth : 3,
  borderRadius : 0.5,
  justifyContent : 'center',
  marginBottom :10,
  marginTop : 10
  
  },
  ButtonText:{
    fontSize : 16,
    fontWeight : 'bold',
    color : 'white'
  }
  
});


export default MyCart
