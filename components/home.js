import React from 'react';
import HeaderComponent from './header';
import {
  StyleSheet,
  Text,
  View,
  Image,
  Dimensions,
  TextInput,
  Button,
  TouchableOpacity,
} from 'react-native';

function HomeComponent(props) {
  return (
    <View>
      <HeaderComponent></HeaderComponent>
      <View style={{ alignItems: 'center', justifyContent: 'center' }}>
        <Image
          style={styles.storyBoard}
          source={require('../assets/Storyboard-amico.png')}
        ></Image>
        <Text style={styles.heading}>YourStory</Text>
        <Text style={styles.subHeading}>Trusted Book Publisher</Text>
      </View>
      <View>
        <Text style={styles.bestSellers}>BESTSELLERS</Text>
        <Text style={styles.discover}>Discover Something New You'll Love</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 350,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,
  },
  storyBoard: {
    width: Dimensions.get('window').width / 1.5,
    height: Dimensions.get('window').height / 2.5,
    marginBottom: 20,
  },
  heading: {
    color: '#000',
    fontSize: 20,
    textAlign: 'left',
    fontWeight: 'bold',
  },
  subHeading: {
    color: '#000',
    fontSize: 20,
  },
  logoHeader: {
    alignItems: 'center',
    paddingTop: 30,
  },
  imageLogo: {
    width: 50,
    height: 50,
  },
  imageWriter: {
    width: 50,
    height: 50,
  },
  bestSellers: {
    color: '#0c7494',
    fontSize: 30,
    textAlign: 'center',
    paddingVertical: 45,
  },
  discover: {
    fontSize: 17,
    textAlign: 'center',
  },
});

export default HomeComponent;
