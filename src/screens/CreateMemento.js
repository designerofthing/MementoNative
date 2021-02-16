import { Storage } from "aws-amplify";
import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  StyleSheet,
} from "react-native";
import awsExports from "../../aws-exports"
import AppHeader from "../components/AppHeader";
import ImagePickerComponent from "../components/ImagePickerComponent";
import { DataStore } from '@aws-amplify/datastore';
import { MementoModel } from '../../models';


const CreateMemento = ({ navigation }) => {
  const [mementoTitle, setMementoTitle] = useState("");
  const [mementoDescription, setMementoDescription] = useState("");
  const [fileURL, setFileURL] = useState("");
  const [mime, setMime] = useState("");


  const handleTitle = (text) => {
    setMementoTitle(text);
  };
  const handleDescription = (text) => {
    setMementoDescription(text);
  };

  const handleUploadImage = (file, imageMime) => {
    setFileURL(file);
    setMime(imageMime);
  };

  const handleSubmit = async (mementoTitle, mementoDescription, fileURL, mime) => {
    let extensionName = mime.split('/').pop()
    let name = mementoTitle + Date.now() + '.' + extensionName

    await Storage.put(name, fileURL, {
      contentType: mime
    });

    const ProfileImage = {
        name: name,
        bucket: awsExports.aws_user_files_s3_bucket,
        region: awsExports.aws_user_files_s3_bucket_region,
        key: 'public/' + name
      
    }
    let Title = mementoTitle;
    let Description = mementoDescription;
    console.log(ProfileImage);
    if (
      Title.length !== 0 &&
      Description.length !== 0 &&
      ProfileImage !== undefined
    ) {
      try {

        await DataStore.save(
          new MementoModel({
          "Title": Title,
          "Description": Description,
          "UploadMediaModels": [],
          "ProfileImage": ProfileImage
        })
      );
        alert(Title + "'s Memento created Successfully! ");
        navigation.push("Home");
        
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
      <ImagePickerComponent sendFile={handleUploadImage} buttonText={'Select a profile image'}/>

      <TouchableOpacity
        style={styles.submitButton}
        onPress={() => handleSubmit(mementoTitle, mementoDescription, fileURL, mime)}
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
