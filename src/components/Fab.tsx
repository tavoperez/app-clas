import React from 'react'
import { Text, TouchableOpacity, View, StyleSheet, TouchableNativeFeedback, Platform } from 'react-native';

interface Props {
    title: string,
    position?: 'br' | 'bl';
    onPress: () => void;
}

export const Fab = ({title, onPress, position = 'br' }: Props) => {

    const ios = () =>{
      return(
      <TouchableOpacity 
      onPress={onPress}
      activeOpacity={0.8}
        style={[
          style.fabPosition, 
          (position === 'bl') ? style.left : style.right
        ]}
      >
        <View style={style.fab}>
          <Text style={style.fabText}>{title}</Text>
        </View>
      </TouchableOpacity>
      )
    }

    const android = () =>{
      return(
        <View
        style={[
          style.fabPosition, 
          (position === 'bl') ? style.left : style.right
        ]}
      >
      <TouchableNativeFeedback 
        onPress={onPress}
        background={TouchableNativeFeedback.Ripple('#C0EEF2', false, 30)}
      >
        <View style={style.fab}>
          <Text style={style.fabText}>{title}</Text>
        </View>
      </TouchableNativeFeedback>
      </View>
      )
    }

  return (Platform.OS==='ios') ? ios() : android();
}

const style = StyleSheet.create({
    fab:{
        backgroundColor: '#19A7CE',
        borderRadius:100,
        width: 60,
        height: 60,
        justifyContent: 'center',
        shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: 4,
        },
        shadowOpacity: 0.30,
        shadowRadius: 4.65,

        elevation: 8,
      },
      fabText:{
        fontSize: 25,
        color: 'white',
        fontWeight: 'bold',
        alignSelf: 'center'
      },
      fabPosition:{
        position: 'absolute',
        bottom: 25
      },
      right:{
        right: 25
      },
      left: {
        left: 25
      }
})
