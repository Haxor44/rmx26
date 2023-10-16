import { StatusBar } from 'expo-status-bar';
import { Provider } from "react-redux";
import { StyleSheet, Text, View } from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Header from "./src/Header";
import store from "./redux/store";
import HomeScreen from "./screens/HomeScreen";
import HomeScreen2 from "./screens/HomeScreen2";
import ServiceDetails from "./screens/ServiceDetails";
import CheckoutScreen from "./screens/CheckoutScreen";
import OnboardScreen from './screens/OnboardScreen';
const Stack = createStackNavigator();

export default function App() {
  return (
    <Provider store={store}>
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="OnboardScreen" component={OnboardScreen} />
        <Stack.Screen name="HomeScreen2" component={HomeScreen2} />
        <Stack.Screen name="HomeScreen" component={HomeScreen} />
        <Stack.Screen name="ServiceDetails" component={ServiceDetails} />
        <Stack.Screen name="CheckoutScreen" component={CheckoutScreen} />
      </Stack.Navigator>
    </NavigationContainer>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
