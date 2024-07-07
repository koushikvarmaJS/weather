import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { Feather } from '@expo/vector-icons'
import moment from 'moment'
import { WeatherType } from '../utilities/WeatherType'

const ListItem = (props) => {
  const { dt_txt, min, max, condition } = props
  const { items, date, temp, dateWrap } = styles
  return (
    <View style={items}>
      <Feather name={WeatherType[condition]?.icon} size={50} color={'black'} />
      <View style={dateWrap}>
        <Text style={date}>{moment(dt_txt).format('dddd')}</Text>
        <Text style={date}>{moment(dt_txt).format('h:mm:ss a')}</Text>
      </View>
      <Text style={temp}>{`H:${Math.round(min)}°/L:${Math.round(max)}°`}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  items: {
    padding: 20, //height of list
    marginVertical: 8,
    marginHorizontal: 16,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    borderWidth: 5,
    backgroundColor: 'cyan'
  },
  temp: {
    color: 'black',
    fontSize: 20
  },
  date: {
    color: 'black',
    fontSize: 15
  },
  dateWrap:{
    flexDirection:'column'
  }
})

export default ListItem