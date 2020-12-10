import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { AppLoading } from "expo";
import { useFonts, Taviraj_400Regular } from "@expo-google-fonts/dev";

export default function AppHeader() {
  let [fontsLoaded] = useFonts({
    Taviraj_400Regular,
  });
    if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
      <View style={styles.container}>
        <Text style={styles.logo}>Memento </Text>
        <Text style={styles.text}>Memorial App</Text>
        <StatusBar style="auto" />
     </View>

  
  )};
}

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

