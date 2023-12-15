import React, {ReactNode} from 'react';
import {
  StyleSheet,
  TouchableOpacity,
  Text,
  ViewStyle,
  StyleProp,
  TextStyle,
} from 'react-native';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {IconProp} from '@fortawesome/fontawesome-svg-core';

interface CustomButtonProps {
  onPress?: () => void;
  backgroundColor?: string;
  textColor?: string;
  disabled?: boolean;
  icon?: IconProp | null;
  children?: ReactNode;
  style?: StyleProp<ViewStyle & React.CSSProperties>;
  textStyles?: StyleProp<TextStyle>;
}

const CustomButton: React.FC<CustomButtonProps> = ({
  onPress,
  backgroundColor,
  textColor,
  disabled,
  icon,
  style,
  children,
  textStyles,
}) => {
  const containerStyle = [
    styles.customButton,
    backgroundColor && {backgroundColor},
    style && (Array.isArray(style) ? style : [style]),
  ];

  return (
    <TouchableOpacity
      style={containerStyle}
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
      <Text style={[styles.buttonText, {color: textColor}, textStyles]}>
        {children}
      </Text>
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

    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#5775CD',
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
