import React from 'react';
import {StyleSheet, TouchableOpacity, Text} from 'react-native';

interface CustomButtonProps {
  onPress: () => void;
  label: string;
  backgroundColor: string;
  textColor: string;
  disabled?: boolean;
}

const CustomButton: React.FC<CustomButtonProps> = ({
  onPress,
  label,
  backgroundColor,
  textColor,
  disabled,
}) => {
  return (
    <TouchableOpacity
      style={[styles.customButton, {backgroundColor}]}
      onPress={onPress}
      disabled={disabled}>
      <Text style={[styles.buttonText, {color: textColor}]}>{label}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  customButton: {
    display: 'flex',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    marginTop: 30,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  buttonText: {
    fontSize: 18,
    textAlign: 'center',
    fontWeight: 'bold',
    minHeight: 30,
    fontFamily: 'Inter',
  },
});

export default CustomButton;
