import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { SafeAreaProvider, useSafeAreaInsets } from 'react-native-safe-area-context';

export const BoxObjecModelScreen = () => {
  return (
    <SafeAreaProvider>
      <BoxObjecModel />
    </SafeAreaProvider>
  );
};

const BoxObjecModel = () => {
  const insets = useSafeAreaInsets();

  const boxStyles = {
    ...styles.container,
    paddingTop: insets.top,
  };

  return (
    <View style ={boxStyles}>
      <Text style={styles.title}>Este es mi contenido seguro!</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container:{
    backgroundColor: 'red',
    flex:1,
    // width: 300
  },
    title: {
      fontSize: 20,
      borderWidth: 10,
      marginVertical: 50,
      marginHorizontal: 40,
      paddingHorizontal: 20,
      paddingVertical: 20
      // backgroundColor: 'red'
    }
});