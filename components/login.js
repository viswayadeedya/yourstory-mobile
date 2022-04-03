import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  Button,
  ActivityIndicator,
  TouchableOpacity,
} from 'react-native';
import axiosConfig from '../axiosConfig';
import { environment } from '../environment';

function LoginComponent(props) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);

  const url = 'users';

  const loginUser = async (props) => {
    setLoading(true);
    axiosConfig
      .post(`${url}/login`, {
        email: email,
        password: password,
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
    <View>
      {loading ? (
        <ActivityIndicator
          //visibility of Overlay Loading Spinner
          visible={loading}
          //Text with the Spinner
          textContent={'Loading...'}
          //Text style of the Spinner Text
          textStyle={styles.spinnerTextStyle}
        />
      ) : (
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

          <TouchableOpacity>
            <Text style={styles.forgot_button}>Forgot Password?</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.loginBtn}
            onPress={() => loginUser(props)}
          >
            <Text style={styles.loginText}>LOGIN</Text>
          </TouchableOpacity>

          <TouchableOpacity>
            <Text
              style={styles.forgot_button}
              onPress={() => props.navigation.navigate('Register')}
            >
              New user? Register
            </Text>
          </TouchableOpacity>
        </View>
      )}
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

export default LoginComponent;
