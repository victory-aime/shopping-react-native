import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {MainParamsList} from '../../../@types/navigation';
import {HomeScreen, Notification} from '../../screen';
import {NotificationHeader} from '../../components';
import React from 'react';

const Stack = createNativeStackNavigator<MainParamsList>();

const HomeStack = () => {
  return (
    <>
      <Stack.Navigator screenOptions={{headerShown: true}}>
        <Stack.Screen
          options={{headerShown: false}}
          name="Home"
          component={HomeScreen}
        />
        <Stack.Screen
          options={{header: () => <NotificationHeader />}}
          name="Notification"
          component={Notification}
        />
      </Stack.Navigator>
    </>
  );
};

export default HomeStack;
