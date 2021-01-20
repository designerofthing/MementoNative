import { API, graphqlOperation } from "aws-amplify";
import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  StyleSheet,
} from "react-native";
import { createMementoModel } from "../../graphql/mutations";
import AppHeader from "../components/AppHeader";
import ImagePickerComponent from "../components/ImagePickerComponent";

const CreateMemento = ({ navigation }) => {
  const [mementoTitle, setMementoTitle] = useState("");
  const [mementoDescription, setMementoDescription] = useState("");
  
  const handleTitle = (text) => {
    setMementoTitle(text);
  };
  const handleDescription = (text) => {
    setMementoDescription(text);
  };


  const handleSubmit = async (mementoTitle, mementoDescription) => {
    let Title = mementoTitle;
    let Description = mementoDescription;
    let image = ImagePickerComponent.image
    const input = { Title, Description, image };
    if (Title.length !== 0 && Description.length !== 0 && image !== null) {
    try {
      await API.graphql(graphqlOperation(createMementoModel, { input: input }));
      alert(Title + "'s Memento created Successfully! ");
      navigation.navigate("Home");
    } catch (err) {
      console.log("error creating memento:" + err);
    }
  } else {
    alert('Please complete all the fields');
  }
  };

  return (
    <View>
      <AppHeader />
      <TextInput
        style={styles.input}
        underlineColorAndroid="transparent"
        placeholder=" Loved one's name for memento"
        placeholderTextColor="#50055E"
        autoCapitalize="none"
        onChangeText={handleTitle}
      />

      <TextInput
        style={styles.input}
        required
        underlineColorAndroid="transparent"
        placeholder="A short description of them"
        placeholderTextColor="#50055E"
        autoCapitalize="none"
        onChangeText={handleDescription}
      />
      <ImagePickerComponent />

      <TouchableOpacity
        style={styles.submitButton}
        onPress={() => handleSubmit(mementoTitle, mementoDescription, ImagePickerComponent.image)}
      >
        <Text style={styles.submitButtonText}> Submit </Text>
      </TouchableOpacity>
    </View>
  );
};

export default CreateMemento;

const styles = StyleSheet.create({
  container: {
    paddingTop: 23,
  },
  input: {
    textAlign: "center",
    margin: 15,
    height: 40,
    borderColor: "#50055E",
    borderWidth: 1,
    borderRadius: 5,
  },
  submitButton: {
    textAlign: "center",
    backgroundColor: "#50055E",
    padding: 10,
    margin: 15,
    height: 40,
    borderRadius: 5,
  },
  submitButtonText: {
    color: "white",
    fontSize: 16,
  },
});
