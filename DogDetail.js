import React from 'react';
import { StyleSheet, Text, View, Image, ScrollView, Slider, Switch, TextInput, Button, Dimensions, ActivityIndicator, Animated  } from 'react-native';
import { Actions } from 'react-native-router-flux';
import styles from './styles/DogDetailStyle'
//imported sences


export default class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      info: this.props.dogInfo
    };
  }

 componentDidMount(){

 }

  render() {
    return (
      <View>
        <View style={styles.personalFirstView}>
          <Image style={styles.dogImage} source={this.state.info.icon}/>
          <Text style={styles.personalAgeStyle}>Age : {this.state.info.age}</Text>
          <Text style={styles.personalPositionStyle}>{this.state.info.Price}</Text>
        </View>
        <ScrollView style={styles.personalSecondView}>
              <Text style={styles.typeStyle}>Type : <Text style={styles.dogTypeStyle}>{this.state.info.type}</Text></Text>
              <Text style={styles.typeStyle}>Color : <Text style={styles.dogTypeStyle}>{this.state.info.color}</Text></Text>
              <Text style={styles.typeStyle}>Characteristic : <Text style={styles.dogTypeStyle}>{this.state.info.characteristic}</Text></Text>
              <Text style={styles.typeStyle}>Status : <Text style={styles.dogTypeStyle}>{this.state.info.status}</Text></Text>
          </ScrollView>
      </View>
    );
  }


}//End of APP class
