import React, { useState, useEffect } from "react";
import { StyleSheet, View, ActivityIndicator } from "react-native";
import { useFonts, Taviraj_400Regular } from "@expo-google-fonts/dev";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Amplify, { Auth, API, graphqlOperation } from "aws-amplify";
import SignIn from "./src/screens/SignIn";
import SignUp from "./src/screens/SignUp";
import ConfirmSignUp from "./src/screens/ConfirmSignUp";
import Home from "./src/screens/Home";
import Onboarding from "./src/screens/Onboarding";
import config from "./aws-exports";
import MementoDetail from "./src/screens/MementoDetail";
import CreateMemento from "./src/screens/CreateMemento";

Amplify.configure(config);

function App() {
  const [isUserLoggedIn, setUserLoggedIn] = useState("initializing");

  const AuthenticationStack = createStackNavigator();
  const AppStack = createStackNavigator();
  const AuthenticationNavigator = (props) => {
    return (
      <AuthenticationStack.Navigator headerMode="none">
        <AuthenticationStack.Screen name="Onboarding">
          {(screenProps) => (
            <Onboarding
              {...screenProps}
              updateAuthState={props.updateAuthState}
            />
          )}
        </AuthenticationStack.Screen>
        <AuthenticationStack.Screen name="SignIn">
          {(screenProps) => (
            <SignIn {...screenProps} updateAuthState={props.updateAuthState} />
          )}
        </AuthenticationStack.Screen>
        <AuthenticationStack.Screen name="SignUp" component={SignUp} />
        <AuthenticationStack.Screen
          name="ConfirmSignUp"
          component={ConfirmSignUp}
        />
      </AuthenticationStack.Navigator>
    );
  };
  const AppNavigator = () => {
    return (
      <AppStack.Navigator>
        <AppStack.Screen name="Home">
          {(screenProps) => (
            <Home {...screenProps} updateAuthState={updateAuthState} />
          )}
        </AppStack.Screen>
        <AppStack.Screen name="MementoDetail">
          {screenProps => (
            <MementoDetail  {...screenProps} updateAuthState={updateAuthState} />
            )}
        </AppStack.Screen>
        <AppStack.Screen name="CreateMemento">
          {screenProps => (
            <CreateMemento {...screenProps} updateAuthState={updateAuthState} />
            )}
        </AppStack.Screen>
      </AppStack.Navigator>
    );
  };
  let [fontsLoaded] = useFonts({
    Taviraj_400Regular,
  });
  const Initializing = () => {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <ActivityIndicator size="large" color="purple" />
      </View>
    );
  };

  useEffect(() => {
    checkAuthState();
  }, []);
  async function checkAuthState() {
    try {
      await Auth.currentAuthenticatedUser();
      console.log(" User is signed in");
      setUserLoggedIn("loggedIn");
    } catch (err) {
      console.log(" User is not signed in");
      setUserLoggedIn("loggedOut");
    }
  }
  function updateAuthState(isUserLoggedIn) {
    setUserLoggedIn(isUserLoggedIn);
  }
  return (
    <NavigationContainer>
      {isUserLoggedIn === "initializing" && <Onboarding />}
      {isUserLoggedIn === "loggedIn" && (
        <AppNavigator updateAuthState={updateAuthState} />
      )}
      {isUserLoggedIn === "loggedOut" && (
        <>
          <AuthenticationNavigator updateAuthState={updateAuthState} />
        </>
      )}
    </NavigationContainer>
  );
}

export default App;

