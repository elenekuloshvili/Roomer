import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {LoginScreen, SignupScreen, WelcomeScreen} from '../screens';
import {RootStackParamList} from './types';

const Stack = createNativeStackNavigator<RootStackParamList>();

const BeforeAuth = () => {
  const {Navigator, Screen} = Stack;
  return (
    <Navigator screenOptions={{headerShown: false}}>
      <Screen name="Welcome" component={WelcomeScreen} />
      <Screen name="Login" component={LoginScreen} />
      <Screen name="Signup" component={SignupScreen} />
    </Navigator>
  );
};

export default BeforeAuth;
