import React, {useEffect, useState} from 'react';
import {View, StyleSheet, ScrollView, StatusBar, Text} from 'react-native';
import {
  CustomButton,
  SimpleProduct,
  ProductAdded,
  ProductHeader,
  BottomModal,
  SelectProductHeader,
  ProductUnderline,
} from '../../components';
import {faPlus} from '@fortawesome/free-solid-svg-icons';

const ProductList = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [showSecondHeader, setShowSecondHeader] = useState(false);
  const [productAddedKey, setProductAddedKey] = useState(0);
  const [showProductUnderline, setShowProductUnderline] = useState(false);

  useEffect(() => {
    if (modalVisible) {
      StatusBar.setBarStyle('light-content');
      StatusBar.setBackgroundColor('rgba(0, 0, 0, 0.5)');
    } else {
      StatusBar.setBarStyle('dark-content');
      StatusBar.setBackgroundColor('transparent');
    }

    // Cleanup function to reset status bar color when component unmounts
    return () => {
      StatusBar.setBarStyle('dark-content');
      StatusBar.setBackgroundColor('transparent');
    };
  }, [modalVisible]);

  const handlePercentIconPress = () => {
    setModalVisible(true);
  };

  const handleCloseModal = () => {
    setModalVisible(false);
  };

  const handleResetProductAdded = () => {
    setProductAddedKey(prevKey => prevKey + 1);
    setShowProductUnderline(false); // Reset showProductUnderline when resetting productAdded
    setShowSecondHeader(false);
  };

  const handleCheckPress = () => {
    setShowSecondHeader(false);
    setShowProductUnderline(true);
  };

  return (
    <>
      <View style={styles.container}>
        {showSecondHeader ? (
          <SelectProductHeader
            onClose={() => {
              handleResetProductAdded();
            }}
            onCheckPress={handleCheckPress}
          />
        ) : (
          <ProductHeader onPercentIconPress={handlePercentIconPress} />
        )}
        <ScrollView>
          {showProductUnderline ? (
            <>
              <SimpleProduct />
              <ProductUnderline />
            </>
          ) : (
            <>
              <SimpleProduct />
              <ProductAdded
                key={productAddedKey}
                showSecondHeader={showSecondHeader}
                onToggleSecondHeader={() =>
                  setShowSecondHeader(prevState => !prevState)
                }
              />
            </>
          )}
        </ScrollView>

        <View
          style={
            showProductUnderline
              ? styles.updatedButtonContainer
              : styles.absoluteButtonContainer
          }>
          <CustomButton
            textColor="#fff"
            icon={faPlus}
            textStyles={{fontSize: 18}}
            onPress={handleCloseModal}>
            New product
          </CustomButton>
        </View>

        {showProductUnderline && (
          <View>
            <Text>Total price:</Text>
            <View style={{flexDirection: 'row'}}>
              <Text style={styles.titleStyle}>1 822 220 TMT</Text>
              <Text style={styles.textQuantityStyles}>2 555 555 TMT</Text>
            </View>
            <CustomButton style={styles.button} textColor="white">
              Continue
            </CustomButton>
          </View>
        )}

        {modalVisible && <ModalOverlay />}
        <BottomModal visible={modalVisible} onClose={handleCloseModal} />
      </View>
    </>
  );
};

const ModalOverlay = () => <View style={styles.overlay} />;

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
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  totalContainer: {
    position: 'absolute',
    flexDirection: 'column',
    backgroundColor: 'white',
    bottom: 0,
    right: 0,
    left: 0,
  },
  titleStyle: {
    fontFamily: 'Inter',
    fontSize: 22,
    fontWeight: 'bold',
    textAlign: 'center',
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
  button: {
    position: 'absolute',
    bottom: 0,
    right: 10,
  },

  updatedButtonContainer: {
    position: 'absolute',
    bottom: 70,
    right: 10,
  },
});

export default ProductList;
