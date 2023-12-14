import {View, Text, StyleSheet} from 'react-native';
import CardContainer from '../../components/CardContainer/CardContainer';
import {IconContainer} from '../../components';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faShop} from '@fortawesome/free-solid-svg-icons';
import React from 'react';
import {simpleData} from '../../mock/simpleData';
const SimpleProduct = () => {
  return (
    <>
      {simpleData.map(item => (
        <CardContainer
          key={item.id}
          backgroundColor="none"
          padding={10}
          margin={10}
          borderRadius={10}>
          <View style={styles.rowContainer}>
            <IconContainer
              backgroundColor="#5775CD"
              style={styles.shopContainer}>
              <FontAwesomeIcon icon={faShop} size={20} color="#F4F8FB" />
            </IconContainer>

            <View style={styles.textContainer}>
              <Text style={[styles.titleStyle, {color: '#0B1527'}]}>
                {item.title}
              </Text>
            </View>
          </View>
          <View style={styles.descriptionContainer}>
            <Text style={[styles.descriptionStyle, {color: '#0B1527'}]}>
              {item.description}
            </Text>
          </View>
        </CardContainer>
      ))}
    </>
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
});

export default SimpleProduct;
