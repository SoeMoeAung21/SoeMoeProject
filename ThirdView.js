import React from 'react';
import { StyleSheet, Text, View, Image, ScrollView, Slider, Switch, TextInput, Button, Dimensions, ActivityIndicator, Animated, FlatList, TouchableHighlight  } from 'react-native';
import { Actions } from 'react-native-router-flux';
import styles from './styles/ThirdStyle'

//imported sences
var profileImage = require('./Images/ProfileImage.png')

export default class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      listData : [
                  {key: 1, name : "Mister A", age: 21, position: 'Developer', icon: profileImage, description: 'The simplest use case is to plop down a TextInput and subscribe to the onChangeText events to', ph: '95-995-2810-727', mail: 'pmp@gmail.com', website: 'https://www.pmp.com', },
                  {key: 2, name : "Mister B", age: 31, position: 'Manger', icon: profileImage, description: 'A foundational component for inputting text into the app via a keyboard. Props provide ', ph: '95-995-2810-727', mail: 'pmp@gmail.com', website: 'https://www.pmp.com', },
                  {key: 3, name : "Mister C", age: 34, position: 'Analyst', icon: profileImage, description: 'configurability for several features, such as auto-correction, auto-capitalization, placeholder text, and different configurability for several features, such as auto-correction, auto-capitalization, placeholder text, and different configurability for several features, such as auto-correction, auto-capitalization, placeholder text, and different configurability for several features, such as auto-correction, auto-capitalization, placeholder text, and different configurability for several features, such as auto-correction, auto-capitalization, placeholder text, and different configurability for several features, such as auto-correction, auto-capitalization, placeholder text, and different  ', ph: '95-995-2810-727', mail: 'pmp@gmail.com', website: 'https://www.pmp.com', },
                  {key: 4, name : "Mister D", age: 19, position: 'Junior', icon: profileImage, description: 'Two methods exposed via the native element are .focus() and .blur() that will focus or blur the ', ph: '95-995-2810-727', mail: 'pmp@gmail.com', website: 'https://www.pmp.com', },
                  {key: 5, name : "Mister E", age: 26, position: 'Developer', icon: profileImage, description: 'Note that some props are only available with multiline={true/false}. Additionally, border styles ', ph: '95-995-2810-727', mail: 'pmp@gmail.com', website: 'https://www.pmp.com', },
                  {key: 6, name : "Miss A", age: 27, position: 'Developer', icon: profileImage, description: 'that apply to only one side of the element (e.g., borderBottomColor, borderLeftWidth, etc.) will ', ph: '95-995-2810-727', mail: 'pmp@gmail.com', website: 'https://www.pmp.com', },
                  {key: 7, name : "Miss B", age: 45, position: 'HR', icon: profileImage, description: 'If true, the text field will blur when submitted. The default value is true for single-line fields and ', ph: '95-995-2810-727', mail: 'pmp@gmail.com', website: 'https://www.pmp.com', },
                  {key: 8, name : "Mister Z", age: 39, position: 'Senior Dev', icon: profileImage, description: 'TextInput has by default a border at the bottom of its view. This border has its padding set by the ', ph: '95-995-2810-727', mail: 'pmp@gmail.com', website: 'https://www.pmp.com', },
                  {key: 9, name : "Miss X", age: 28, position: 'Developer', icon: profileImage, description: 'false for multiline fields. Note that for multiline fields, setting blurOnSubmit ', ph: '95-995-2810-727', mail: 'pmp@gmail.com', website: 'https://www.pmp.com', },
                  {key: 10, name : "Mister Y", age: 20, position: 'Junior', icon: profileImage, description: 'pressing return will blur the field and trigger the onSubmitEditing event instead of inserting a newline into the field.', ph: '95-995-2810-727', mail: 'pmp@gmail.com', website: 'https://www.pmp.com', },
                ],

    };
  }

 componentDidMount(){

 }

  render() {
    return (
      <FlatList contentContainerStyle={styles.flatListstyle}
        data={this.state.listData}
        renderItem={({item}) => this.renderListItem(item)}
      />
    );
  }

  renderListItem(item){
    return(
      <TouchableHighlight onPress={()=> this.personalView(item)}>
        <View style={styles.firstView}>
          <View style={styles.firstNestedView}>
            <Image style={styles.iconStyle} source={item.icon}/>
            <Text style={styles.ageStyle}>{item.age}</Text>
          </View>
          <View style={styles.secondNestedView}>
            <Text>{item.position} :: {item.key}</Text>
            <Text style={styles.descriptionStyle}>{item.description}</Text>
          </View>
        </View>
      </TouchableHighlight>
    )
  }

  goingBack(){
    Actions.pop()
  }

  personalView(item){
  Actions.personalView({personalInfo: item, title: item.mail})
  }

}//End of APP class
