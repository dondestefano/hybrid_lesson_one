import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.topContainer}/>
      <View style={styles.headerContainer}>
        <Text style={styles.headerText}>Hello World!</Text>
        <Text style={styles.titleText}>First React Native App</Text>
        <Text style={styles.blueColor}>This is a paragraph explaining what this app is all about. As you can see there are already many components including text, images and buttons.</Text>

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
    backgroundColor: "#24305E",
    width: "100%",
    height: 30,
    justifyContent: "flex-start"
  },
  headerContainer: {
    backgroundColor: "#A8D1E7",
    width: "100%",
    paddingVertical: 16,
    paddingHorizontal: 8,
  },
  headerText: {
    fontWeight: "bold",
    fontSize: 25
  },
  titleText: {
    fontSize: 18,
  },
  blueColor: {
    color: "#24305E"
  }
});
