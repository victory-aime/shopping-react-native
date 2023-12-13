import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import {ApplicationStackParamList} from '../../@types/navigation';
import MainNavigator from './Main';
import AuthNavigator from './Auth';
import TabNavigators from './TabNavigators';

const Stack = createNativeStackNavigator<ApplicationStackParamList>();

const ApplicationNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="Main" component={MainNavigator} />
        <Stack.Screen name="Auth" component={AuthNavigator} />
        <Stack.Screen name="Tabs" component={TabNavigators} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default ApplicationNavigator;
