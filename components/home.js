import React, { useEffect, useState } from 'react';
import HeaderComponent from './header';
import StoryCardScreen from './sroty-card';
import {
  StyleSheet,
  Text,
  View,
  Image,
  Dimensions,
  ScrollView,
  TextInput,
  Button,
  StatusBar,
  SafeAreaView,
  TouchableOpacity,
  ActivityIndicator,
} from 'react-native';
import axiosConfig from '../axiosConfig';

function HomeComponent(props) {
  const [stories, setStories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [reload, setReload] = useState(true);

  useEffect(() => {
    if (reload) {
      axiosConfig
        .get(`stories/`)
        .then((response) => {
          if (response.success) {
            setStories(response.message);
          }
        })
        .catch((error) => {
          console.log(error);
        })
        .finally(() => setLoading(false));
    }
    setReload(false);
  });

  return (
    <SafeAreaView>
      {loading ? (
        <View style={[styles.loadersContainer, styles.horizontal]}>
          <ActivityIndicator />
          <ActivityIndicator size="large" color="#00ff00" />
        </View>
      ) : (
        <ScrollView style={{ flexGrow: 0 }}>
          <View>
            <HeaderComponent></HeaderComponent>
            <View style={{ alignItems: 'center', justifyContent: 'center' }}>
              <Image
                style={styles.storyBoard}
                source={require('../assets/Storyboard-amico.png')}
              ></Image>
              <View
                style={{
                  backgroundColor: '#D1D1D1',
                  // paddingVertical: 25,
                  // marginVertical: 20,
                }}
              ></View>
            </View>
            <View
              style={{
                backgroundColor: '#D1D1D1',
                paddingVertical: 25,
                marginTop: 20,
              }}
            >
              <Text style={styles.heading}>YourStory</Text>
              <Text style={styles.subHeading}>Trusted Book Publisher</Text>
              <Text style={styles.bestSellers}>BESTSELLERS</Text>
              <Text style={styles.discover}>
                Discover Something New You'll Love
              </Text>
            </View>
            {stories.map((story) => {
              return (
                <StoryCardScreen
                  key={story.id}
                  storyImg={story.image}
                  storyTitle={story.title}
                  author={story.description}
                ></StoryCardScreen>
              );
            })}
            <View style={{ height: 20, backgroundColor: '#D1D1D1' }}></View>
          </View>
        </ScrollView>
      )}
    </SafeAreaView>
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
  safeArea: {
    flex: 1,
    paddingTop: StatusBar.currentHeight,
  },
  storyBoard: {
    width: Dimensions.get('window').width / 1.5,
    height: Dimensions.get('window').height / 2.5,
    marginVertical: 20,
  },
  heading: {
    paddingTop: 10,
    color: '#000',
    fontSize: 20,
    textAlign: 'left',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  subHeading: {
    paddingVertical: 25,
    color: '#000',
    fontSize: 20,
    textAlign: 'center',
    borderBottomColor: '#1C658C',
    borderBottomWidth: 1,
    borderStyle: 'solid',
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
    paddingTop: 20,
    paddingBottom: 25,
  },
  discover: {
    fontSize: 17,
    textAlign: 'center',
    paddingBottom: 25,
  },
  loadersContainer: {
    flex: 1,
    justifyContent: 'center',
  },
  horizontal: {
    justifyContent: 'space-around',
    paddingTop: Dimensions.get('window').height / 2,
  },
});

export default HomeComponent;
