import React from 'react';
import { StatusBar } from 'expo-status-bar';
import {
  StyleSheet,
  Image,
  TouchableOpacity,
  Dimensions,
  Text,
  View,
} from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';

function HeaderComponent(props) {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <TouchableOpacity>
        <Image
          source={require('../assets/appstore.png')}
          style={{
            height: Dimensions.get('window').height / 20,
            width: Dimensions.get('window').width / 12,
          }}
        ></Image>
      </TouchableOpacity>
      <Text style={styles.header}>YourStory</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 27,
    paddingBottom: 5,
    paddingHorizontal: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderBottomColor: '#0c7494',
    borderBottomWidth: 1,
    borderStyle: 'solid',
  },
  header: {
    fontFamily: 'Roboto',
    color: '#0c7494',
    fontSize: 22,
    letterSpacing: 2,
    fontWeight: 'bold',
  },
  imageLogo: {
    width: 40,
    height: 40,
  },
});

export default HeaderComponent;
