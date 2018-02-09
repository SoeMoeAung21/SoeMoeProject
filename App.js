import React from 'react';
import { StyleSheet, Text, View, Image, ScrollView, Slider, Switch, TextInput, Button, Dimensions, ActivityIndicator, Animated  } from 'react-native';
var device = Dimensions.get('window');
import styles from './styles/AppStyle'

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
      imageColor: '#00ff00',
      yRotation: '0deg',
      xRotation: '0deg',
      loading: true,
      fadingValue: new Animated.Value(0),
    };
  }

 componentDidMount(){

   setTimeout(() => {
      this.setState({
        loading: false
      })
    this.fadingInImageView();
    }, 4000);
 }

 fadingInImageView(){
   Animated.timing(                  // Animate over time
     this.state.fadingValue,            // The animated value to drive
     {
       toValue: 1,                   // Animate to opacity: 1 (opaque)
       duration: 5000,              // Make it take a while
     }
   ).start();
 }

  render() {
    return (
      <View style={styles.mainContainer}>
        <View style={[styles.uppeContainer, {  transform: [  {scale: 1},{rotateY: this.state.xRotation}, {rotateX: this.state.yRotation}, {perspective: 1000},]}]}>
          <Text style={styles.projectName}>SoeMoe Project</Text>
          {this.renderImageLoadingView()}
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
            <Text style={styles.imageShowingText}>Device Width is : {device.width}</Text>
            <Text style={styles.imageShowingText}>Device Height is : {device.height}</Text>
            <View style={styles.imageChangingView}>
              <Button  onPress={()=> this.xRotationChange()} title="Image rotate to X" color="#000000" />
              <Button  onPress={()=> this.yRotationChange()} title="Image rotate to Y" color="#000000" />
            </View>
            <Button  onPress={()=> this.originalChange()} title="Image original" color="#000000" />
        </ScrollView>
      </View>

    );
  }

  renderImageLoadingView(){
    if(this.state.loading){
      return(
          <ActivityIndicator size="large" color="#ff5555" animating={this.state.loading}/>
      )
    }else{
      return(
        <Animated.Image style={[styles.soemoeImage, {opacity: this.state.fadingValue}, {height: this.state.imageHeight}]}source={require('./Images/yatanarpon.jpg')}/>
      )
    }
  }

  //

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
        switchTextVar : 'Switch is on',
        fadingValue:1
      })
    }else{
      this.setState({
        switchTextVar : 'Switch is off',
        fadingValue:0.5
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
  xRotationChange(){
    if(this.state.xRotation === '0deg'){
      this.setState({
        xRotation: '180deg'
      })
    }else{
      this.setState({
        xRotation: '0deg'
      })
    }
  }
  yRotationChange(){
    if(this.state.yRotation === '0deg'){
      this.setState({
        yRotation: '180deg'
      })
    }else{
      this.setState({
        yRotation: '0deg'
      })
    }
  }
  originalChange(){
    if(this.state.yRotation === '180deg', this.state.xRotation === '1800deg'){
      this.setState({
        yRotation: '0deg',
        xRotation: '0deg'
      })
    }else{
      this.setState({
        yRotation: '0deg',
        xRotation: '0deg'
      })
    }
  }
}//End of APP class
