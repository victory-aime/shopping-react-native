import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faShop} from '@fortawesome/free-solid-svg-icons';

const ShopDetails = ({
  title,
  description,
  residueColor,
  labelColor,
  residue,
}: any) => {
  return (
    <View style={styles.container}>
      <View style={styles.rowContainer}>
        <View style={styles.shopContainer}>
          <FontAwesomeIcon icon={faShop} size={20} color="white" />
        </View>
        <View style={styles.textContainer}>
          <Text style={styles.titleStyle}>{title}</Text>
        </View>
      </View>
      <View style={styles.descriptionContainer}>
        <Text style={styles.descriptionStyle}>{description}</Text>
      </View>
      <View style={styles.divider}></View>
      <View style={styles.rowContainer}>
        <Text style={[styles.labelStyle, {color: labelColor}]}>Residue:</Text>
        <Text style={[styles.valueStyle, {color: residueColor}]}>
          {residue}
        </Text>
      </View>
    </View>
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
    backgroundColor: '#5775CD',
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
});

export default ShopDetails;
