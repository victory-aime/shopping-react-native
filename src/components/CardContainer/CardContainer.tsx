import {View} from 'react-native';
import React, {ReactNode} from 'react';

interface CardContainerProps {
  backgroundColor: string;
  padding?: number;
  margin?: number;
  borderRadius?: number;
  width?: number;
  height?: number;
  children?: ReactNode;
}

const CardContainer: React.FC<CardContainerProps> = ({
  backgroundColor,
  padding,
  margin,
  borderRadius,
  width,
  height,
  children,
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
      }}>
      {children}
    </View>
  );
};

export default CardContainer;
