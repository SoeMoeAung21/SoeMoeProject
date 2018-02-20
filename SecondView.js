import React from 'react';
import { StyleSheet, Text, View, Image, ScrollView, Slider, Switch, TextInput, Button, Dimensions, ActivityIndicator, Animated  } from 'react-native';
import { Actions } from 'react-native-router-flux';
import styles from './styles/SecondStyle'
//imported sences


export default class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      userNameTextResult: '',
      passwordTextResult: '',
      outputMessage: ''
    };
  }

 componentDidMount(){

 }

  render() {
    return (
      <View style={styles.secondViewStyle}>
      <TextInput style={styles.testInputUserName} onChangeText={(userName)=> this.userNameTestInputHandler(userName)} placeholder={'User Name'}  returnKeyLabel={'Ok'}>
      </TextInput>
      <TextInput style={styles.testInputPassword}  onChangeText={(password)=> this.passwordTestInputHandler(password)} placeholder={'Password'} secureTextEntry={true}  returnKeyLabel={'Ok'}>
      </TextInput>
      <Text style={styles.userNameTestStyle}>{this.state.outputMessage}</Text>
      <Button onPress={()=> this.loggingIn()} title='Log In'/>
      <Button onPress={()=> this.dogPage()} title='Go to Dog Page'/>
      <Button onPress={()=> this.testingPage()} title='Go to test Page'/>
      <Button onPress={()=> this.lightBoxTesting()} title='LightBox'/>
      </View>

    );
  }

  goToThirdView(){
    Actions.thirdView()
  }

  userNameTestInputHandler(userName){
    this.setState({
      userNameTextResult: userName
    })
  }

  passwordTestInputHandler(password){
    this.setState({
      passwordTextResult: password
    })
  }

  loggingIn(){
    if(this.state.userNameTextResult ==='Beckham' && this.state.passwordTextResult ==='England'){
      this.goToThirdView()
    }else{
      this.setState({
        outputMessage: 'Incorrect Username or Password!'
      })
    }
  }
  dogPage(){
    Actions.dogPage()
  }
  testingPage(){
    Actions.testPage()
  }
  lightBoxTesting(){
    Actions.testPopUp()
  }
}//End of APP class
