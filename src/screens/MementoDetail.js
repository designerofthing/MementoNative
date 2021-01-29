import React, { useState, useEffect } from "react";
import { View, StyleSheet, Text, Image, TouchableOpacity } from "react-native";
import Amplify, { Auth, API, graphqlOperation } from "aws-amplify";
import ImagePickerComponent from "../components/ImagePickerComponent";
import AppHeader from "../components/AppHeader";

const MementoDetail = ({route }) => {
  const [fileURL, setFileURL] = useState("");
  const [Uploader, setUploader ] = useState("");
  
  const getUser = async () =>{
     let response = await Auth.currentUserInfo()
  setUploader(response.attributes.email)
  }

  useEffect(() => {
  getUser()
    return () => {
    cleanup
  }
}, [])
  const handleUploadImage = async (file) => {
    console.log(file);
    setFileURL(file);
    let ProfileImage = fileURL;
    console.log(ProfileImage);
    const input = { Uploader, ProfileImage };
    if (
      ProfileImage !== undefined
    ) {
      try {
        await API.graphql(
          graphqlOperation(createUplaodMediaModel, { input: input })
        );
        alert("memento updated successfully! ");
        getFiles()
      } catch (err) {
        console.log("error creating memento:" + err);
      }
    } else {
      alert("Please choose a file");
    }
  };
    // const formData = new FormData();
    // formData.append('file', file);
    // const newFiles = [...this.state.fileURL]
    //     this.fileArray.push(URL.createObjectURL(file))
    //     newFiles.push(file)
    // this.setState({fileURL: newFiles}, () => {

    // });
  

  return <View>
    <AppHeader/>
    <View style={styles.mementoContainer}>
    <Image source={route.params.item.ProfileImage} resizeMode="cover" style={styles.image} />
      <Text style={styles.mementoTitle}>{route.params.item.Title}'s memento</Text>
      <Text style={styles.mementoDescription}>{route.params.item.Description}</Text>
      </View>
      <TouchableOpacity>
      <ImagePickerComponent sendFile={handleUploadImage} buttonText={'Contribute to this memento'}/>

      </TouchableOpacity>
  </View>;
};

export default MementoDetail;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "purple",
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    // fontFamily: "Taviraj",
    color: "black",
    fontSize: 20,
  },
  logo: {
    fontFamily: "Taviraj",
    color: "silver",
    fontSize: 50,
  },
  mementoContainer: {
    position: "relative",
    marginBottom: 20,
    alignItems: "center",
    justifyContent: "space-between",
  },
  mementoTitle: {
    justifyContent: "flex-start",
    fontSize: 30,
    paddingBottom: 10,
  },
  mementoDescription: {
    position: "relative",
    fontSize: 15,
  },
  image: {
    width: 100,
    height: 200,
    marginTop: 10,
    borderRadius: 10,
  },
});
