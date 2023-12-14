import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {
  faArrowLeft,
  faPercent,
  faMessage,
} from '@fortawesome/free-solid-svg-icons';
import {useNavigation} from '@react-navigation/native';
import {IconContainer} from '../index';
import CardContainer from '../CardContainer/CardContainer';

const ProductHeader = () => {
  const navigation = useNavigation();
  const handlePress = () => {
    // @ts-ignore
    navigation.navigate('Home');
  };
  return (
    <CardContainer padding={5} style={styles.container} backgroundColor="white">
      <IconContainer padding={5} onPress={handlePress}>
        <FontAwesomeIcon icon={faArrowLeft} color="black" size={22} />
      </IconContainer>
      <View style={styles.textContainer}>
        <Text style={styles.titleStyle}>Add Product</Text>
      </View>
      <IconContainer padding={5} marginRight={5} onPress={handlePress}>
        <FontAwesomeIcon icon={faPercent} color="black" size={22} />
      </IconContainer>
      <IconContainer padding={5} onPress={handlePress}>
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
export default ProductHeader;
