import React, { Component } from 'react'
import { View, Text } from 'react-native'

export default class Button1 extends Component {
  render() {
    return (
      <View style = {{ padding:10, 
      borderColor:'#2980B9',
      backgroundColor:'#A6ACAF'
      }} >
        <Text>Chọn sách</Text>
      </View>
    )
  }
}
