import React from 'react'
import { Platform, StatusBar, StyleSheet, View } from 'react-native'
import { getStatusBarHeight } from 'react-native-status-bar-height';

export const TareaScreen = () => {
  return (
    <View style={styles.container}>
        <View style={styles.boxPurple}/>
        <View style={styles.boxOrange}/>
        <View style={styles.boxBlue}/>
    </View>
  )
}

const styles = StyleSheet.create({
    container:{
        paddingTop:Platform.OS === 'android' ? StatusBar.currentHeight : getStatusBarHeight(),
        backgroundColor: '#19A7CE',
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems:'center'
    },
    boxPurple:{
        backgroundColor: 'purple',
        borderWidth: 2,
        borderColor: 'white',
        height: 100,
        width: 100,
    },
    boxOrange:{
        backgroundColor: 'orange',
        borderWidth: 2,
        borderColor: 'white',
        height: 100,
        width: 100,
        top: 50
    },
    boxBlue:{
        backgroundColor: 'blue',
        borderWidth: 2,
        borderColor: 'white',
        height: 100,
        width: 100,

    },
});
