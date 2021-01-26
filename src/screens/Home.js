import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  Button,
  Dimensions,
  TouchableOpacity,
  SafeAreaView,
  FlatList,
  Image,
} from "react-native";
import { Auth } from "aws-amplify";
import { DataStore } from "@aws-amplify/datastore";
import { MementoModel } from "../../models";
import AppHeader from "../components/AppHeader";

const Item = ({ item, onPress }) => (
  <View>
    <TouchableOpacity onPress={onPress} style={styles.mementoListContainer}>
      <Image source={item.ProfileImage} resizeMode="cover" style={styles.image} />
      <Text style={styles.mementoTitle}>{item.Title}</Text>
      <Text style={styles.mementoDescription}>{item.Description}</Text>
    </TouchableOpacity>
  </View>
);

const { width, height } = Dimensions.get("window");

export default function Home({ navigation, updateAuthState }) {
  
  const [ selectedItem, setSelectedItem ] = useState(null);
  const [ mementoList, setMementoList ] = useState([]); 
  
  useEffect(() => {
    getMementos();
  }, []);

  const getMementos = async () => {
    let mementos = await DataStore.query(MementoModel);
    console.log(mementos);
    setMementoList(mementos)
  };


  const _onPressItem = (item) => {
    setSelectedItem(item);
    navigation.navigate("MementoDetail", { item: selectedItem });
  };

  const renderItem = ({ item }) => {
    return <Item item={item} onPress={() => _onPressItem(selectedItem)} />;
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
        <View style={styles.mementoListContainer}>
          <View style={styles.mementoHeaderContainer}>
            <Text style={styles.mementoHeader}>my mementos</Text>
          </View>
          <FlatList
            data={mementoList}
            renderItem={renderItem}
            keyExtractor={(item) => item.id}
            extraData={selectedItem}
          />
        </View>
      </View>
      <View style={styles.buttonContainer}>
        <Button
          style={styles.signOut}
          title="Create memento"
          color="purple"
          onPress={() => navigation.navigate("CreateMemento")}
        />
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
    top: 80,
    width: width,
    height: 60,
    alignItems: "center",
    justifyContent: "space-between",
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
    marginTop: 20,
    width: 300,
    height: 60,
    alignItems: "center",
    justifyContent: "center",
  },
  mementoHeader: {
    color: "purple",
    fontSize: 20,
  },
  mementoListContainer: {
    position: "relative",
    width: width,
    marginBottom: 20,
    alignItems: "center",
    justifyContent: "space-between",
  },
  mementoTitle: {
    position: "absolute",
    top: 20,
    justifyContent: "flex-start",
    fontSize: 20,
  },
  mementoDescription: {
    position: "relative",
    fontSize: 15,
  },
  image: {
    width: 400,
    height: 300,
    marginTop: 10,
    borderRadius: 10,
  },
});
