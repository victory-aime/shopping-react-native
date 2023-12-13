import {Image, StatusBar, StyleSheet, View, Text} from 'react-native';

const SplashScreen = ({navigation}: any) => {
  setTimeout(() => {
    navigation.replace('Login');
  }, 3000);
  return (
    <View style={styles.container}>
      <StatusBar
        barStyle="light-content"
        hidden={false}
        backgroundColor="#5775CD"
      />
      <Image
        source={require('../../assets/images/logoBlue.png')}
        style={{
          width: 50,
          height: 50,
        }}
      />
      <Text style={styles.textStyle}> Bosh</Text>
    </View>
  );
};

export default SplashScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#5775CD',
  },
  textStyle: {
    fontFamily: 'OpenSans-Bold',
    fontSize: 30,
    color: 'white',
  },
});
