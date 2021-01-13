import React from "react";
import { View, StyleSheet, Text } from "react-native";
import AppHeader from "../components/AppHeader";

const MementoDetail = ({ item }) => {
  return <View>
    <AppHeader/>
    <Text style={styles.text}>{item.title}</Text>
  </View>;
};

export default MementoDetail;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "purple",
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    // fontFamily: "Taviraj",
    color: "black",
    fontSize: 20,
  },
  logo: {
    fontFamily: "Taviraj",
    color: "silver",
    fontSize: 50,
  },
});
