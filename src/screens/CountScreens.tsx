import React, { useState } from 'react'
import { Text, View, StyleSheet } from 'react-native'
import { Fab } from '../components/Fab'

export const CountScreens = () => {

  const [count, setcount] = useState(10)

  return (
    <View style={style.container}>
        <Text style={style.title}>Contador: {count}</Text>
        
        <Fab
          title= "+1"
          position='br'
          onPress={() => setcount(count +1)}
        />
        <Fab
          title= "-1"
          position='bl'
          onPress={() => setcount(count -1)}
        />
    </View>
  )
}

const style = StyleSheet.create ({
  container:{
    flex: 1,
    justifyContent: 'center'
  },
  title: {
    fontSize: 45,
    textAlign: 'center',
    top: -15
  },  
})