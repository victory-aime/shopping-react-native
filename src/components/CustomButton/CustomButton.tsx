import React from 'react';
import {StyleSheet, TouchableOpacity, Text} from 'react-native';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {IconProp} from '@fortawesome/fontawesome-svg-core';

interface CustomButtonProps {
  onPress: () => void;
  label: string;
  backgroundColor: string;
  textColor: string;
  disabled?: boolean;
  icon?: IconProp | null;
}

const CustomButton: React.FC<CustomButtonProps> = ({
  onPress,
  label,
  backgroundColor,
  textColor,
  disabled,
  icon,
}) => {
  return (
    <TouchableOpacity
      style={[styles.customButton, {backgroundColor}]}
      onPress={onPress}
      disabled={disabled}>
      {icon && (
        <FontAwesomeIcon
          icon={icon}
          size={20}
          color={textColor}
          style={styles.icon}
        />
      )}
      <Text style={[styles.buttonText, {color: textColor}]}>{label}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  customButton: {
    display: 'flex',
    flexDirection: 'row',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    marginTop: 30,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    fontSize: 18,
    textAlign: 'center',
    fontWeight: 'bold',
    fontFamily: 'Inter',
  },
  icon: {
    marginRight: 10,
  },
});

export default CustomButton;
