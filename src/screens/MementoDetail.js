import React from "react";
import { View, StyleSheet, Text, Image } from "react-native";
import { StackRouter } from "react-navigation";
import AppHeader from "../components/AppHeader";

const MementoDetail = ({route }) => {
  return <View>
    <AppHeader/>
    <View style={styles.mementoContainer}>
    <Image source={route.params.item.ProfileImage} resizeMode="cover" style={styles.image} />
      <Text style={styles.mementoTitle}>{route.params.item.Title}'s memento</Text>
      <Text style={styles.mementoDescription}>{route.params.item.Description}</Text>
      </View>
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
  mementoContainer: {
    position: "relative",
    marginBottom: 20,
    alignItems: "center",
    justifyContent: "space-between",
  },
  mementoTitle: {
    justifyContent: "flex-start",
    fontSize: 30,
    paddingBottom: 10,
  },
  mementoDescription: {
    position: "relative",
    fontSize: 15,
  },
  image: {
    width: 100,
    height: 200,
    marginTop: 10,
    borderRadius: 10,
  },
});
