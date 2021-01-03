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
import mori1 from "../../assets/jean-tuttle-memento-mori.jpg";
import mori2 from "../../assets/memento-mori.jpg";
import mori3 from "../../assets/sands-of-time.jpg";
import AppHeader from "../components/AppHeader";

const { width, height } = Dimensions.get("window");

function Onboarding({ navigation, updateAuthState }) {

  return (
    <View style={styles.container}>
      <StatusBar hidden={true} />
      <Swiper>
        <View style={styles.slide}>
          <Image source={mori1} style={styles.image} />
        </View>
        <View style={styles.slide}>
          <Image source={mori2} style={styles.image} />
        </View>
        <View style={styles.slide}>
          <Image source={mori3} style={styles.image} />
        </View>
      </Swiper>
      <View style={styles.textContainer}>
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
  },
  textContainer: {
    position: "absolute",
    bottom: 200,
    marginLeft: 20,
    height: 120,
    alignItems: "flex-start",
    justifyContent: "center",
  },
  titleContainer: {
    width: 300,
    height: 100,
    backgroundColor: "purple",
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontFamily: "serif",
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
    backgroundColor: "purple",
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
  },
  signup: {
    fontFamily: "serif",
    fontSize: 20,
    fontWeight: "600",
  },
  loginContainer: {
    width: 150,
    height: 60,
    borderColor: "purple",
    borderRadius: 10,
    borderWidth: 2,
    alignItems: "center",
    justifyContent: "center",
  },
  login: {
    fontFamily: "serif",
    fontSize: 20,
  },
});
