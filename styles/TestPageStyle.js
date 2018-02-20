import React from 'react';
import { StyleSheet, Text, View, Image, ScrollView, Slider, Switch, TextInput, Button, Dimensions } from 'react-native';
var device = Dimensions.get('window');

const styles = StyleSheet.create({
  flatListstyle:{
    width: device.width -20,
    marginLeft: 10,
  },
  firstNestedView: {
    width: (device.width -20)/3,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 10,
    marginBottom: 10
  },
  photoStyle:{
    height: 100,
    width: 100,
  }
});

export default styles;
