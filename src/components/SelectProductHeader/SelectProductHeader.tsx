import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faXmark, faCheck} from '@fortawesome/free-solid-svg-icons';
import {CardContainer, IconContainer} from '../index';

const SelectProductHeader = ({onClose, onCheckPress}: any) => {
  const handleXMarkPress = () => {
    if (onClose) {
      onClose();
    }
  };

  const handleCheckPress = () => {
    if (onCheckPress) {
      onCheckPress();
    }
  };

  return (
    <CardContainer padding={5} style={styles.container} backgroundColor="white">
      <IconContainer onPress={handleXMarkPress} padding={5}>
        <FontAwesomeIcon icon={faXmark} color="black" size={22} />
      </IconContainer>
      <View style={styles.textContainer}>
        <Text style={styles.titleStyle}>Select</Text>
      </View>
      <TouchableOpacity onPress={handleCheckPress}>
        <IconContainer padding={5} marginRight={5}>
          <FontAwesomeIcon icon={faCheck} color="black" size={22} />
        </IconContainer>
      </TouchableOpacity>
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

export default SelectProductHeader;
