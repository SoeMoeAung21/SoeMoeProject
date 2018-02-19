import React from 'react';
import { StyleSheet, Text, View, Image, ScrollView, Slider, Switch, TextInput, Button, Dimensions, ActivityIndicator, Animated, FlatList, TouchableHighlight  } from 'react-native';
import { Actions } from 'react-native-router-flux';
import styles from './styles/DogSaleStyle'

//imported sences
var bulldog = require('./Images/bulldog.jpg')
var husky = require('./Images/husky.jpg')
var pug = require('./Images/pug.jpg')
var saluki = require('./Images/saluki.jpg')
var doberman = require('./Images/doberman.jpg')
var bullTerrier = require('./Images/bullTerrier.jpg')

export default class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      listData : [
                  {key: 1, name : "Gucci", age: 4, type: 'Bulldog', color : 'Gray', characteristic: 'Bulldogs have a longstanding association with British culture, as the BBC wrote: "to many the Bulldog is a national icon, symbolising pluck and determination."[7] During World War II, Bulldogs were often likened to Prime Minister Winston Churchill and his defiance of Nazi Germany.[8] When the English immigrated to America, their Bulldog came with them. A few dedicated bulldog fanciers formed the Bulldog Club of America in 1890 and it was incorporated under the laws of the State of New York on November 29, 1904. ', Price: '300,000', status: 'Bulldogs have a tendency towards a variety of health problems including heart problems, skin problems, and hip dysplasia. ... After weighing the advantages and disadvantages of owning a Bulldog, you can better decide whether this dog breed will fit into your home and lifestyle.', icon: bulldog, },
                  {key: 2, name : "Gucci", age: 4, type: 'Husky', color : 'Gray', characteristic: 'The Siberian Husky is a beautiful dog breed with a thick coat that comes in a multitude of colors and markings. Their blue or multi-colored eyes and striking facial masks only add to the appeal of this breed, which originated in Siberia. ', Price: '300,000', status: 'The Siberian Husky Dog Breed has a personality and temperament that is playful and energetic. As intelligent dogs, Huskies have been known to be mischievous and they are easily bored', icon: husky, },
                  {key: 3, name : "Gucci", age: 3, type: 'Pug', color : 'Gray', characteristic: 'The Pug is a breed of dog with physically distinctive features of a wrinkly, short-muzzled face, and curled tail. The breed has a fine, glossy coat that comes in a variety of colours, most often fawn or black, and a compact square body with well-developed muscles.', Price: '300,000', status: 'The general rendering process of Pug is simple. pug.compile() will compile the Pug source code into a JavaScript function that takes a data object (called “ locals ”) as an argument. ', icon: pug, },
                  {key: 4, name : "Gucci", age: 5, type: 'Saluki', color : 'Gray', characteristic: 'The Saluki, also known as Persian Greyhound or Tazi, is a dog originally bred in the Fertile Crescent. The Saluki is classed as a sighthound and is typically deep-chested and long-legged. Salukis are "sight" hounds—hunting by sight—and run their quarry down to kill or retrieve it.', Price: '300,000', status: 'the Saluki is an avid hunter and possesses the strength and endurance to chase quarry over long distances and difficult terrain.', icon: saluki, },
                  {key: 5, name : "Gucci", age: 2, type: 'Doberman', color : 'Gray', characteristic: 'The Dobermann to most of the world or Doberman Pinscher as it is known in the United States and Canada, is a medium-large breed of domestic dog originally developed around 1890 by Karl Friedrich Louis Dobermann, a tax collector from Germany. ', Price: '300,000', status: 'A square, medium-sized dog, the Doberman Pinscher is muscular and possesses great endurance and speed. He is elegant in appearance and reflects great nobility and temperament. The properly bred and trained ', icon: doberman, },
                  {key: 6, name : "Gucci", age: 3, type: 'Bull Terrier', color : 'Gray', characteristic: 'The Bull Terrier is a breed of dog in the terrier family. There is also a miniature version of this breed which is officially known as the Miniature Bull Terrier. Contents. [hide]. 1 Appearance; 2 Temperament; 3 Health; 4 History; 5 In popular culture; 6 See also; 7 References; 8 External links', Price: '300,000', status: 'the Bull Terrier is best described as a three-year-old child in a dog suit. Given his muscular build, the Bull Terrier can appear unapproachable, but he is an exceedingly friendly dog, with a sweet ', icon: bullTerrier, },
                  {key: 7, name : "Gucci", age: 4, type: 'Punk', color : 'Gray', characteristic: '', Price: '300,000', status: '', icon: bullTerrier, },
                  {key: 8, name : "Gucci", age: 4, type: 'Punk', color : 'Gray', characteristic: '', Price: '300,000', status: '', icon: pug, },
                  {key: 9, name : "Gucci", age: 4, type: 'Punk', color : 'Gray', characteristic: '', Price: '300,000', status: '', icon: doberman, },
                  {key: 10, name : "Gucci", age: 4, type: 'Punk', color : 'Gray', characteristic: '', Price: '300,000', status: '', icon: husky, },
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
      <TouchableHighlight onPress={()=> this.dogDetail(item)}>
        <View style={styles.firstView}>
          <View style={styles.firstNestedView}>
            <Image style={styles.iconStyle} source={item.icon}/>
          </View>
          <View style={styles.secondNestedView}>
            <Text style={styles.nameStyle}>{item.name}</Text>
            <Text style={styles.ageStyle}>{item.age}</Text>
            <Text style={styles.colorStyle}>{item.color}</Text>
            <Text style={styles.priceStyle}>{item.Price}</Text>
          </View>
        </View>
      </TouchableHighlight>
    )
  }

  goingBack(){
    Actions.pop()
  }

  dogDetail(item){
  Actions.dogDetail({dogInfo: item, title: item.name})
  }

}//End of APP class
