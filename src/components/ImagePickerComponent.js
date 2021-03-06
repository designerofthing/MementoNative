import React, { useState, useEffect } from "react";
import { Image, View, Platform, StyleSheet, TouchableOpacity, Text } from "react-native";
import * as ImagePicker from "expo-image-picker";
import Constants from "expo-constants";

export default function ImagePickerComponent({ sendFile, buttonText }) {
  const [image, setImage] = useState(null);

  useEffect(() => {
    getPermissions();
  }, []);

  const getPermissions = async () => {
    if (Platform.OS !== "web") {
      const {
        status,
      } = await ImagePicker.requestMediaLibraryPermissionsAsync();
      if (status !== "granted") {
        alert("Sorry, we need camera roll permissions to make this work!");
      }
    }
  }
  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    console.log(result);

    if (!result.cancelled) {
      const imagePath = result.uri;
      const imageExt = result.uri.split(':').pop();
      const imageMime = imageExt.split(';').shift();

      let picture = await fetch(imagePath);
    picture = await picture.blob();
      
      setImage(imagePath);
      sendFile(picture, imageMime)
  
    }
  };

  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <TouchableOpacity onPress={pickImage}>
          <View style={styles.buttonContainer}>
            <Text style={styles.buttonText}>{buttonText}</Text>
          </View>
        </TouchableOpacity>
      {image && (
        <Image source={{ uri: image }} style={{ marginTop: 20, width: 200, height: 200 }} />
      )}
    </View>
  );
}

const styles = StyleSheet.create({

buttonContainer: {
  width: 250,
  height: 40,
  borderColor: "#50055E",
  borderRadius: 10,
  borderWidth: 2,
  alignItems: "center",
  justifyContent: "center",
},
buttonText: {
  fontSize: 16,
  color: "#50055E",
},
});