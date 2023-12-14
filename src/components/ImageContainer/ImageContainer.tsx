import {StyleProp, View, ViewStyle} from 'react-native';
import React, {ReactNode} from 'react';

interface ImageContainerProps {
  backgroundColor?: string;
  padding?: number;
  margin?: number;
  borderRadius?: number;
  width?: number;
  height?: number;
  children?: ReactNode;
  style?: StyleProp<ViewStyle & React.CSSProperties>;
}

const ImageContainer: React.FC<ImageContainerProps> = ({
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

export default ImageContainer;
