import React from 'react';
import { StyleSheet, Text, View, Image, ScrollView, Slider, Switch, TextInput, Button, Dimensions } from 'react-native';
var device = Dimensions.get('window');

const styles = StyleSheet.create({
  personalFirstView:{
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#9999aa',
  },
  personalInfoStyle:{
    width: 120,
    height: 120,

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
  personalDescriptionStyle:{
    minHeight: 100,
    fontSize: 12,
    fontWeight: 'bold'
  },
  personalSecondView:{
    backgroundColor: '#f0f0f0',
  },
  personalPhoneStyle:{
    marginTop: 10,
    fontWeight: 'bold'
  },
  personalMailStyle:{
    fontWeight: 'bold'
  },
  personalWebsiteStyle:{
    fontWeight: 'bold'
  }

});

export default styles;
