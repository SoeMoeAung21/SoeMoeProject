import React from 'react';
import { StyleSheet, Text, View, Image, ScrollView, Slider, Switch, TextInput, Button, Dimensions } from 'react-native';
var device = Dimensions.get('window');

const styles = StyleSheet.create({
  mainContainer:{
    flex:1,
  },
  uppeContainer: {
    flex: 0.3,
    backgroundColor: '#000000',
    alignItems: 'center',
    justifyContent: 'center',
  },
  projectName: {
    marginBottom: 10,
    fontSize: 20,
    fontWeight: 'bold',
    color: '#555555'
  },
  soemoeImage:{
    width: device.width,
    height: 100
  },
  scrollContainer:{
    alignItems: 'center',

  },
  point:{
    marginTop: 30,
    marginBottom: 30
  },
  slider:{
    width: device.width - 40,
    height: 20
  },
  switchText:{

    marginTop: 30,
    fontSize: 20,
    fontWeight: 'bold',
    color: '#0000ff'
  },
  textInputContainer:{
    alignItems: 'center',
    flexDirection:'row'
  },
  textInputText:{
    marginLeft: 5,
    height: 30,
    width: 200,
    borderWidth: 2,
    borderColor: '#090909'
  },
  imageShowingText:{

  },
  imageChangingView:{
    flexDirection: 'row'
  }
});

export default styles;
