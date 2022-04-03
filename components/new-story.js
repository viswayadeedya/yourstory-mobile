import {
  View,
  Text,
  Platform,
  TextInput,
  Button,
  Image,
  StyleSheet,
  ActivityIndicator,
  ScrollView,
} from 'react-native';
import React, { useState, useEffect } from 'react';
import * as ImagePicker from 'expo-image-picker';
import axiosConfig from '../axiosConfig';

const NewStoryScreen = (props) => {
  const [image, setImage] = useState(null);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [loading, setLoading] = useState(false);
  const [mainCharecters, setMainCharecters] = useState('');
  const [language, setLanguage] = useState('');

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });
    console.log(result);

    if (!result.cancelled) {
      setImage({
        uri: result.uri,
        name: 'image.jpg',
        type: 'image/jpg',
      });
    }
  };

  const submitStory = (props) => {
    const formData = new FormData();
    setLoading(true);
    const imageJSON = {
      imageName: new Date().getTime(),
      images: image,
      name: 'name',
    };
    // formData.append('images', JSON.stringify(imageJSON));
    // formData.append('userId', '621b041e3dbb901bf7506def');
    // formData.append('title', title);
    // formData.append('description', description);
    // formData.append('mainCharecters', mainCharecters);
    // formData.append('language', 'English');

    const storyData = {
      userId: '621b041e3dbb901bf7506def',
      title: title,
      description: description,
      mainCharecters: mainCharecters,
      language: language ? language : 'English',
    };
    axiosConfig
      .post('stories/new', storyData)
      .then((res) => {
        console.log(res);
        props.navigation.navigate('Home');
      })
      .catch((error) => {
        console.log(error.data);
      })
      .finally(() => {
        // props.navigation.navigate('Addpart');
        setLoading(false);
      });
  };

  return (
    <View style={{ paddingTop: 45 }}>
      {loading ? (
        <View style={[styles.loadersContainer, styles.horizontal]}>
          <ActivityIndicator />
          <ActivityIndicator size="large" color="#00ff00" />
        </View>
      ) : (
        <ScrollView style={{ flexGrow: 0 }}>
          <View>
            <View>
              <Text
                style={styles.nextPage}
                onPress={(props) => submitStory(props)}
              >
                Next
              </Text>
            </View>
          </View>
          <View style={styles.imagePicker}>
            <Button title="Select Story Cover" onPress={pickImage} />
            {image && (
              <Image
                source={{ uri: image.uri }}
                style={{ width: 200, height: 200 }}
              />
            )}
            <View style={styles.inputView}>
              <TextInput
                style={styles.TextInput}
                placeholder="Title"
                placeholderTextColor="#000"
                onChangeText={(title) => setTitle(title)}
              />
            </View>
            <View style={styles.inputTextView}>
              <TextInput
                style={styles.TextArea}
                placeholder="Description"
                multiline={true}
                numberOfLines={5}
                placeholderTextColor="#000"
                onChangeText={(description) => setDescription(description)}
              />
            </View>
            <View style={styles.inputView}>
              <TextInput
                style={styles.TextInput}
                placeholder="Main Charecters"
                placeholderTextColor="#000"
                onChangeText={(charecters) => setMainCharecters(charecters)}
              />
            </View>
            <View style={styles.inputView}>
              <TextInput
                style={styles.TextInput}
                placeholder="Language"
                placeholderTextColor="#000"
                onChangeText={(language) => setLanguage(language)}
              />
            </View>
          </View>
        </ScrollView>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  imagePicker: {
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 10,
    marginTop: 20,
  },
  inputView: {
    marginVertical: 20,
    backgroundColor: '#DFDFDE',
    width: '90%',
    height: 60,
    marginBottom: 20,
    color: '#000',
  },
  inputTextView: {
    marginVertical: 20,
    backgroundColor: '#DFDFDE',
    width: '90%',
    height: 300,
    marginBottom: 20,
    color: '#000',
  },

  TextInput: {
    height: 60,
    flex: 1,
    padding: 10,
    fontSize: 20,
    marginLeft: 20,
  },
  TextArea: {
    height: 300,
    flex: 1,
    padding: 10,
    fontSize: 15,
    marginLeft: 20,
  },
  nextPage: {
    color: '#0c7696',
    fontSize: 20,
    textAlign: 'right',
    paddingHorizontal: 15,
    paddingVertical: 10,
    backgroundColor: '#DFDFDE',
  },
});

export default NewStoryScreen;
