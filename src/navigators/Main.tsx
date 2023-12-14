import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {GetStarted, Notification} from '../screen';
import {MainParamsList} from '../../@types/navigation';
import {StatusBar} from 'react-native';
import TabNavigators from './TabNavigators';

const Stack = createNativeStackNavigator<MainParamsList>();

// @refresh reset
const MainNavigator = () => {
  return (
    <>
      <StatusBar
        barStyle="dark-content"
        hidden={false}
        backgroundColor="white"
      />
      <Stack.Navigator>
        <Stack.Screen
          options={{headerShown: false}}
          name="GetStarted"
          component={GetStarted}
        />
      </Stack.Navigator>
    </>
  );
};

export default MainNavigator;
