import {View, ViewStyle, StyleProp} from 'react-native';
import React, {ReactNode} from 'react';

interface IconContainerProps {
  backgroundColor: string;
  padding?: number;
  margin?: number;
  borderRadius?: number;
  width?: number;
  height?: number;
  alignItems?: ViewStyle['alignItems'];
  justifyContent?: ViewStyle['justifyContent'];
  marginRight?: number;
  marginLeft?: number;
  children?: ReactNode;
  style?: StyleProp<ViewStyle & React.CSSProperties>;
}

const IconContainer: React.FC<IconContainerProps> = ({
  backgroundColor,
  padding,
  margin,
  borderRadius,
  width,
  height,
  alignItems,
  justifyContent,
  marginRight,
  marginLeft,
  children,
  style,
}) => {
  return (
    <View
      style={{
        backgroundColor,
        padding,
        margin,
        borderRadius,
        width,
        height,
        marginRight,
        marginLeft,
        alignItems,
        justifyContent,
        ...(style as object),
      }}>
      {children}
    </View>
  );
};

export default IconContainer;
