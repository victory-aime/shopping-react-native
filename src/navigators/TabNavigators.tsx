import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {
  faUserGroup,
  faShop,
  faClipboard,
  faCog,
} from '@fortawesome/free-solid-svg-icons';
import {MainParamsList} from '../../@types/navigation';
import {StatusBar} from 'react-native';
import {CustomHeader, NotificationHeader} from '../components';
import {HomeStack} from './index';

const Tab = createBottomTabNavigator<MainParamsList>();

const TabNavigators = () => {
  return (
    <>
      <StatusBar
        barStyle="dark-content"
        hidden={false}
        backgroundColor="white"
      />

      <Tab.Navigator
        initialRouteName="Home"
        screenOptions={({route}) => ({
          tabBarShowLabel: false,
          tabBarStyle: {
            display: 'flex',
            height: 60,
            justifyContent: 'center',
            alignItems: 'flex-start',
          },
          tabBarOptions: {
            activeTintColor: '#5775CD',
            inactiveTintColor: '#9094B8',
          },
          header: () => <CustomHeader />,
          tabBarIcon: ({color, size}) => {
            let icon;

            if (route.name === 'HomeStack') {
              icon = (
                <FontAwesomeIcon icon={faUserGroup} size={size} color={color} />
              );
            } else if (route.name === 'test') {
              icon = (
                <FontAwesomeIcon icon={faShop} size={size} color={color} />
              );
            } else if (route.name === 'test2') {
              icon = (
                <FontAwesomeIcon icon={faClipboard} size={size} color={color} />
              );
            } else if (route.name === 'Settings') {
              icon = <FontAwesomeIcon icon={faCog} size={size} color={color} />;
            }

            return icon;
          },
        })}
        tabBarOptions={{
          activeTintColor: '#5775CD',
          inactiveTintColor: '#9094B8',
        }}>
        <Tab.Screen
          options={{headerShown: false}}
          name="HomeStack"
          component={HomeStack}
        />
        <Tab.Screen
          options={{headerShown: false}}
          name="test"
          component={HomeStack}
        />
        <Tab.Screen
          options={{headerShown: false}}
          name="test2"
          component={HomeStack}
        />
        <Tab.Screen
          options={{header: () => <NotificationHeader />}}
          name="Settings"
          component={HomeStack}
        />
      </Tab.Navigator>
    </>
  );
};

export default TabNavigators;
