import React from 'react';
import {ScrollView, StyleSheet, View} from 'react-native';
import {SimpleProduct, ProductAdded, CardContainer} from '../../components';
import CustomButton from '../../components/CustomButton/CustomButton';
import {faPlus} from '@fortawesome/free-solid-svg-icons';

const ProductList = () => {
  return (
    <View style={styles.container}>
      <ScrollView>
        <SimpleProduct />
        <ProductAdded />
      </ScrollView>
      <View style={styles.absoluteButtonContainer}>
        <CustomButton
          textColor="#fff"
          icon={faPlus}
          textStyles={{fontSize: 18}}>
          New product
        </CustomButton>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  absoluteButtonContainer: {
    position: 'absolute',
    bottom: 40,
    right: 10,
  },
});

export default ProductList;
