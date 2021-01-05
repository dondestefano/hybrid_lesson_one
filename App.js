import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>

      </View>
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
  },
  topContainer: {

  },
  headerContainer: {
    backgroundColor: "#A8D1E7",
    width: "100%",
    height: 70,
    justifyContent: "flex-start"
  },
  headerText: {
    fontWeight: "bold",
    fontSize: 20
  },
  titleText: {
    fontWeight: "bold",
  },
});
