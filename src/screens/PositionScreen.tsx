import React from 'react'
import { StyleSheet, View } from 'react-native'
import { SafeAreaProvider, useSafeAreaInsets } from 'react-native-safe-area-context';

export const PositionScreen = () => {
  return (
    <SafeAreaProvider>
        <BoxModel/>
    </SafeAreaProvider>
  )
}

const BoxModel = () =>{
    const insets = useSafeAreaInsets();

    const boxStyles = {
        ...styles.container,
        paddingTop: insets.top
    }
      
    return(
        <View style={boxStyles}>
            <View style={styles.boxPurple}/>
            <View style={styles.boxOrange} />
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor: '#F7C8E0',
        justifyContent: 'center',
        alignItems: 'center'
    },
    boxPurple:{
        // width:100,
        // height:100,
        backgroundColor: 'purple',
        borderWidth: 10,
        borderColor:'white',
        // position:'absolute',
        ...StyleSheet.absoluteFillObject
    },
    boxOrange:{
        width:100,
        height:100,
        backgroundColor: 'orange',
        borderWidth: 10,
        borderColor:'white',
        position: 'absolute',
        bottom:0,
        left:0
        
    }
});
