import React from "react";
import {
  View,
  Text,
  StatusBar,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
  Image,
} from "react-native";
import Swiper from "react-native-swiper/src";
import onboarding1 from "../../assets/onboarding1.jpg";
import onboarding2 from "../../assets/onboarding2.jpg";
import onboarding3 from "../../assets/onboarding3.jpg";
import onboarding4 from "../../assets/onboarding4.jpg";
import AppHeader from "../components/AppHeader";

const { width, height } = Dimensions.get("window");

function Onboarding({ navigation, updateAuthState }) {

  return (
    <View style={styles.container}>
      <StatusBar hidden={true} />
      <Swiper>
        <View style={styles.slide}>
          <Image source={onboarding1} style={styles.image} />
          <Text style={styles.textContainer}>memento is a memorial space to collect and view images and videos of a friend or loved one that has passed away...{"\n"} {"\n"} swipe through to read how it works  </Text>
        </View>
        <View style={styles.slide}>
          <Image source={onboarding2} style={styles.image} />
          <Text style={styles.textContainer}>Create a memento to preserve the memory of someone special. {"\n"} {"\n"} Then invite their friends and relatives to view and contribute images and videos of that person...</Text>
        </View>
        <View style={styles.slide}>
          <Image source={onboarding3} style={styles.image} />
          <Text style={styles.textContainer}>The memento creator has control over who can contribute and view the memento. {"\n"} {"\n"} Contributers can view all the images and videos in the person's memento whenever they miss that person...</Text>
        </View>
        <View style={styles.slide}>
          <Image source={onboarding4} style={styles.image} />
          <Text style={styles.textContainer}>Anyone can create a memento. {"\n"} {"\n"}  To get started, click Sign up to create an account and gain access.</Text>
        </View>
      </Swiper>
      <View style={styles.titleContainer}>
          <AppHeader />
      </View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity onPress={() => navigation.navigate("SignUp")}>
          <View style={styles.signupContainer}>
            <Text style={styles.signup}>Sign up</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate("SignIn")}>
          <View style={styles.loginContainer}>
            <Text style={styles.login}>Log in</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
}
export default Onboarding;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  slide: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  image: {
    width: width,
    height: height,
    opacity: 0.5,
  },
  titleContainer: {
    position: "absolute",
    top: 1,
    height: 120,
    width: width,
    alignItems: "center",
    justifyContent: "center",
  },
  textContainer: {
    position: "absolute",
    top: 150,
    width: 300,
    height: 300,
    alignItems: "center",
    justifyContent: "center",
    fontSize: 20,
    fontWeight: "600",
    lineHeight: 30,
    color: "#50055E",
    textAlign: 'center',
  },
  title: {
    fontSize: 40,
  },
  subTitleContainer: {
    width: 200,
    height: 50,
    backgroundColor: "purple",
    opacity: 0.7,
    alignItems: "center",
    justifyContent: "center",
  },
  subTitle: {
    fontFamily: "serif",
    fontSize: 24,
  },
  buttonContainer: {
    position: "absolute",
    flexDirection: "row",
    bottom: 70,
    width: width,
    height: 60,
    alignItems: "center",
    justifyContent: "space-around",
  },
  signupContainer: {
    width: 150,
    height: 60,
    backgroundColor: "#50055E",
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
  },
  signup: {
    fontSize: 20,
    fontWeight: "500",
    color: "white",
  },
  loginContainer: {
    width: 150,
    height: 60,
    borderColor: "#50055E",
    borderRadius: 10,
    borderWidth: 2,
    alignItems: "center",
    justifyContent: "center",
  },
  login: {
    fontSize: 20,
    fontWeight: "500",
    color: "#50055E",
  },
});
