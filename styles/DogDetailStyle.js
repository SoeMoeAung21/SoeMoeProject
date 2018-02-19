import React from 'react';
import { StyleSheet, Text, View, Image, ScrollView, Slider, Switch, TextInput, Button, Dimensions } from 'react-native';
var device = Dimensions.get('window');

const styles = StyleSheet.create({
  personalFirstView:{
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'pink',
  },
  dogImage:{
    width: 120,
    height: 120,
    borderRadius: 50,
  },
  personalAgeStyle:{
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 10,
    marginBottom: 10
  },
  personalPositionStyle:{
    fontSize: 14,
    fontWeight: 'bold',
    marginTop: 0,
    marginBottom: 10
  },
  viewTypeStyle:{
      flexDirection: 'row',
  },
  typeStyle:{
    marginTop: 10,
    fontSize: 16,
    color: 'blue',
    fontWeight: 'bold'
  },
  dogTypeStyle:{
    marginTop: 10,
    fontSize: 12,
    fontWeight: 'bold',
    color: 'white'
  },
  personalSecondView:{
    height: device.height,
    backgroundColor: 'lightgreen',
  },
  dogColorStyle:{

    marginTop: 10,
    fontWeight: 'bold'
  },
  characterStyle:{
    fontSize: 16,
    color: 'blue',
    fontWeight: 'bold'
  },
  dogCharacter:{
    width: device.width - 100,
    marginTop: 10,
    fontWeight: 'bold'
  },
  dogStatus:{
    width: device.width - 60,
    marginTop: 10,
    fontWeight: 'bold'
  }

});

export default styles;
