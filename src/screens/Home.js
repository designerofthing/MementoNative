import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Button,
  Dimensions,
  TouchableOpacity,
  SafeAreaView,
  FlatList
} from "react-native";
import { Auth } from "aws-amplify";
import AppHeader from "../components/AppHeader";
import MementoDetail from "./MementoDetail";
import DATA from '../components/MockData'

const Item = ({ item, onPress, style }) => (
  <TouchableOpacity
    onPress={onPress}
    style={[styles.mementoListContainer, style]}
  >
    <Text style={styles.mementoList}>{item.title}</Text>
  </TouchableOpacity>
);

const { width, height } = Dimensions.get("window");

export default function Home({ updateAuthState }) {
  const [selectedId, setSelectedId] = useState(null);

  const renderItem = ({ item }) => {
    return <MementoDetail item={item} onPress={() => setSelectedId(item.id)} />;
  };

  async function signOut() {
    try {
      await Auth.signOut();
      updateAuthState("loggedOut");
    } catch (error) {
      console.log("Error signing out: ", error);
    }
  }

  const handlePress = (e) => {
    navigation.navigate("MementoDetail");
  };
  return (
    <>
      <AppHeader />
      <View style={styles.container}>
        <View style={styles.buttonContainer}>
          <TouchableOpacity
            onPress={() => navigation.navigate("CreateMemento")}
          >
            <View style={styles.createMementoContainer}>
              <Text style={styles.createMemento}>Create Memento</Text>
            </View>
          </TouchableOpacity>
          <View style={styles.mementoHeaderContainer}>
            <Text style={styles.mementoHeader}>My Mementos</Text>
          </View>
          <SafeAreaView style={styles.mementoListContainer}>
            <FlatList
              data={DATA}
              renderItem={renderItem}
              keyExtractor={(item) => item.id}
              extraData={selectedId}
            />
          </SafeAreaView>
        </View>
        <Button title="Sign Out" color="purple" onPress={signOut} />
      </View>
    </>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    marginTop: 20,
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
  createMementoContainer: {
    width: 150,
    height: 60,
    backgroundColor: "purple",
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
  },
  createMemento: {
    fontFamily: "serif",
    fontSize: 20,
    fontWeight: "600",
  },
  mementoHeaderContainer: {
    width: 150,
    height: 60,
    borderColor: "purple",
    borderRadius: 10,
    borderWidth: 2,
    alignItems: "center",
    justifyContent: "center",
  },
  mementoHeader: {
    fontFamily: "serif",
    fontSize: 30,
  },
  mementoListContainer: {
    width: 150,
    height: 60,
    borderColor: "purple",
    borderRadius: 10,
    borderWidth: 2,
    alignItems: "center",
    justifyContent: "center",
  },
  mementoList: {
    fontFamily: "serif",
    fontSize: 15,
  },
});
