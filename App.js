import React from 'react';
import { StyleSheet, Text, View, Image, ScrollView, Slider, Switch, TextInput, Button, Dimensions, ActivityIndicator, Animated  } from 'react-native';
import { Router, Scene, Modal, Lightbox } from 'react-native-router-flux';

//imported sences
import HomeView from './Home';
import SecondView from './SecondView' ;
import ThirdView from './ThirdView';
import PersonalView from './PersonalView';
import DogSale from './DogSale';
import DogDetail from './DogDetail';
import TestPage from './TestPage';
import ViewDetail from './ViewDetail';
import testPopUp from './testPopUp';

export default class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {

    };
  }

 componentDidMount(){


 }



  render() {
    return (
      <Router>
        <Lightbox>

          <Scene key='root'>
            <Scene key='home' title='Home' component={HomeView} initial={true} />
            <Scene key='secondView' title='Second View' component={SecondView}/>
            <Scene key='thirdView' title='Third View' component={ThirdView}/>
            <Scene key='personalView' component={PersonalView}/>
            <Scene key='dogPage' title='Dogs for Sale' component={DogSale}/>
            <Scene key='dogDetail' component={DogDetail}/>
            <Scene key='testPage' title='Test Page' component={TestPage}/>
            <Scene key='viewDetail' title='View Detail' component={ViewDetail}/>
          </Scene>

          <Scene key='testPopUp' component={testPopUp}/>
        </Lightbox>
      </Router>

    );
  }

}//End of APP class
