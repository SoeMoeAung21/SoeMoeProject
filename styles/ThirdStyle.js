import React from 'react';
import { StyleSheet, Text, View, Image, ScrollView, Slider, Switch, TextInput, Button, Dimensions } from 'react-native';
var device = Dimensions.get('window');

const styles = StyleSheet.create({
  flatListstyle:{
    alignItems: 'center',
    justifyContent: 'center',
  },
  firstView:{
    backgroundColor: '#dddddd',
    borderWidth: 1,
    borderRadius: 5,
    marginTop: 5,
    marginBottom: 5,
    width: device.width - 30,
    flexDirection:'row',

  },
  firstNestedView:{
    alignItems: 'center'
  },
  iconStyle:{
    height: 65,
    width: 65,
    marginRight: 10
  },
  ageStyle:{

  },
  descriptionStyle:{
    width: device.width - 105
  }
});

export default styles;
