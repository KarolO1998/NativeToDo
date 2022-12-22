import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import colors from "./Colors"

export default class App extends React.Component {
  render() {
  return (
    <View style={styles.container}>
      <Text style={{fontWeight:"300", color:colors.lightGreen }}>To DO APP</Text>
      <StatusBar style="auto" />
    </View>
  );
 }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
