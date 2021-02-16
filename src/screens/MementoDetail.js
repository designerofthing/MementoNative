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
import Amplify, { Auth, Storage } from "aws-amplify";
import { DataStore } from "@aws-amplify/datastore";
import awsExports from "../../aws-exports"
import { UploadMediaModel } from "../../models";
import ImagePickerComponent from "../components/ImagePickerComponent";
import AppHeader from "../components/AppHeader";

const { width, height } = Dimensions.get("window");

const MementoDetail = ({ route, navigation }) => {
  const [mementoMedia, setMementoMedia] = useState([]);
  const [fileURL, setFileURL] = useState("");
  const [uploader, setUploader] = useState("");
  const [mementoTitle, setMementoTitle] = useState("");
  const [mementoModelID, setMementoModelID] = useState(route.params.item.id);
  const [mime, setMime] = useState("");


  const getUser = async () => {
    let response = await Auth.currentUserInfo();
    setUploader(response.attributes.email);
  };

  const getMementos = async () => {
    let mementos = await DataStore.query(UploadMediaModel, c => c.mementomodelID("eq", mementoModelID));
    debugger
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
    let fileUrl = `https://${item.Contribution.bucket}.s3.${item.Contribution.region}.amazonaws.com/${item.Contribution.key}` 

    return (
      <View style={styles.mementoMediaContainer}>
        <Image
          source={fileUrl}
          resizeMode="contain"
          style={styles.image}
        />
        <Text style={styles.mementoDescription}>{item.Title}</Text>
      </View>
    );
  };

  const handleTitle = (text) => {
    setMementoTitle(text);
  };

  const handleUploadImage = (file, imageMime) => {
    setFileURL(file);
    setMime(imageMime);

  };
  const handleSubmit = async (mementoTitle, mime, uploader, fileURL) => {
    let extensionName = mime.split('/').pop()
    let name = mementoTitle + Date.now() + '.' + extensionName
    
    await Storage.put(name, fileURL, {
      contentType: mime
    });
    
    
    let Contribution = {
        name: name,
        bucket: awsExports.aws_user_files_s3_bucket,
        region: awsExports.aws_user_files_s3_bucket_region,
        key: 'public/' + name
      
    }
    let Title = mementoTitle;
    if (
      Title.length !== 0 &&
      Contribution !== undefined
    ) {
      try {

        await DataStore.save(
          new UploadMediaModel({
          "Title": Title,
          "Uploader": uploader,
          "mementomodelID": mementoModelID,
          "Contribution": Contribution
        })
      );
        alert(`Your contribution "${Title}" has been saved successfully!`);
        setFileURL('');
        navigation.push("Home");
        
        
      } catch (err) {
        console.log("error creating contribution:" + err);
      }
    } else {
      alert("Please complete all the fields");
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
      <Text style={styles.listTitle}>Image Contributions</Text>
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
            onPress={() => handleSubmit(mementoTitle, mime, uploader, fileURL)}
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
    paddingBottom: 5,
  },
  mementoDescription: {
    paddingTop: 5,
    position: "relative",
    fontSize: 15,
  },
  listTitle: {
    position: "relative",
    fontSize: 20,
    paddingTop: 10,
    textAlign: "center",
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
