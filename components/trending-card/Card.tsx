import React from 'react';
import { TouchableOpacity } from 'react-native';
import { SIZES } from '../../constants';
import BgImage from './Image';
import Info from './Info';
import Label from './Label';

const Card = ({ containerStyle, recipeItem, onPress }: any) => {
  return (
    <TouchableOpacity
      style={{
        height: 350,
        width: 250,
        marginTop: SIZES.radius,
        marginRight: 20,
        borderRadius: SIZES.radius,
        ...containerStyle,
      }}
      onPress={onPress}
    >
      <BgImage image={recipeItem.image} />
      <Label category={recipeItem.category} />
      <Info
        name={recipeItem.name}
        isBookmark={recipeItem.isBookmark}
        duration={recipeItem.duration}
        serving={recipeItem.serving}
      />
    </TouchableOpacity>
  );
};

export default Card;
