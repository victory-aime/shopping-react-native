import {StyleProp, View, ViewStyle} from 'react-native';
import React, {ReactNode} from 'react';

interface CardContainerProps {
  backgroundColor?: string;
  padding?: number;
  margin?: number;
  borderRadius?: number;
  width?: number;
  height?: number;
  children?: ReactNode;
  style?: StyleProp<ViewStyle & React.CSSProperties>;
}

const CardContainer: React.FC<CardContainerProps> = ({
  backgroundColor,
  padding,
  margin,
  borderRadius,
  width,
  height,
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
        ...(style as object),
      }}>
      {children}
    </View>
  );
};

export default CardContainer;
