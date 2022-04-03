import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  Button,
  TouchableOpacity,
} from 'react-native';
import axiosConfig from '../axiosConfig';
import { environment } from '../environment';

function RegisterComponent(props) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [username, setUsername] = useState('');
  const [loading, setLoading] = useState(false);
  const url = 'users';

  const signUpUser = (props) => {
    setLoading(true);
    axiosConfig
      .post(`${url}/register`, {
        email: email,
        password: password,
        username: username,
      })
      .then((response) => {
        if (response.success) {
          environment.token = response.message.token;
          environment.user = response.message.user;
          props.navigation.navigate('Home');
        }
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => setLoading(false));
  };

  return (
    <View style={styles.container}>
      <Image
        style={styles.image}
        source={require('../assets/Mobile-login-amico.png')}
      />
      <Text style={styles.yourStory}>YOURSTORY</Text>

      <StatusBar style="auto" />

      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="Username."
          placeholderTextColor="#fff"
          onChangeText={(username) => setUsername(username)}
        />
      </View>

      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="Email."
          placeholderTextColor="#fff"
          onChangeText={(email) => setEmail(email)}
        />
      </View>

      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="Password."
          placeholderTextColor="#fff"
          secureTextEntry={true}
          onChangeText={(password) => setPassword(password)}
        />
      </View>

      <TouchableOpacity
        style={styles.loginBtn}
        onPress={() => signUpUser(props)}
      >
        <Text style={styles.loginText}>REGISTER</Text>
      </TouchableOpacity>

      <TouchableOpacity>
        <Text
          style={styles.forgot_button}
          onPress={() => props.navigation.navigate('Login')}
        >
          Already Member? Login
        </Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 50,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  yourStory: {
    position: 'relative',
    top: -35,
    fontSize: 20,
    fontStyle: 'italic',
    color: '#085167',
    fontWeight: 'bold',
    letterSpacing: 5,
  },
  image: {
    width: 300,
    height: 300,
  },

  inputView: {
    backgroundColor: '#0c7696',
    borderRadius: 30,
    width: '70%',
    height: 45,
    marginBottom: 20,
    color: '#fff',
    alignItems: 'center',
  },

  TextInput: {
    height: 50,
    flex: 1,
    padding: 10,
    marginLeft: 20,
  },

  forgot_button: {
    color: '#000',
    height: 20,
    marginBottom: 30,
  },

  loginBtn: {
    width: '80%',
    borderRadius: 25,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 40,
    marginBottom: 20,
    backgroundColor: '#053240',
  },
  loginText: {
    color: '#fff',
  },
});

export default RegisterComponent;
