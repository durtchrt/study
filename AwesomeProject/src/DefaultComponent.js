import React, { Component } from 'react';
import { AppRegistry, ListView, View, Text, Image, StyleSheet } from 'react-native';


function getMoviesFromApiAsync(component, ds) {
  return fetch('https://facebook.github.io/react-native/movies.json')
    .then((response) => response.json())
    .then((responseJson) => {
      return responseJson.movies;
    })
    .then((r) => {
      component.setState({dataSource: ds.cloneWithRows(r)});
    })
    .catch((error) => {
      console.error(error);
    });
}

export default class DefaultComponent extends Component {
  constructor(props){
  const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    super(props);
    this.state = {
      dataSource: ds.cloneWithRows([])
    }
    getMoviesFromApiAsync(this, ds);
  }

  render() {
    let pic = {
        uri: 'https://upload.wikimedia.org/wikipedia/commons/d/de/Bananavarieties.jpg'
    };
    return (
      <View>
        <Text> hello </Text>
        <Image source={pic} style={{width:193, height: 110}} />
        <LotsOfGreetings />
        <Blink text="hello world"/>
        <View style={{width: 300, height: 300}} >
          <FlexDimensionsBasics/>
        </View>
        {
          this.state.dataSource.getRowCount() === 0 ? <Text>Loading...</Text> :  <ListView dataSource={this.state.dataSource} renderRow={(rowData) => <Text>{rowData.title}: {rowData.releaseYear}</Text>} />
        }

      </View>
    );
  }
}

class FlexDimensionsBasics extends Component {
  render() {
    return (
      <View style={{flex: 1}}>
        <View style={{flex:1, backgroundColor: 'powderblue'}} />
        <View style={{flex:2, backgroundColor: 'skyblue'}} />
        <View style={{flex:3, backgroundColor: 'steelblue'}} />
      </View>
    )
  }
}

class Blink extends Component {
  constructor(props) {
    super(props);
    this.state = {showText: true};

    setInterval(()=> {
      this.setState({showText: !this.state.showText})
    }, 1000);
  }
  render() {
    let display = this.state.showText ? this.props.text : ' ';
    return (
      <Text style={styles.red}>{display}</Text>
    )
  }
}


class LotsOfGreetings extends Component {
  render() {
    return (
        <View style={{alignItems: 'center'}}>
          <Greeting name='Rexxar' />
          <Greeting name='Jaina' />
          <Greeting name='Valeera' />
        </View>
    )
  }
}

class Greeting extends Component {
  render() {
      return (
        <Text> Hello {this.props.name}</Text>
      )
  }
}


const styles = StyleSheet.create({
  bigblue: {
    color: 'blue',
    fontWeight: 'bold',
    fontSize: 30,
  },
  red: {
    color: 'red',
  },
});


AppRegistry.registerComponent('AwesomeProject', () => AwesomeProject);
