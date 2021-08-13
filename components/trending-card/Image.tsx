import React from 'react';
import { Image } from 'react-native';
import { SIZES } from '../../constants';

const BgImage = ({ image }: any) => {
  return (
    <Image
      source={image}
      resizeMode="cover"
      style={{
        width: 250,
        height: 350,
        borderRadius: SIZES.radius,
      }}
    />
  );
};

export default BgImage;
