import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, Button, ActivityIndicator } from "react-native";
import { useFonts, Taviraj_400Regular } from "@expo-google-fonts/dev";
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Amplify, { Auth } from "aws-amplify";
import SignIn from './SignIn';
import SignUp from './SignUp';
import ConfirmSignUp from './ConfirmSignUp';
import Home from './Home';
import config from "../../aws-exports";
import Onboarding from "./Onboarding";
Amplify.configure(config);

function Authorisation() {
  const [isUserLoggedIn, setUserLoggedIn] = useState('initializing');

  
  const AuthenticationStack = createStackNavigator();
  const AppStack = createStackNavigator();
  const AuthenticationNavigator = props => {
    return (
      <AuthenticationStack.Navigator headerMode="none">
        <AuthenticationStack.Screen name="SignIn">
          {screenProps => (
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
  const AppNavigator = props => {
    return (
      <AppStack.Navigator>
        <AppStack.Screen name="Home">
          {screenProps => (
            <Home {...screenProps} updateAuthState={props.updateAuthState} />
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
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          <ActivityIndicator size="large" color="tomato" />
        </View>
      );
    };

    useEffect(() => {
          checkAuthState();
        }, []);
        async function checkAuthState() {
          try {
            await Auth.currentAuthenticatedUser();
            console.log(' User is signed in');
            setUserLoggedIn('loggedIn');
          } catch (err) {
            console.log(' User is not signed in');
            setUserLoggedIn('loggedOut');
          }
        }
        function updateAuthState(isUserLoggedIn) {
          setUserLoggedIn(isUserLoggedIn);
        }
  return (
        <NavigationContainer>
        {isUserLoggedIn === 'initializing' && <Onboarding />}
        {isUserLoggedIn === 'loggedIn' && (
          <AppNavigator updateAuthState={updateAuthState} />
        )}
        {isUserLoggedIn === 'loggedOut' && (
          <AuthenticationNavigator updateAuthState={updateAuthState} />
        )}
      </NavigationContainer>
    );
  }

export default  Authorisation;


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
