import React,{useState,useEffect} from 'react'
import { ActivityIndicator, View, StyleSheet} from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { useGetWeather } from './src/hooks/useGetWeather'
import ErrorItem from './src/components/ErrorItem'
import Tabs from './src/components/Tabs'

const App = () =>{
  const [loading,error,weather] = useGetWeather()  
  if (weather && weather.list && !loading) {
    return (
      <NavigationContainer>
        <Tabs weather = {weather}/>
      </NavigationContainer>
    )
  }
  return (
    <View style={styles.container}>{
      error ? <ErrorItem /> : <ActivityIndicator size={'large'} color={'blue'}/>
    }
    </View>
  )
}

const styles = StyleSheet.create({
  container:{
    justifyContent:'center',
    flex:1
  }
})
export default App