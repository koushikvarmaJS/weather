import React from 'react'
import { View, Text } from 'react-native'

const Rowtext = (props) => {
  const { container, message1, message2, style1, style2 } = props
  return (
    <View style={container}>
      <Text style={style1}>{message1}</Text>
      <Text style={style2}>{message2}</Text>
    </View>
  )
}

export default Rowtext