import React, { useState, useEffect } from "react";
import {
  View,
  StyleSheet,
  Text,
  TextInput,
  Dimensions,
  Image,
  TouchableOpacity,
  FlatList,
} from "react-native";
import Amplify, { Auth, API, graphqlOperation } from "aws-amplify";
import { DataStore } from "@aws-amplify/datastore";
import { UploadMediaModel } from "../../models";

import { createUploadMediaModel } from "../../graphql/mutations";
import ImagePickerComponent from "../components/ImagePickerComponent";
import AppHeader from "../components/AppHeader";

const { width, height } = Dimensions.get("window");

const MementoDetail = ({ route, navigation }) => {
  const [mementoMedia, setMementoMedia] = useState([]);
  const [fileURL, setFileURL] = useState("");
  const [Uploader, setUploader] = useState("");
  const [mementoTitle, setMementoTitle] = useState("");

  const getUser = async () => {
    let response = await Auth.currentUserInfo();
    setUploader(response.attributes.email);
  };

  const getMementos = async () => {
    let mementos = await DataStore.query(UploadMediaModel);
    setMementoMedia(mementos);
  };

  useEffect(() => {
    const ac = new AbortController();
    getUser();
    getMementos();
    return () => {
      ac.abort();
    };
  }, []);

  const renderItem = ({ item }) => {
    return (
      <View style={styles.mementoMediaContainer}>
        <Image
          source={item.Contribution}
          resizeMode="cover"
          style={styles.image}
        />
        <Text style={styles.mementoTitle}>{item.Title}</Text>
      </View>
    );
  };

  const handleTitle = (text) => {
    setMementoTitle(text);
  };

  const handleUploadImage = (file) => {
    setFileURL(file);
  };
  const handleSubmit = async (mementoTitle, Uploader, fileURL) => {
    let mementomodelID = route.params.item.id;
    let Title = mementoTitle;
    let Contribution = fileURL;
    const input = { Uploader, Title, Contribution, mementomodelID };
    if (Contribution !== undefined && Title.length !== 0) {
      try {
        await API.graphql(
          graphqlOperation(createUploadMediaModel, { input: input })
        );
        alert("memento updated successfully!");
        navigation.push("MementoDetail");
      } catch (err) {
        console.log("error creating memento:" + err);
      }
    } else {
      alert("Please complete the title");
    }
  };
  // const formData = new FormData();
  // formData.append('file', file);
  // const newFiles = [...this.state.fileURL]
  //     this.fileArray.push(URL.createObjectURL(file))
  //     newFiles.push(file)
  // this.setState({fileURL: newFiles}, () => {

  // });
  let profileImageUrl = `https://${route.params.item.ProfileImage.bucket}.s3.${route.params.item.ProfileImage.region}.amazonaws.com/${route.params.item.ProfileImage.key}`
  
  
  return (
    <View>
      <AppHeader />
      <View style={styles.mementoContainer}>
        <Image
          source={profileImageUrl}
          resizeMode="cover"
          style={styles.profileImage}
        />
        <Text style={styles.mementoTitle}>
          {route.params.item.Title}'s memento
        </Text>
        <Text style={styles.mementoDescription}>
          {route.params.item.Description}
        </Text>
      </View>
      <FlatList
        horizontal
        data={mementoMedia}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        ItemSeparatorComponent={() => <View style={{ width: 30 }} />}
      />
      <ImagePickerComponent
        sendFile={handleUploadImage}
        buttonText={"Contribute to this memento"}
      />
      {fileURL !== "" && (
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            underlineColorAndroid="transparent"
            placeholder=" Title for contribution"
            placeholderTextColor="#50055E"
            autoCapitalize="none"
            allowFontScaling
            onChangeText={handleTitle}
          />
          <TouchableOpacity
            style={styles.submitButton}
            onPress={() => handleSubmit(mementoTitle, Uploader, fileURL)}
          >
            <Text style={styles.submitButtonText}> Submit </Text>
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
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
  profileImage: {
    width: 100,
    height: 100,
    marginTop: 10,
    borderRadius: 10,
  },
  mementoMediaContainer: {
    position: "relative",
    width: width,
    marginBottom: 20,
    alignItems: "center",
    justifyContent: "space-between",
  },
  image: {
    width: 400,
    height: 300,
    borderRadius: 10,
  },
  inputContainer: {
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
  },
  input: {
    position: "relative",
    textAlign: "center",
    margin: 15,
    height: 40,
    width: 200,
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
