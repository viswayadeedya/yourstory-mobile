import HomeComponent from './components/home';
import LoginComponent from './components/login';
import RegisterComponent from './components/signup';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createDrawerNavigator } from '@react-navigation/drawer';

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
      <Stack.Screen name="Login" component={LoginComponent} />
      <Stack.Screen name="Register" component={RegisterComponent} />
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
        <Drawer.Screen name="Home" component={HomeComponent} />
        <Drawer.Screen name="Auth" component={AuthScreen} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
