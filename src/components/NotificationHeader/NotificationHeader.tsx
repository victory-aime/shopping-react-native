import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faArrowLeft} from '@fortawesome/free-solid-svg-icons';
import {useNavigation} from '@react-navigation/native';

const NotificationHeader = () => {
  const navigation = useNavigation();
  const handlePress = () => {
    // @ts-ignore
    navigation.navigate('Home');
  };
  return (
    <View style={styles.container}>
      <View style={styles.ArrowContainer}>
        <TouchableOpacity onPress={handlePress}>
          <FontAwesomeIcon icon={faArrowLeft} color="black" size={22} />
        </TouchableOpacity>
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.titleStyle}>Notification</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    padding: 16,
    paddingTop: 20,
    backgroundColor: 'white',
    elevation: 5,
  },
  ArrowContainer: {
    display: 'flex',
    alignSelf: 'center',
    justifyContent: 'center',
  },
  textContainer: {
    flex: 1,
  },
  titleStyle: {
    fontFamily: 'Inter',
    fontSize: 22,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#0B1527',
  },
});
export default NotificationHeader;
