import React from 'react';
import { Text, View } from 'react-native';
import { COLORS, FONTS, SIZES } from '../../constants';

const Label = ({ category }: any) => {
  return (
    <View
      style={{
        position: 'absolute',
        top: 20,
        left: 15,
        paddingHorizontal: SIZES.radius,
        paddingVertical: 5,
        backgroundColor: COLORS.transparentGray,
        borderRadius: SIZES.radius,
      }}
    >
      <Text
        style={{
          color: COLORS.white,
          ...FONTS.h4,
        }}
      >
        {category}
      </Text>
    </View>
  );
};

export default Label;
