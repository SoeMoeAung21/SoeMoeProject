import React from 'react';
import { StyleSheet, Text, View, Image, ScrollView, Slider, Switch, TextInput, Button, Dimensions, ActivityIndicator, Animated, FlatList, TouchableHighlight  } from 'react-native';
import { Actions } from 'react-native-router-flux';
import styles from './styles/testPopUpStyle'
//imported sences
var photo = require('./Images/ProfileImage.png')

export default class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {

    };
  }

 componentDidMount(){

 }

 render() {
   return (

      <View style={styles.container}>
        <Text> lkl;ksfa</Text>
        <Button onPress={()=>this.back()} title="Back"/>
      </View>

   )
 }
back(){
  Actions.pop()
}


}//End of APP class
