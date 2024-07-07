import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { Feather } from '@expo/vector-icons'

const IconText = (props) => {
  const { iconName, iconColor, textStyle, body } = props
  const { container, text } = styles
  return (
    <View style={container}>
      <Feather name={iconName} size={50} color={iconColor} />
      <Text style={[text, textStyle]}>{body}</Text>
    </View>
  )
}
const styles = StyleSheet.create({
  container: {
    alignItems: 'center'
  },
  text: {
    fontWeight: 'bold'
  }
})
export default IconText