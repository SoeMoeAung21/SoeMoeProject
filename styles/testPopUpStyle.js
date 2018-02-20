import React from 'react';
import { StyleSheet, Text, View, Image, ScrollView, Slider, Switch, TextInput, Button, Dimensions } from 'react-native';
var device = Dimensions.get('window');

const styles = StyleSheet.create({

container:{

    position: 'absolute',
    top: (device.height -200)/2,
    bottom: 0,
    left: 50,
    right: 50,
    backgroundColor: 'red',
    justifyContent: 'center',
    alignItems: 'center',
    width: device.width - 100,
    height: 200
}
});

export default styles;
