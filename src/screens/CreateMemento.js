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

const CreateMemento = () => {
  const [mementoTitle, setMementoTitle] = useState("");
  const [mementoDescription, setMementoDescription] = useState("");

  const handleTitle = (text) => {
    setMementoTitle(text);
  };
  const handleDescription = (text) => {
    setMementoDescription(text);
  };

  
  const handleSubmit = async (mementoTitle, mementoDescription) => {
    const mementoInput = [mementoTitle, mementoDescription];
    try {
      await API.graphql(graphqlOperation(createMementoModel, {input: mementoInput })
      )
    } catch (err) {
      console.log('error creating memento:' + err);
    }
    // alert("Title: " + mementoTitle + " Description: " + mementoDescription);
  };

  return (
    <View>
      <AppHeader />
      <TextInput
        style={styles.input}
        underlineColorAndroid="transparent"
        placeholder=" Memento Title"
        placeholderTextColor="purple"
        autoCapitalize="none"
        onChangeText={handleTitle}
      />

      <TextInput
        style={styles.input}
        underlineColorAndroid="transparent"
        placeholder=" Short Description of Memento"
        placeholderTextColor="purple"
        autoCapitalize="none"
        onChangeText={handleDescription}
      />

      <TouchableOpacity
        style={styles.submitButton}
        onPress={() => handleSubmit(mementoTitle, mementoDescription)}
      >
        <Text style={styles.submitButtonText}> Submit </Text>
      </TouchableOpacity>
    </View>
  );
};

export default CreateMemento;

const styles = StyleSheet.create({
  container: {
     paddingTop: 23
  },
  input: {
     margin: 15,
     height: 40,
     borderColor: 'purple',
     borderWidth: 1
  },
  submitButton: {
     backgroundColor: 'purple',
     padding: 10,
     margin: 15,
     height: 40,
  },
  submitButtonText:{
     color: 'white'
  }
})