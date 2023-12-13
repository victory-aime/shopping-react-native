import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {HomeScreen, Notification} from '../screen';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {
  faUserGroup,
  faShop,
  faClipboard,
  faBell,
} from '@fortawesome/free-solid-svg-icons';
import {MainParamsList} from '../../@types/navigation';
import {StatusBar} from 'react-native';
import {CustomHeader, NotificationHeader} from '../components';

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

            if (route.name === 'Home') {
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
            } else if (route.name === 'Notification') {
              icon = (
                <FontAwesomeIcon icon={faBell} size={size} color={color} />
              );
            }

            return icon;
          },
        })}
        tabBarOptions={{
          activeTintColor: '#5775CD',
          inactiveTintColor: '#9094B8',
        }}>
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="test" component={HomeScreen} />
        <Tab.Screen name="test2" component={HomeScreen} />
        <Tab.Screen
          options={{header: () => <NotificationHeader />}}
          name="Notification"
          component={Notification}
        />
      </Tab.Navigator>
    </>
  );
};

export default TabNavigators;
