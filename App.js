import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Quiz from './app/pages/Quiz'

const App = () => {
  return (
    <View style={styles.container}>
      <Quiz/>
    </View>
  )
}

export default App

const styles = StyleSheet.create({
  container:{
    flex:1,
    alignItems:'center',
    justifyContent:'center'
}
})