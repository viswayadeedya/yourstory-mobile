import {
  View,
  Text,
  Platform,
  TextInput,
  Button,
  Image,
  StyleSheet,
} from 'react-native';
import React, { useState, useEffect } from 'react';
import * as ImagePicker from 'expo-image-picker';

const NewPartScreen = (props) => {
  const [image, setImage] = useState(null);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });
    console.log(result);

    if (!result.cancelled) {
      setImage(result.uri);
    }
  };
  return (
    <View style={{ paddingTop: 45 }}>
      <View>
        <Text
          style={styles.nextPage}
          onPress={() => props.navigation.navigate('Home')}
        >
          Publish
        </Text>
      </View>
      <View style={styles.imagePicker}>
        <Button title="Select Part Cover" onPress={pickImage} />
        {image && (
          <Image source={{ uri: image }} style={{ width: 200, height: 200 }} />
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
      </View>
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

export default NewPartScreen;
