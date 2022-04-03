import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  Image,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import React from 'react';

const items = [
  { key: 1, name: 'Action' },
  { key: 2, name: 'Adventure' },
  { key: 3, name: 'ChickLit' },
  { key: 4, name: 'Fanfiction' },
  { key: 5, name: 'Fantasy' },
  { key: 6, name: 'General Fiction' },
  { key: 7, name: 'Historical Fiction' },
  { key: 8, name: 'Horror' },
  { key: 9, name: 'Humor' },
  { key: 10, name: 'Mystery / Thriller' },
  { key: 12, name: 'Non-Fiction' },
  { key: 13, name: 'Paranormal' },
  { key: 14, name: 'Poetry' },
  { key: 15, name: 'Random' },
  { key: 16, name: 'Romance' },
  { key: 17, name: 'Science Fiction' },
  { key: 18, name: 'Short Story' },
  { key: 19, name: 'Spiritual' },
  { key: 20, name: 'Teen Fiction' },
  { key: 21, name: 'Vampire' },
  { key: 22, name: 'Werewolf' },
];

const BrowseScreen = () => {
  return (
    <ScrollView>
      <View>
        <Text style={styles.heading}>Select story by category</Text>
        <View style={{ alignItems: 'center', justifyContent: 'center' }}>
          <Image
            style={styles.browseImage}
            source={require('../assets/Online-connection-bro.png')}
          ></Image>
        </View>
        <View style={styles.browseContainer}>
          {items.map((item) => {
            return (
              <TouchableOpacity key={item.key}>
                <Text style={styles.browseOption}>{item.name}</Text>
              </TouchableOpacity>
            );
          })}
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  heading: {
    paddingTop: 50,
    paddingBottom: 15,
    textAlign: 'center',
    fontSize: 22,
    color: '#0C7494',
    fontWeight: 'bold',
    letterSpacing: 2,
  },
  browseImage: {
    width: Dimensions.get('window').width / 1.5,
    height: Dimensions.get('window').height / 2.5,
    marginVertical: 20,
  },
  browseContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  browseOption: {
    width: Dimensions.get('window').width / 2 - 20,
    fontSize: 20,
    textAlign: 'center',
    backgroundColor: '#0C7494',
    marginHorizontal: 10,
    marginVertical: 10,
    paddingVertical: 10,
    borderRadius: 20,
    color: '#fff',
  },
});

export default BrowseScreen;
