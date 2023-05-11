import React from 'react'
import { Dimensions, StyleSheet, Text, useWindowDimensions, View } from 'react-native';
import { SafeAreaProvider, useSafeAreaInsets } from 'react-native-safe-area-context';

// const {width, height} = Dimensions.get('window')

export const DimensionScreen = () => {
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
    const {width, height} = useWindowDimensions();
    return (
        <View>
            <View style={boxStyles}>
                <View style={{
                    ...styles.boxPurple,
                    width: width * 0.5}} />
                <View style={styles.boxRed} />
            </View>
            <Text style={styles.title} >W: {width}, H: {height} </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        width: '100%',
        height: 300,
        backgroundColor: '#FE6244'
    },
    boxPurple:{
        backgroundColor: '#7149C6',
        // width: '50%',
        height: '50%'
    },
    boxRed:{
        backgroundColor: 'FC2947'
    },
    title:{
        fontSize: 25,
        textAlign: 'center'
    }
});
