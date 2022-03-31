import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Image, TouchableOpacity, Text, View } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons/faBars';

function HeaderComponent(props) {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <TouchableOpacity>
        <FontAwesomeIcon size={24} icon={faBars} />
      </TouchableOpacity>
      <Text style={styles.header}>YourStory</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 45,
    paddingBottom: 10,
    paddingHorizontal: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderBottomColor: '#0c7494',
    borderBottomWidth: 2,
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
