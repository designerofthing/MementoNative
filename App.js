import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View, Button } from "react-native";
import { AppLoading } from "expo";
import { useFonts, Taviraj_400Regular } from "@expo-google-fonts/dev";
import Amplify, { Auth } from "aws-amplify";
import config from "./aws-exports";
import { withAuthenticator } from "aws-amplify-react-native";
Amplify.configure(config);

function App() {
  async function signOut() {
    try {
      await Auth.signOut();
    } catch (error) {
      console.log("Error signing out: ", error);
    }
  }
  let [fontsLoaded] = useFonts({
    Taviraj_400Regular,
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
      <View style={styles.container}>
        <Button title="Sign Out" color="silver" onPress={signOut} />
        <Text style={styles.logo}>Memento </Text>
        <Text style={styles.text}>Memorial App</Text>
        <StatusBar style="auto" />
      </View>
    );
  }
}
export default withAuthenticator(App);
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
