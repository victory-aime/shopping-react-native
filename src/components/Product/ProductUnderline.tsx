import {View, Text, StyleSheet, Image} from 'react-native';
import CardContainer from '../../components/CardContainer/CardContainer';
import {IconContainer, ImageContainer} from '../../components';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faPlus, faMinus} from '@fortawesome/free-solid-svg-icons';
import React from 'react';
import {productListUnderline} from '../../mock/productListUnderline';

const ProductUnderline = () => {
  return (
    <>
      {productListUnderline.map(item => (
        <CardContainer
          backgroundColor="#F4F8FB"
          padding={10}
          margin={10}
          borderRadius={10}
          key={item.id}>
          <View style={styles.rowContainer}>
            <ImageContainer margin={20} width={100} height={100}>
              <Image source={item.image} style={styles.productImage} />
            </ImageContainer>
            <View style={styles.textContainer}>
              <Text style={[styles.titleStyle, {color: '#0B1527'}]}>
                {item.title}
              </Text>
              <Text style={[styles.dateStyle, {color: '#0B1527'}]}>
                {item.date}
              </Text>
              <View style={{flexDirection: 'row'}}>
                <Text style={[styles.titleStyle, {color: '#0B1527'}]}>
                  {item.residue}
                </Text>
                <Text style={styles.textQuantityStyles}>
                  {item.quantityUnderline}
                </Text>
              </View>
            </View>
          </View>
          <View style={styles.buttonEndContainer}>
            <IconContainer style={styles.shopContainer}>
              <FontAwesomeIcon icon={faMinus} size={15} color={'#5775CD'} />
            </IconContainer>
            <View
              style={{
                paddingLeft: 10,
                paddingRight: 10,
                marginTop: 10,
                marginBottom: 5,
              }}>
              <Text style={[styles.descriptionStyle, {color: '#0B1527'}]}>
                {item.quantity}
              </Text>
            </View>
            <IconContainer
              backgroundColor={'#5775CD'}
              style={styles.shopContainer}>
              <FontAwesomeIcon icon={faPlus} size={15} color={'#F4F8FB'} />
            </IconContainer>
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

  productImage: {
    width: '100%',
    height: '100%',
  },

  rowContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
  },

  shopContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#5775CD',
    padding: 6,
  },

  textContainer: {
    flex: 1,
    marginLeft: 10,
  },

  titleStyle: {
    padding: 5,
    fontFamily: 'Inter',
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'justify',
    color: '#0B1527',
  },

  textQuantityStyles: {
    padding: 10,
    fontFamily: 'Inter',
    fontSize: 14,
    fontWeight: '400',
    textDecorationLine: 'line-through',
    textAlign: 'justify',
    color: '#FF004B',
  },

  buttonEndContainer: {
    display: 'flex',
    alignItems: 'flex-end',
    justifyContent: 'flex-end',
    flexDirection: 'row',
    marginRight: 20,
  },

  dateStyle: {
    marginLeft: 5,
    fontFamily: 'Inter',
    fontSize: 16,
    fontWeight: '400',
    textAlign: 'justify',
    color: '#0B1527',
  },
  descriptionStyle: {
    fontFamily: 'Inter',
    fontSize: 16,
    fontWeight: '400',
    textAlign: 'center',
    color: '#0B1527',
  },
  checkBoxContainer: {
    display: 'flex',
    alignItems: 'flex-end',
    justifyContent: 'flex-end',
  },
});

export default ProductUnderline;
