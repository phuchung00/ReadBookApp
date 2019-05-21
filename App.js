import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Logo from './src/component/Logo';
import Content from './src/component/Content/Content'
export default class App extends React.Component {
  render() {
    return (
      <View>
        <Logo/>
        <Content />
      </View>
    );
  }
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });
