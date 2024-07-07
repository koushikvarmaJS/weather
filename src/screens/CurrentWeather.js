import React from 'react'
import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  ImageBackground
} from 'react-native'
import { Feather } from '@expo/vector-icons'
import Rowtext from '../components/RowText'
import { WeatherType } from '../utilities/WeatherType'

const CurrentWeather = ({ weatherData }) => {
  const {
    wrap,
    container,
    temperature,
    feels,
    highLowWrap,
    highLow,
    bodywrap,
    description,
    message,
    image
  } = styles
  const { main:{temp,feels_like,temp_max,temp_min},weather} = weatherData
  const weatherCondition = weather[0]?.main
  return (
    <SafeAreaView style={[wrap,{backgroundColor:WeatherType[weatherCondition]?.color}]}>
      <ImageBackground source={require('../../assets/tree.jpg')} style={image}>
        <View style={container}>
          <Feather name={WeatherType[weatherCondition]?.icon} size={100} color="black" />
          <Text style={feels}>{`Feels like ${feels_like}°`}</Text>
          <Rowtext
            container={highLowWrap}
            message1={`High: ${temp_max}° `}
            message2={`Low: ${temp_min}°`}
            style1={highLow}
            style2={highLow}
          />
        </View>
        <Rowtext
          container={bodywrap}
          message1={weather[0]?.description}
          message2={WeatherType[weatherCondition]?.message}
          style1={description}
          style2={message}
        />
      </ImageBackground>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  image: {
    flex: 1
  },
  wrap: {
    flex: 1,
    backgroundColor: 'cyan'
  },
  temperature: {
    color: 'black',
    fontSize: 48
  },
  feels: {
    color: 'black',
    fontSize: 30
  },
  highLow: {
    color: 'black',
    fontSize: 20
  },
  highLowWrap: {
    flexDirection: 'row'
  },
  bodywrap: {
    justifyContent: 'flex-end',
    alignItems: 'flex-start',
    alignItems: 'center',
    paddingLeft: 25,
    marginBottom: 40
  },
  description: {
    fontSize: 36,
    color: 'white'
  },
  message: {
    fontSize: 30,
    color: 'white'
  }
})
export default CurrentWeather
