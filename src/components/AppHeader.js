import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import logo from "../../assets/mementoLogo.png";

export default function AppHeader() {
    return (
      <View style={styles.container}>
        <Image source={logo} style={styles.logo} />
        <Text style={styles.title}>memento</Text>
        {/* <Text style={styles.text}>memorial App</Text> */}
        <StatusBar style="auto" />
      </View>
    );
  }


const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    backgroundColor: "purple",
    alignItems: "center",
    justifyContent: "center",
    height: 90,
    padding: 10,
  },
  title: {
    color: "#50055E",
    fontSize: 50,
  },
  text: {
    color: "black",
    fontSize: 20,
  },
  logo: {
    width: 50,
    height: 50,
    // #50055E
  },
});
