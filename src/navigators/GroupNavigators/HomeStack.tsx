import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {MainParamsList} from '../../../@types/navigation';
import {HomeScreen, Notification} from '../../screen';
import {NotificationHeader, ProductHeader} from '../../components';
import React from 'react';
import ProductList from '../../screen/Home/ProductList';

const Stack = createNativeStackNavigator<MainParamsList>();

const HomeStack = () => {
  return (
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
      <Stack.Screen
        options={{headerShown: false}}
        name="ProductList"
        component={ProductList}
      />
    </Stack.Navigator>
  );
};

export default HomeStack;
