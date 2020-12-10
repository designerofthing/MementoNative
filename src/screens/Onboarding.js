import React from "react";
import {
  View,
  Text,
  StatusBar,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
  Alert,
  Image,
} from "react-native";
import Swiper from "react-native-swiper/src";
import mori1 from "../../assets/jean-tuttle-memento-mori.jpg";
import mori2 from "../../assets/memento-mori.jpg";
import mori3 from "../../assets/sands-of-time.jpg";

const { width, height } = Dimensions.get("window");



export default function Onboarding() {

 const _onPress = text => {
    Alert.alert(text);
  }
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
        <View style={styles.titleContainer}>
          <Text style={styles.title}>Menu 1</Text>
        </View>
        <View style={styles.subTitleContainer}>
          <Text style={styles.subTitle}>Menu 2</Text>
        </View>
      </View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity onPress={() => _onPress('Tapped Sign up')}>
        <View style={styles.signupContainer}>
          <Text style={styles.signup}>Sign up</Text>
        </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => _onPress('Tapped Log in')}>
        <View style={styles.loginContainer}>
          <Text style={styles.login}>Log in</Text>
        </View>
        </TouchableOpacity>
      </View>
    </View>
  );
}
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
    height: 70,
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
    position: 'absolute',
    flexDirection: 'row',
    bottom: 70,
    width: 370,
    height: 60,
    marginLeft: 20,
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  signupContainer: {
    width: 180,
    height: 60,
    backgroundColor: "purple",
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
  },
  signup: {
    fontFamily: "serif",
    fontSize: 20,
    fontWeight: '600'
  },
  loginContainer: {
    width: 180,
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
