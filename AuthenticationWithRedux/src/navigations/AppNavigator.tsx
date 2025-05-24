import React from 'react';

// Navigations
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {RootStackParamList} from './type';

// Screens
import Splash from '../screens/auth/Splash';
import Login from '../screens/auth/Login';
import Home from '../screens/home/Home';
import HomeDetail from '../screens/home/HomeDetails';

const Stack = createNativeStackNavigator<RootStackParamList>();

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Splash"
        screenOptions={{headerShown: false}}>
        <Stack.Screen name="Splash" component={Splash} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="HomeDetails" component={HomeDetail} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
