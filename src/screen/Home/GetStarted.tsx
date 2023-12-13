import {
  ImageBackground,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import {SafeAreaView} from 'react-native';

const GetStarted = ({navigation}: any) => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.headerStyles}>
        <ImageBackground
          source={require('../../assets/main.jpg')}
          style={styles.imageBackground}
        />
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.textHeader}>Welcome Shopping App</Text>
        <Text style={styles.textSub}>
          This is just a simple app for training. Let's get started and enjoy!
        </Text>
      </View>
      <TouchableOpacity
        style={styles.buttonStyles}
        onPress={() => navigation.navigate('Auth', {screen: 'Login'})}>
        <Text style={{color: 'white', fontSize: 18}}>Get Started</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default GetStarted;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    height: '100%',
    backgroundColor: '#fff',
  },
  headerStyles: {
    width: '100%',
    height: '50%',
    marginTop: 80,
    overflow: 'hidden',
  },
  imageBackground: {
    flex: 1,
  },
  textContainer: {
    height: '20%',
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textHeader: {
    fontSize: 36,
    color: 'black',
  },
  textSub: {
    fontSize: 20,
    color: 'gray',
    textAlign: 'center',
  },
  buttonStyles: {
    backgroundColor: '#5775CD',
    padding: 15,
    alignItems: 'center',
    borderRadius: 8,
    margin: 10,
  },
});
