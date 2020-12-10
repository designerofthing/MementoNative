import React from "react";
import { StyleSheet } from "react-native";
import Amplify from "aws-amplify";
import Onboarding from './src/screens/Onboarding';
import config from "./aws-exports";
Amplify.configure(config);

function App() {
  
  return (
        <Onboarding />
    );
  }

export default App;


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
