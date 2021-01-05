import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, TextInput } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.topContainer}/>

      <View style={styles.headerContainer}>
        <Text style={styles.headerText}>Hello World!</Text>
        <Text style={styles.titleText}>First React Native App</Text>
        <Text style={styles.blueColor}>This is a paragraph explaining what this app is all about. As you can see there are already many components including text, images and buttons.</Text>
      </View>

      <View style={styles.container, {width: "100%", padding: 8}}>
        <Text style={{...styles.titleText, ...styles.bold, width: 250}}>What would you like to get out of this course?</Text>
        <TextInput style={{ padding: 8, height: 100, backgroundColor: "#F2F2F2", textAlignVertical: 'top'}} placeholder="Enter some text" multiline={true} />
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
  textInput: {
    padding: 8, 
    height: 200, 
    backgroundColor: "#F2F2F2",
    
  },
  blueColor: {
    color: "#24305E"
  },
  bold: {
    fontWeight: "bold"
  }
});
