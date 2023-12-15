import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';
import CardContainer from '../../components/CardContainer/CardContainer';
import {IconContainer, ImageContainer} from '../../components';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faPlus, faMinus} from '@fortawesome/free-solid-svg-icons';
import React, {useState} from 'react';
import {productList} from '../../mock/productList';
import CheckBox from '@react-native-community/checkbox';

const ProductAdded = ({onToggleSecondHeader}: any) => {
  const [checkedItems, setCheckedItems] = useState({});
  const [toggleCheckBox, setToggleCheckBox] = useState(false);

  const handleCheckBoxToggle = () => {
    setToggleCheckBox(!toggleCheckBox);
  };

  const handleItemCheckBoxToggle = (itemId: number) => {
    setCheckedItems(prevCheckedItems => ({
      ...prevCheckedItems,
      [itemId]: !prevCheckedItems[itemId],
    }));
  };

  return (
    <>
      {productList.map(item => (
        <TouchableOpacity
          key={item.id}
          onPress={() => {
            onToggleSecondHeader();
            handleCheckBoxToggle();
          }}>
          <CardContainer
            backgroundColor="#F4F8FB"
            padding={10}
            margin={10}
            borderRadius={10}>
            <View style={styles.checkBoxContainer}>
              {toggleCheckBox && (
                <CheckBox
                  disabled={false}
                  value={checkedItems[item.id] || false}
                  onValueChange={() => handleItemCheckBoxToggle(item.id)}
                  tintColors={{true: '#219653'}}
                />
              )}
            </View>

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
                <Text style={[styles.titleStyle, {color: '#0B1527'}]}>
                  {item.residue}
                </Text>
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
        </TouchableOpacity>
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

export default ProductAdded;
