/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Button, Text, View} from 'react-native';
import Login from './src/screens/auth/Login/Login';
import Signup_EnterEmail from './src/screens/auth/Signup/Signup_EnterEmail';
import Signup_EnterVerificationCode from './src/screens/auth/Signup/Signup_EnterVerificationCode';
import Signup_ChooseUsername from './src/screens/auth/Signup/Signup_ChooseUsername';
import Signup_ChoosePassword from './src/screens/auth/Signup/Signup_ChoosePassword';
import Signup_AccountCreated from './src/screens/auth/Signup/Signup_AccountCreated';
import InitialScreen from './src/screens/InitialScreen/InitialScreen';
import ForgotPassword_EnterEmail from './src/screens/auth/ForgotPassword/ForgotPassword_EnterEmail';
import ForgotPassword_EnterVerificationCode from './src/screens/auth/ForgotPassword/ForgotPassword_EnterVerificationCode';
import ForgotPassword_ChoosePassword from './src/screens/auth/ForgotPassword/ForgotPassword_ChoosePassword';
import ForgotPassword_AccountRecovered from './src/screens/auth/ForgotPassword/ForgotPassword_AccountRecovered';

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Welcome" component={InitialScreen} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Signup_EnterEmail" component={Signup_EnterEmail} />
        <Stack.Screen
          name="Signup_EnterVerificationCode"
          component={Signup_EnterVerificationCode}
        />
        <Stack.Screen
          name="Signup_ChooseUsername"
          component={Signup_ChooseUsername}
        />
        <Stack.Screen
          name="Signup_ChoosePassword"
          component={Signup_ChoosePassword}
        />
        <Stack.Screen
          name="Signup_AccountCreated"
          component={Signup_AccountCreated}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
