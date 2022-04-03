import { View, Text, Dimensions, StyleSheet, Image } from 'react-native';
import React from 'react';

const StoryCardScreen = (props) => {
  return (
    <View
      style={{
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#D1D1D1',
      }}
    >
      <Image source={{ uri: props.storyImg }} style={styles.storyImage}></Image>
      <Text style={{ fontSize: 20 }}>{props.storyTitle}</Text>
      <Text style={{ fontSize: 20 }}>{props.author}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  storyImage: {
    height: Dimensions.get('window').height / 2,
    width: Dimensions.get('window').width / 1.3,
  },
});

export default StoryCardScreen;
