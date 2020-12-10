import React from 'react'
import { View, Text, StatusBar, StyleSheet, Dimensions, Image } from "react-native";
import Swiper from 'react-native-swiper/src';
import mori1 from '../../assets/jean-tuttle-memento-mori.jpg'
import mori2 from '../../assets/memento-mori.jpg'
import mori3 from '../../assets/sands-of-time.jpg'


const { width, height } = Dimensions.get('window');

export default function Onboarding() {
  return (
    <View style={styles.container}>
      <StatusBar hidden={true} />
      <Swiper>
        <View style={styles.slide}>
          <Image
          source={mori1}
          style={styles.image}
          />
        </View>
        <View style={styles.slide}>
          <Image
          source={mori2}
          style={styles.image}
          />
        </View>
        <View style={styles.slide}>
          <Image
          source={mori3}
          style={styles.image}
          />
        </View>
      </Swiper>
    </View>
    )
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  slide: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  image: {
    width: width,
    height: height
  }
})