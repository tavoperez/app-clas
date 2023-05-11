import React from 'react'
import { Platform, StatusBar, StyleSheet, Text, View } from 'react-native';
import { getStatusBarHeight } from 'react-native-status-bar-height';

export const FlexScreen = () => {
  return (
    <View style={Styles.container}>
        <Text style={Styles.caja1}>Caja 1</Text>
        <Text style={Styles.caja2}>Caja 2</Text>
        <Text style={Styles.caja3}>Caja 3</Text>    
    </View>
  )
}

export const Styles = StyleSheet.create({
    container: {
        width: '100%',
        flex: 1,
        paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : getStatusBarHeight(),
        backgroundColor: '#19A7CE',
        // flexDirection: 'row',
        // justifyContent: 'center',
        // alignItems: 'center',
        // flexWrap: 'wrap'
      },
    caja1:{
        fontSize: 20,
        borderWidth: 2,
        borderColor: 'white',
        // alignSelf: 'flex-end'
    },
    caja2:{
        fontSize: 20,
        borderWidth: 2,
        borderColor: 'white',
        // alignSelf: 'center'
    },
    caja3:{
        fontSize: 20,
        borderWidth: 2,
        borderColor: 'white',
        // alignSelf: 'flex-start'
    },
});
