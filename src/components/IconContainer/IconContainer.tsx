import {View, ViewStyle, StyleProp, TouchableOpacity} from 'react-native';
import React, {ReactNode} from 'react';

interface IconContainerProps {
  backgroundColor?: string;
  padding?: number;
  margin?: number;
  borderRadius?: number;
  width?: number;
  height?: number;
  alignItems?: ViewStyle['alignItems'];
  justifyContent?: ViewStyle['justifyContent'];
  marginRight?: number;
  marginLeft?: number;
  onPress?: () => void;
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
  onPress,
  children,
  style,
}) => {
  const ContainerComponent = onPress ? TouchableOpacity : View;

  return (
    <ContainerComponent
      onPress={onPress}
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
    </ContainerComponent>
  );
};

export default IconContainer;
