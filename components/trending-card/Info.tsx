import { BlurView } from '@react-native-community/blur';
import React from 'react';
import { StyleSheet, Text, View, Platform } from 'react-native';
import { COLORS, FONTS, SIZES } from '../../constants';
import InfoDetail from './InfoDetail';

const styles = StyleSheet.create({
  cardInfo: {
    position: 'absolute',
    bottom: 10,
    left: 10,
    right: 10,
    height: 100,
    paddingVertical: SIZES.radius,
    paddingHorizontal: SIZES.base,
    borderRadius: SIZES.radius,
  },
});

const Info = ({ name, isBookmark, duration, serving }: any) => {
  if (Platform.OS === 'ios') {
    return (
      <BlurView blurType="dark" style={styles.cardInfo}>
        <InfoDetail name={name} isBookmark={isBookmark} duration={duration} serving={serving} />
      </BlurView>
    );
  }

  return (
    <View
      style={{
        ...styles.cardInfo,
        backgroundColor: COLORS.transparentDarkGray,
      }}
    >
      <InfoDetail name={name} isBookmark={isBookmark} duration={duration} serving={serving} />
    </View>
  );
};

export default Info;
