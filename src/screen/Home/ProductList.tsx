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
  const [selectedItem, setSelectedItem] = useState(null);
  const [showProductUnderline, setShowProductUnderline] = useState(false);

  useEffect(() => {
    if (modalVisible) {
      StatusBar.setBarStyle('light-content');
      StatusBar.setBackgroundColor('rgba(0, 0, 0, 0.5)');
    } else {
      StatusBar.setBarStyle('dark-content');
      StatusBar.setBackgroundColor('transparent');
    }
  }, [modalVisible]);

  const handlePercentIconPress = () => {
    setModalVisible(true);
  };

  const handleCloseModal = () => {
    setModalVisible(false);
  };

  const handleResetProductAdded = () => {
    setProductAddedKey(prevKey => prevKey + 1);
    setSelectedItem(null);
  };

  const handleResetSecondHeader = () => {
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
              handleResetSecondHeader();
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

        <View style={styles.absoluteButtonContainer}>
          <CustomButton
            textColor="#fff"
            icon={faPlus}
            textStyles={{fontSize: 18}}
            onPress={handleCloseModal}>
            New product
          </CustomButton>
        </View>
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
    right: 20,
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
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

export default ProductList;
