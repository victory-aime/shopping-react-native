import React, {useState} from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faShop, faPlus, faClipboard} from '@fortawesome/free-solid-svg-icons';
import {CustomButton, CardContainer, IconContainer} from '../index';
import {useNavigation} from '@react-navigation/native';

const ShopDetails = ({
  title,
  description,
  residueColor,
  labelColor,
  residue,
}: any) => {
  const [isPressed, setIsPressed] = useState(false);
  const navigation = useNavigation();
  const handlePress = () => {
    setIsPressed(!isPressed);
  };

  const handleButton1Press = () => {
    // @ts-ignore
    navigation.navigate('ProductList');
  };

  const handleButton2Press = () => {
    // Add your logic for the second button press
  };

  return (
    <TouchableOpacity onPress={handlePress}>
      <CardContainer
        backgroundColor={isPressed ? '#5775CD' : '#F4F8FB'}
        padding={10}
        margin={10}
        borderRadius={10}>
        <View style={styles.rowContainer}>
          <IconContainer
            backgroundColor={isPressed ? '#F4F8FB' : '#5775CD'}
            style={styles.shopContainer}>
            <FontAwesomeIcon
              icon={faShop}
              size={20}
              color={isPressed ? '#5775CD' : '#F4F8FB'}
            />
          </IconContainer>

          <View style={styles.textContainer}>
            <Text
              style={[
                styles.titleStyle,
                {color: isPressed ? 'white' : '#0B1527'},
              ]}>
              {title}
            </Text>
          </View>
        </View>
        <View style={styles.descriptionContainer}>
          <Text
            style={[
              styles.descriptionStyle,
              {color: isPressed ? 'white' : '#0B1527'},
            ]}>
            {description}
          </Text>
        </View>
        {isPressed && (
          <>
            <View style={styles.buttonContainer}>
              <View style={{marginRight: 16}}>
                <CustomButton
                  onPress={handleButton1Press}
                  backgroundColor="rgba(255, 255, 255, 0.15)"
                  textColor="#fff"
                  icon={faPlus}
                  textStyles={{fontSize: 18}}>
                  Add product
                </CustomButton>
              </View>
              <CustomButton
                onPress={handleButton1Press}
                backgroundColor="rgba(255, 255, 255, 0.15)"
                textColor="#fff"
                icon={faClipboard}
                textStyles={{fontSize: 18}}>
                Orders history
              </CustomButton>
            </View>
          </>
        )}
        <View style={styles.divider}></View>
        <View style={styles.rowContainer}>
          <Text
            style={[
              styles.labelStyle,
              {color: isPressed ? 'white' : labelColor},
            ]}>
            Residue:
          </Text>
          <Text
            style={[
              styles.valueStyle,
              {color: isPressed ? 'white' : residueColor},
            ]}>
            {residue}
          </Text>
        </View>
      </CardContainer>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#F4F8FB',
    padding: 10,
    margin: 10,
    borderRadius: 10,
  },

  rowContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
  },

  shopContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 10,
    marginRight: 10,
    borderRadius: 8,
    padding: 15,
  },

  textContainer: {
    flex: 1,
    marginLeft: 10,
  },

  titleStyle: {
    fontFamily: 'Inter',
    fontSize: 22,
    fontWeight: 'bold',
    textAlign: 'justify',
    color: '#0B1527',
  },

  descriptionContainer: {
    marginTop: 18,
  },

  descriptionStyle: {
    marginLeft: 10,
    fontFamily: 'Inter',
    fontSize: 16,
    fontWeight: '400',
    textAlign: 'justify',
    color: '#0B1527',
  },

  divider: {
    marginTop: 15,
    borderBottomWidth: 4,
    borderBottomColor: 'white',
  },

  labelStyle: {
    marginLeft: 10,
    fontFamily: 'Inter',
    fontSize: 16,
    fontWeight: '700',
    textAlign: 'left',
    color: '#FF004B',
  },

  valueStyle: {
    marginLeft: 10,
    fontFamily: 'Inter',
    fontSize: 16,
    fontWeight: '900',
    textAlign: 'left',
    color: '#0B1527',
  },
  buttonContainer: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    padding: 4,
  },

  buttonText: {
    color: '#5775CD',
    fontWeight: 'bold',
  },
});

export default ShopDetails;
