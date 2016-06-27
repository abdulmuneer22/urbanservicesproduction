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
  ListView
} from 'react-native';

import Firebase from 'firebase';

const FirebaseURL = "https://todoappmuneer.firebaseio.com/production/products/"
var ref = new Firebase(FirebaseURL)

var newSet = [{name:'C'},{name:'D'},{name:'E'}]

class WaterCan extends Component {
constructor(props){
  super(props);
    //var ds =  new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    //newSet.push({name:'F'})
    this.getProductDataToArray()
    //console.log(_array.val())

    this.state = {
      //dataSource : ds.cloneWithRows([{name:'A'},{name : 'B'}])
      //dataSource : ds.cloneWithRows(newSet)

      dataSource : new ListView.DataSource({
        rowHasChanged: (r1, r2) => r1 !== r2,

      })
      }

    }


getProductDataToArray(){
  //console.log(ref.val())
 var newRef = new Firebase(FirebaseURL)

 newRef.on('value',(snap)=>{
   console.log(snap.val())
   var items = [] // We need a set here not array
   
   snap.forEach((child)=>{
     //console.log(child.productTitle)
            items.push({
              name : child.val().productTitle
              
            })

            })

  this.setState({
        dataSource: this.state.dataSource.cloneWithRows(items)
      });
  

   

 })


}


  render(){
    return(

     <View>
     
      <ListView
        dataSource = {this.state.dataSource}
        renderRow = {(rowData)=><Text>{rowData.name}</Text>}
      />
    
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
    margin:30
  },
});


export default WaterCan
