import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Button,
  Dimensions,
  TouchableOpacity,
  SafeAreaView,
  FlatList,
} from "react-native";
import { Auth } from "aws-amplify";
import AppHeader from "../components/AppHeader";
import MementoDetail from "./MementoDetail";
import DATA from "../components/MockData";

const Item = ({ item, onPress }) => (
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
    setSelectedId(item.id);
    return (
      <Item item={item} onPress={() => navigation.navigate("MementoDetail")} />
    );
  };

  async function signOut() {
    try {
      await Auth.signOut();
      updateAuthState("loggedOut");
    } catch (error) {
      console.log("Error signing out: ", error);
    }
  }

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
          <SafeAreaView style={styles.mementoListContainer}>
            <Text style={styles.mementoHeader}>My Mementos</Text>
            <FlatList
              data={DATA}
              renderItem={renderItem}
              keyExtractor={(item) => item.id}
              extraData={selectedId}
            />
          </SafeAreaView>
        </View>
        <Button
          style={styles.signOut}
          title="Sign Out"
          color="purple"
          onPress={signOut}
        />
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
    position: "absolute",
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
  signOut: {
    position: "absolute",
    width: 150,
    height: 60,
    backgroundColor: "purple",
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
  },
  mementoHeaderContainer: {
    position: "absolute",
    bottom: 400,
    width: 300,
    height: 60,
    color: "purple",
    alignItems: "center",
    justifyContent: "center",
  },
  mementoHeader: {
    fontFamily: "serif",
    fontSize: 30,
  },
  mementoListContainer: {
    width: width,
    height: height,
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
