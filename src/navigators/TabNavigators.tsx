import {View, Text, Image} from 'react-native';
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Home from '../screens/HomeScreen';
import {NavigationContainer} from '@react-navigation/native';
import SearchScreen from '../screens/SearchScreen';
import FavoriteScreen from '../screens/FavoriteScreen';
import ProfileScreen from '../screens/ProfileScreen';
import Icon from 'react-native-vector-icons/Ionicons';
import {Colors} from '../assets/Colors';

const Tab = createBottomTabNavigator();

export default function TabNavigators() {
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        tabBarIcon: ({focused, color, size}) => {
          let iconName = '';

          if (route.name === 'Home') {
            iconName = focused ? 'home-sharp' : 'home-outline';
          } else if (route.name === 'Search') {
            iconName = focused
              ? 'search-circle-sharp'
              : 'search-circle-outline';
          } else if (route.name === 'Favorite') {
            iconName = focused ? 'heart-circle' : 'heart-circle-outline';
          } else if (route.name === 'Profile') {
            iconName = focused ? 'happy-sharp' : 'happy-outline';
          }

          return <Icon name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: Colors.primary,
        tabBarInactiveTintColor: 'gray',
        headerShown: false,
        tabBarHideOnKeyboard: true,
        tabBarLabelStyle: {
          fontSize: 15,
        },
        tabBarStyle: {
          paddingBottom: 5,
        },
      })}>
      <Tab.Screen name="Home" component={Home}></Tab.Screen>
      <Tab.Screen name="Search" component={SearchScreen}></Tab.Screen>
      <Tab.Screen name="Favorite" component={FavoriteScreen}></Tab.Screen>
      <Tab.Screen name="Profile" component={ProfileScreen}></Tab.Screen>
    </Tab.Navigator>
  );
}
