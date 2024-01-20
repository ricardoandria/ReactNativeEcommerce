import {NavigationContainer} from '@react-navigation/native';

import React from 'react';
import {SafeAreaView, Text, View} from 'react-native';
import Login from './src/screens/LoginScreen';
import Home from './src/screens/HomeScreen';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import RegisterScreen from './src/screens/RegisterScreen';
import TabNavigators from './src/navigators/TabNavigators';
import DetailsScreen from './src/screens/DetailsScreen';
import CartScreen from './src/screens/CartScreen';
import Toast from 'react-native-toast-message';

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Login"
        screenOptions={{headerShown: false}}>
        <Stack.Screen
          name="Login"
          component={Login}
          options={{animation: 'slide_from_bottom'}}
        />
        <Stack.Screen
          name="TabNavigator"
          component={TabNavigators}
          options={{animation: 'slide_from_bottom'}}
        />
        <Stack.Screen
          name="Home"
          component={Home}
          options={{animation: 'slide_from_bottom'}}
        />
        <Stack.Screen
          name="Register"
          component={RegisterScreen}
          options={{animation: 'slide_from_left'}}
        />
        <Stack.Screen
          name="DetailsProduct"
          component={DetailsScreen}
          options={{animation: 'slide_from_right'}}
        />
        <Stack.Screen
          name="Cart"
          component={CartScreen}
          options={{animation: 'slide_from_right'}}
        />
      </Stack.Navigator>
      <Toast />
    </NavigationContainer>
  );
}

export default App;
