import React, { Component } from 'react';
import {
  Button,
  StyleSheet,
  Text,
  View,
  Image,
} from 'react-native';

export default class App extends Component {

  render() {

    return (
      <View style = {styles.background} >
        <View style={styles.container}>
          <Image
            style={{ width: 400, height: 150, resizeMode: 'contain' }}
            source={require('./image/Title3.png')}
          />
        </View>
          <Image
            style={{ width: 300, height: 150, justifyContent: 'center', alignItems: 'center', resizeMode: 'contain' }}
            source={require('./image/Logo.png')}
          />
          <Button 
            style= {styles.button}
            title='press me'
          />
      </View>
    );
  }
}

const styles = StyleSheet.create({

  button: {
    backgroundColor:'#D35400'
  },
  container: {
    flexDirection: 'row',
    paddingTop: 30
  },
  background:{
    backgroundColor:'#F0B27A'
  }
});