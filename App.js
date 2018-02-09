import React from 'react';
import { StyleSheet, Text, View, Image, ScrollView, Slider, Switch, TextInput, Button } from 'react-native';

export default class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      sliderValue: 0,
      isSwitchOn: true,
      switchTextVar: 'Switch On',
      textInputResult: '',
      buttonTitle: 'Click to hide',
      imageHeight: 100,
      imageAppearText: 'Image is showing',
      imageColor: '#00ff00'
    };
  }


  render() {
    return (
      <View style={styles.mainContainer}>
        <View style={styles.uppeContainer}>
          <Text style={styles.projectName}>SoeMoe Project</Text>
          <Image style={[styles.soemoeImage, {height: this.state.imageHeight}]}
          source={require('./Images/yatanarpon.jpg')}/>
        </View>
        <ScrollView contentContainerStyle={styles.scrollContainer}>
            <Text style={styles.point}>{this.state.sliderValue}</Text>
            <Slider maximumValue={100} minimumValue={0} value={this.state.sliderValue} style={styles.slider} thumbTintColor={'#000000'} onValueChange={(value)=> this.sliderValueChangeHandler(value)}></Slider>
            <Text style={styles.switchText}>{this.state.switchTextVar}</Text>
            <Switch value={this.state.isSwitchOn} onValueChange={(value)=> this.switchValueChange(value)} tintColor={'red'}/>
            <View style={styles.textInputContainer}>
              <Text style={styles.labelname}>Enter Your Name</Text>
              <TextInput style={styles.textInputText} onChangeText={(text)=> this.textIntputHandler(text)} returnKeyLabel={'Ok'} placeholder={'Enter Your Name'}>
              </TextInput>
            </View>
            <Text style={styles.labelresult}>{this.state.textInputResult}</Text>
            <Button  onPress={()=> this.buttonValueChange()} title={this.state.buttonTitle} color="#000000" />
            <Text style={[styles.imageShowingText, {color: this.state.imageColor}]}>{this.state.imageAppearText}</Text>
        </ScrollView>
      </View>

    );
  }

  sliderValueChangeHandler(value){
    this.setState({
      sliderValue: value
    })

  }

  switchValueChange(value){
    this.setState({
      isSwitchOn: value
    })
    if(value){
      this.setState({
        switchTextVar : 'Switch is on'
      })
    }else{
      this.setState({
        switchTextVar : 'Switch is off'
      })
    }
  }
  textIntputHandler(text){
    this.setState({
      textInputResult: text
    })
  }

  buttonValueChange(){
    if(this.state.buttonTitle === 'Click to hide'){
      this.setState({
        buttonTitle: 'Click to show',
        imageHeight: 0,
        imageAppearText: 'Image is hiding',
        imageColor: '#ff0000'
      })
    }else{
      this.setState({
        buttonTitle: 'Click to hide',
        imageHeight: 100,
        imageAppearText: 'Image is showing',
        imageColor: '#00ff00'
      })
    }
  }
}//End of APP class


const styles = StyleSheet.create({
  mainContainer:{
    flex:1,
  },
  uppeContainer: {
    flex: 0.3,
    backgroundColor: '#000000',
    alignItems: 'center',
    justifyContent: 'center',
  },
  projectName: {
    marginBottom: 10,
    fontSize: 20,
    fontWeight: 'bold',
    color: '#555555'
  },
  soemoeImage:{
    width: 300,
    height: 100
  },
  scrollContainer:{
    alignItems: 'center',

  },
  point:{
    marginTop: 30,
    marginBottom: 30
  },
  slider:{

    width: 300,
    height: 20
  },
  switchText:{

    marginTop: 30,
    fontSize: 20,
    fontWeight: 'bold',
    color: '#0000ff'
  },
  textInputContainer:{
    alignItems: 'center',
    flexDirection:'row'
  },
  textInputText:{
    marginLeft: 5,
    height: 30,
    width: 200,
    borderWidth: 2,
    borderColor: '#090909'
  },
  imageShowingText:{

  }
});
