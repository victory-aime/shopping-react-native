import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {
  faArrowLeft,
  faPercent,
  faMessage,
} from '@fortawesome/free-solid-svg-icons';
import {useNavigation} from '@react-navigation/native';
import {CardContainer, IconContainer} from '../index';

const ProductHeader = ({onPercentIconPress}: any) => {
  const navigation = useNavigation();
  const handlePercentIconPress = () => {
    if (onPercentIconPress) {
      navigation.setOptions({tabBarVisible: false});
      onPercentIconPress();
    }
  };
  const handlePress = () => {
    // @ts-ignore
    navigation.navigate('Home');
  };

  const handlePressLog = () => {
    console.log('message icon pressed');
  };

  return (
    <CardContainer padding={5} style={styles.container} backgroundColor="white">
      <IconContainer padding={5} onPress={handlePress}>
        <FontAwesomeIcon icon={faArrowLeft} color="black" size={22} />
      </IconContainer>
      <View style={styles.textContainer}>
        <Text style={styles.titleStyle}>Add Product</Text>
      </View>
      <IconContainer
        padding={5}
        marginRight={5}
        onPress={handlePercentIconPress}>
        <FontAwesomeIcon icon={faPercent} color="black" size={22} />
      </IconContainer>
      <IconContainer padding={5} onPress={handlePressLog}>
        <FontAwesomeIcon icon={faMessage} color="black" size={22} />
      </IconContainer>
    </CardContainer>
  );
};

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    padding: 16,
    paddingTop: 20,
    elevation: 5,
  },
  containerModal: {
    flex: 1,
    padding: 24,
    justifyContent: 'center',
    backgroundColor: 'grey',
  },

  contentContainer: {
    flex: 1,
    alignItems: 'center',
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
  modalBackground: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  closeButton: {
    position: 'absolute',
    top: 20,
    right: 20,
    backgroundColor: '#fff',
    borderRadius: 8,
    padding: 10,
  },
  closeButtonText: {
    color: '#333',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default ProductHeader;
