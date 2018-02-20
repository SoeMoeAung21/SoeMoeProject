import React from 'react';
import { StyleSheet, Text, View, Image, ScrollView, Slider, Switch, TextInput, Button, Dimensions, ActivityIndicator, Animated, FlatList, TouchableHighlight  } from 'react-native';
import { Actions } from 'react-native-router-flux';
import styles from './styles/TestPageStyle'
//imported sences
var photo = require('./Images/ProfileImage.png')

export default class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      testData :[
                {key: 1, name : "View A", age: 21, position: 'Developer', icon: photo, description: 'The simplest use case is to plop down a TextInput and subscribe to the onChangeText events to', ph: '95-995-2810-727', mail: 'pmp@gmail.com', website: 'https://www.pmp.com', },
                {key: 2, name : "View B", age: 31, position: 'Manger', icon: photo, description: 'A foundational component for inputting text into the app via a keyboard. Props provide ', ph: '95-995-2810-727', mail: 'pmp@gmail.com', website: 'https://www.pmp.com', },
                {key: 3, name : "View C", age: 34, position: 'Analyst', icon: photo, description: 'configurability for several features, such as auto-correction, auto-capitalization, placeholder text, and different configurability for several features, such as auto-correction, auto-capitalization, placeholder text, and different configurability for several features, such as auto-correction, auto-capitalization, placeholder text, and different configurability for several features, such as auto-correction, auto-capitalization, placeholder text, and different configurability for several features, such as auto-correction, auto-capitalization, placeholder text, and different configurability for several features, such as auto-correction, auto-capitalization, placeholder text, and different  ', ph: '95-995-2810-727', mail: 'pmp@gmail.com', website: 'https://www.pmp.com', },
                {key: 4, name : "View D", age: 19, position: 'Junior', icon: photo, description: 'Two methods exposed via the native element are .focus() and .blur() that will focus or blur the ', ph: '95-995-2810-727', mail: 'pmp@gmail.com', website: 'https://www.pmp.com', },
                {key: 5, name : "View E", age: 26, position: 'Developer', icon: photo, description: 'Note that some props are only available with multiline={true/false}. Additionally, border styles ', ph: '95-995-2810-727', mail: 'pmp@gmail.com', website: 'https://www.pmp.com', },
                {key: 6, name : "View F", age: 27, position: 'Developer', icon: photo, description: 'that apply to only one side of the element (e.g., borderBottomColor, borderLeftWidth, etc.) will ', ph: '95-995-2810-727', mail: 'pmp@gmail.com', website: 'https://www.pmp.com', },
                {key: 7, name : "View G", age: 45, position: 'HR', icon: photo, description: 'If true, the text field will blur when submitted. The default value is true for single-line fields and ', ph: '95-995-2810-727', mail: 'pmp@gmail.com', website: 'https://www.pmp.com', },
                {key: 8, name : "View H", age: 39, position: 'Senior Dev', icon: photo, description: 'TextInput has by default a border at the bottom of its view. This border has its padding set by the ', ph: '95-995-2810-727', mail: 'pmp@gmail.com', website: 'https://www.pmp.com', },
                {key: 9, name : "View I", age: 28, position: 'Developer', icon: photo, description: 'false for multiline fields. Note that for multiline fields, setting blurOnSubmit ', ph: '95-995-2810-727', mail: 'pmp@gmail.com', website: 'https://www.pmp.com', },
                {key: 10, name : "View J", age: 20, position: 'Junior', icon: photo, description: 'pressing return will blur the field and trigger the onSubmitEditing event instead of inserting a newline into the field.', ph: '95-995-2810-727', mail: 'pmp@gmail.com', website: 'https://www.pmp.com', },
      ]
    };
  }

 componentDidMount(){

 }

 render() {
   return (
     <FlatList contentContainerStyle={styles.flatListstyle}
       data={this.state.testData}
       renderItem={({item}) => this.renderListItem(item)}
       numColumns={3} horizonal={false}
     />
   );
 }

 renderListItem(item){
   return(
      <TouchableHighlight  underlayColor= 'transparent' onPress={()=>this.viewDetail(item)}>
        <View style={styles.firstView}>
         <View style={styles.firstNestedView}>
           <Image style={styles.photoStyle} source={item.icon}/>
           <Text style={styles.nameStyle}>{item.name}</Text>
         </View>
        </View>
      </TouchableHighlight>
   )
 }
 viewDetail(item){
   Actions.viewDetail({title: item.name})
 }


}//End of APP class
