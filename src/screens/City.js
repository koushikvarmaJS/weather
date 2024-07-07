import { StatusBar } from 'expo-status-bar'
import React from 'react'
import {
  SafeAreaView,
  Text,
  StyleSheet,
  ImageBackground,
  View
} from 'react-native'
import { Feather } from '@expo/vector-icons'
import moment from 'moment'
import IconText from '../components/IconText'

const City = ({weatherData}) => {
  const {
    container,
    imageLayout,
    cityName,
    cityText,
    countryName,
    populationWrap,
    rowLayout,
    populationText,
    sunWrap,
    sunText
  } = styles
  const { name,country,population,sunrise,sunset } = weatherData
  return (
    <SafeAreaView style={container}>
      <ImageBackground
        source={require('../../assets/city.jpg')}
        style={imageLayout}
      >
        <Text style={[cityName, cityText]}>{name}</Text>
        <Text style={[countryName, cityText]}>{country}</Text>
        <View style={[populationWrap, rowLayout]}>
          <IconText
            iconName={'user'}
            iconColor={'red'}
            textStyle={populationText}
            body={`Population: ${population}`}
          />
        </View>
        <View style={[sunWrap, rowLayout]}>
          <IconText
            iconName={'sunrise'}
            iconColor={'white'}
            textStyle={sunText}
            body={moment(sunrise).format('h:mm:ss a')}
          />
          <IconText
            iconName={'sunset'}
            iconColor={'white'}
            textStyle={sunText}
            body={moment(sunset).format('h:mm:ss a')}
          />
        </View>
      </ImageBackground>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0
  },
  imageLayout: {
    flex: 1
  },
  cityName: {
    fontSize: 40
  },
  countryName: {
    fontSize: 30
  },
  cityText: {
    justifyContent: 'center',
    alignSelf: 'center',
    fontWeight: 'bold',
    color: 'white'
  },
  rowLayout: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  populationWrap: {
    justifyContent: 'center',
    marginTop: 30
  },
  populationText: {
    fontSize: 25,
    marginLeft: 7.5,
    color: 'red'
  },
  sunWrap: {
    justifyContent: 'space-around',
    marginTop: 30
  },
  sunText: {
    fontSize: 20,
    color: 'white'
  }
})
export default City
