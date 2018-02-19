import React from 'react';
import { StyleSheet, Text, View, Image, ScrollView, Slider, Switch, TextInput, Button, Dimensions, ActivityIndicator, Animated  } from 'react-native';
import { Actions } from 'react-native-router-flux';
import styles from './styles/PersonalStyle'
//imported sences


export default class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      info: this.props.personalInfo
    };
  }

 componentDidMount(){

 }

  render() {
    return (
      <View>
        <View style={styles.personalFirstView}>
          <Image style={styles.personalInfoStyle} source={this.state.info.icon}/>
          <Text style={styles.personalAgeStyle}>{this.state.info.age}</Text>
          <Text style={styles.personalPositionStyle}>{this.state.info.position}</Text>
        </View>
        <View style={styles.personalSecondView}>
            <Text style={styles.personalDescriptionStyle}>Decription : {this.state.info.description}</Text>
            <Text style={styles.personalPhoneStyle}>Phone : {this.state.info.ph}</Text>
            <Text style={styles.personalMailStyle}>Email : {this.state.info.mail}</Text>
            <Text style={styles.personalWebsiteStyle}>Website : {this.state.info.website}</Text>
          </View>
      </View>
    );
  }


}//End of APP class
