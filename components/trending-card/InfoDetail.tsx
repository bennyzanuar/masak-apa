import React from 'react';
import { Text, View, Image } from 'react-native';
import { COLORS, FONTS, icons, SIZES } from '../../constants';

const InfoDetail = ({ name, isBookmark, duration, serving }: any) => {
  return (
    <View
      style={{
        flex: 1,
      }}
    >
      <View
        style={{
          flex: 1,
          flexDirection: 'row',
          justifyContent: 'space-between',
        }}
      >
        <Text
          style={{
            width: '70%',
            color: COLORS.white,
            ...FONTS.h3,
            fontSize: 18,
          }}
        >
          {name}
        </Text>
        <Image
          source={isBookmark ? icons.bookmarkFilled : icons.bookmark}
          style={{
            position: 'absolute',
            top: -8,
            right: 0,
            width: 20,
            height: 20,
            margin: SIZES.base,
          }}
        />
      </View>

      <Text
        style={{
          color: COLORS.lightGray,
          ...FONTS.body4,
        }}
      >
        {duration} | {serving} Serving
      </Text>
    </View>
  );
};

export default InfoDetail;
