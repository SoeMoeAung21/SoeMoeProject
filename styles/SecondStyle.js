import React from 'react';
import { StyleSheet, Text, View, Image, ScrollView, Slider, Switch, TextInput, Button, Dimensions } from 'react-native';
var device = Dimensions.get('window');

const styles = StyleSheet.create({

  secondViewStyle:{
    alignItems: 'center',
    justifyContent: 'center'
  },
  testInputUserName:{
    marginTop: 50,
    height: 30,
    width: 200,
    borderWidth: 2,
    borderColor: '#090909'
  },
  testInputPassword:{
    marginTop: 10,
    height: 30,
    width: 200,
    borderWidth: 2,
    borderColor: '#090909'
  },
  userNameTestStyle:{
    color: '#ff0000',
    marginTop: 10
  }
});

export default styles;
