import HomeComponent from './components/home';
import LoginComponent from './components/login';
import RegisterComponent from './components/signup';
import { View, StyleSheet, Button, Alert } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import BrowseScreen from './components/browse';
import NewStoryScreen from './components/new-story';
import NewPartScreen from './components/new-part';

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

function AuthScreen() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
      initialRouteName="Login"
    >
      <Stack.Group>
        <Stack.Screen name="Home" component={HomeComponent} />
        <Stack.Screen name="Addpart" component={NewPartScreen} />
        <Stack.Screen name="Login" component={LoginComponent} />
        <Stack.Screen name="Register" component={RegisterComponent} />
      </Stack.Group>
    </Stack.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator
        screenOptions={{
          headerShown: false,
        }}
        initialRouteName="Login"
      >
        <Stack.Group>
          <Drawer.Screen name="Home" component={HomeComponent} />
          <Drawer.Screen name="Auth" component={AuthScreen} />
          <Drawer.Screen name="Browse" component={BrowseScreen} />
          <Drawer.Screen name="New Story" component={NewStoryScreen} />
          <Drawer.Screen name="Addpart" component={NewPartScreen} />
        </Stack.Group>
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
