import React from 'react';
import { Text, TouchableOpacity } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { COLORS, FONTS } from '../constants';

const CustomButton = ({ buttonText, buttonContainerStyle, colors, onPress }: any) => {
  if (colors.length) {
    return (
      <TouchableOpacity onPress={onPress}>
        <LinearGradient
          start={{ x: 0, y: 0 }}
          end={{ x: 0, y: 1 }}
          colors={colors}
          style={{
            ...buttonContainerStyle,
          }}
        >
          <Text
            style={{
              textAlign: 'center',
              color: COLORS.white,
              ...FONTS.h3,
            }}
          >
            {buttonText}
          </Text>
        </LinearGradient>
      </TouchableOpacity>
    );
  }

  return (
    <TouchableOpacity onPress={onPress}>
      <Text
        style={{
          textAlign: 'center',
          color: 'red',
          ...FONTS.h3,
          ...buttonContainerStyle,
        }}
      >
        {buttonText}
      </Text>
    </TouchableOpacity>
  );
};

export default CustomButton;
