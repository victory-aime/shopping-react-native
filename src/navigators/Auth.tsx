import React from 'react';

import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {LoginScreen, RegisterScreen} from '../screen';
import {AuthParamsList} from '../../@types/navigation';
import {StatusBar} from 'react-native';

const Stack = createNativeStackNavigator<AuthParamsList>();

// @refresh reset
const AuthNavigator = () => {
  return (
    <>
      <StatusBar
        barStyle="light-content"
        hidden={false}
        backgroundColor="#5775CD"
      />
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Register" component={RegisterScreen} />
      </Stack.Navigator>
    </>
  );
};

export default AuthNavigator;
