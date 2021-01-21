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
  const [fileURL, setFileURL] = useState('');

  const handleTitle = (text) => {
    setMementoTitle(text);
  };
  const handleDescription = (text) => {
    setMementoDescription(text);
  };

  const handleUploadImage = (file) => {
    console.log(file);
    setFileURL(file);
    
    
    // const formData = new FormData();
    // formData.append('file', file);
    // const newFiles = [...this.state.fileURL]
    //     this.fileArray.push(URL.createObjectURL(file))
    //     newFiles.push(file)
    // this.setState({fileURL: newFiles}, () => {

    // });

};

  const handleSubmit = async (mementoTitle, mementoDescription, fileURL) => {
    let Title = mementoTitle;
    let Description = mementoDescription;
    let ProfileImage = fileURL;
    console.log(ProfileImage);
    const input = { Title, Description, ProfileImage };
    if (Title.length !== 0 && Description.length !== 0 && ProfileImage !== undefined) {
      try {
        await API.graphql(
          graphqlOperation(createMementoModel, { input: input })
        );
        alert(Title + "'s Memento created Successfully! ");
        navigation.navigate("Home");
      } catch (err) {
        console.log("error creating memento:" + err);
      }
    } else {
      alert("Please complete all the fields");
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
        allowFontScaling
        onChangeText={handleTitle}
      />

      <TextInput
        style={styles.input}
        required
        underlineColorAndroid="transparent"
        placeholder="A short description of them"
        placeholderTextColor="#50055E"
        autoCapitalize="none"
        allowFontScaling
        onChangeText={handleDescription}
      />
      <ImagePickerComponent sendFile={handleUploadImage}/>

      <TouchableOpacity
        style={styles.submitButton}
        onPress={() =>
          handleSubmit(
            mementoTitle,
            mementoDescription,
            fileURL
          )
        }
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
