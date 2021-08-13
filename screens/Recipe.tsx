import { BlurView } from '@react-native-community/blur';
import { RouteProp } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import React, { useState, useRef } from 'react';
import { useEffect } from 'react';
import { View, Text, Animated, Image, Platform, TouchableOpacity } from 'react-native';
import { images, COLORS, SIZES, FONTS, dummyData, icons } from '../constants';
import { RootStackParamList } from '../navigation/tabs';

type RecipeScreenRouteProp = RouteProp<RootStackParamList, 'Recipe'>;
type RecipeScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Recipe'>;

type Props = {
  route: RecipeScreenRouteProp;
  navigation: RecipeScreenNavigationProp;
};

const Recipe = ({ navigation, route }: Props) => {
  const [selectRecipe, setSelectRecipe] = useState<any>(null);
  const scrollY = useRef(new Animated.Value(0)).current;
  const HEADER_HEIGHT = 350;

  useEffect(() => {
    let { recipe } = route.params;
    setSelectRecipe(recipe);
  }, []);

  const renderHeaderBar = () => {
    return (
      <View
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          height: 90,
          flexDirection: 'row',
          alignItems: 'flex-end',
          justifyContent: 'space-between',
          paddingHorizontal: SIZES.padding,
        }}
      >
        {/* back button */}
        <TouchableOpacity
          style={{
            alignItems: 'center',
            justifyContent: 'center',
            width: 35,
            height: 35,
            borderRadius: 18,
            borderWidth: 1,
            borderColor: COLORS.lightGray,
            backgroundColor: COLORS.transparentBlack5,
          }}
          onPress={() => navigation.goBack()}
        >
          <Image
            source={icons.back}
            style={{
              width: 15,
              height: 15,
              tintColor: COLORS.lightGray,
            }}
          />
        </TouchableOpacity>

        {/* bookmark button */}
        <TouchableOpacity
          style={{
            alignItems: 'center',
            justifyContent: 'center',
            width: 35,
            height: 35,
          }}
          onPress={() => navigation.goBack()}
        >
          <Image
            source={selectRecipe?.isBookmark ? icons.bookmarkFilled : icons.bookmark}
            style={{
              width: 30,
              height: 30,
            }}
          />
        </TouchableOpacity>
      </View>
    );
  };

  const RecipeCardDetail = ({ selectRecipe }: any) => {
    return (
      <View
        style={{
          flex: 1,
          flexDirection: 'row',
          alignItems: 'center',
        }}
      >
        <View
          style={{
            width: 40,
            height: 40,
            marginLeft: 20,
          }}
        >
          <Image
            source={selectRecipe?.author.profilePic}
            style={{
              width: 40,
              height: 40,
              borderRadius: 20,
            }}
          />
        </View>
        <View
          style={{
            flex: 1,
            marginHorizontal: 20,
          }}
        >
          <Text
            style={{
              color: COLORS.lightGray2,
              ...FONTS.body4,
            }}
          >
            Recipe By:
          </Text>

          <Text
            style={{
              color: COLORS.white2,
              ...FONTS.h3,
            }}
          >
            {selectRecipe?.author.name}
          </Text>
        </View>

        <TouchableOpacity
          style={{
            width: 30,
            height: 30,
            alignItems: 'center',
            justifyContent: 'center',
            marginRight: 20,
            borderRadius: 5,
            borderWidth: 1,
            borderColor: COLORS.lightGreen,
          }}
          onPress={() => console.log('view profile')}
        >
          <Image
            source={icons.rightArrow}
            style={{
              width: 15,
              height: 15,
              tintColor: COLORS.lightGreen,
            }}
          />
        </TouchableOpacity>
      </View>
    );
  };

  const RecipeCreatorCardInfo = ({ selectRecipe }: any) => {
    if (Platform.OS === 'ios') {
      return (
        <BlurView
          style={{
            flex: 1,
            borderRadius: SIZES.radius,
          }}
          blurType="dark"
        >
          <RecipeCardDetail selectRecipe={selectRecipe} />
        </BlurView>
      );
    }

    return (
      <View
        style={{
          flex: 1,
          borderRadius: SIZES.radius,
          backgroundColor: COLORS.transparentBlack9,
        }}
      >
        <RecipeCardDetail selectRecipe={selectRecipe} />
      </View>
    );
  };

  const renderRecipeCardHeader = () => {
    return (
      <View
        style={{
          marginTop: -1000,
          paddingTop: 1000,
          alignItems: 'center',
          overflow: 'hidden',
        }}
      >
        <Animated.Image
          source={selectRecipe?.image}
          resizeMode="contain"
          style={{
            height: HEADER_HEIGHT,
            width: '200%',
            transform: [
              {
                translateY: scrollY.interpolate({
                  inputRange: [-HEADER_HEIGHT, 0, HEADER_HEIGHT],
                  outputRange: [-HEADER_HEIGHT / 2, 0, HEADER_HEIGHT * 0.75],
                }),
                // scale: scrollY.interpolate({
                //   inputRange: [-HEADER_HEIGHT, 0, HEADER_HEIGHT],
                //   outputRange: [2, 1, 0.75],
                // }),
              },
            ],
          }}
        />
        <Animated.View
          style={{
            position: 'absolute',
            bottom: 10,
            left: 30,
            right: 30,
            height: 80,
            transform: [
              {
                translateY: scrollY.interpolate({
                  inputRange: [0, 170, 250],
                  outputRange: [0, 0, 100],
                  extrapolate: 'clamp',
                }),
              },
            ],
          }}
        >
          <RecipeCreatorCardInfo selectRecipe={selectRecipe} />
        </Animated.View>
      </View>
    );
  };

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: COLORS.white,
      }}
    >
      <Animated.FlatList
        data={selectRecipe?.ingredients}
        keyExtractor={(item) => `${item.id}`}
        showsVerticalScrollIndicator={false}
        ListHeaderComponent={<View>{renderRecipeCardHeader()}</View>}
        scrollEventThrottle={16}
        onScroll={Animated.event([{ nativeEvent: { contentOffset: { y: scrollY } } }], {
          useNativeDriver: true,
        })}
        renderItem={({ item }) => {
          return (
            <View
              style={{
                flexDirection: 'row',
                paddingHorizontal: 30,
                marginVertical: 4,
              }}
            >
              <View
                style={{
                  alignItems: 'center',
                  justifyContent: 'center',
                  height: 50,
                  width: 50,
                  borderRadius: 5,
                  backgroundColor: COLORS.lightGray,
                }}
              >
                <Image
                  source={item.icon}
                  style={{
                    height: 40,
                    width: 40,
                  }}
                />
              </View>
              <View
                style={{
                  flex: 1,
                  paddingHorizontal: 20,
                  justifyContent: 'center',
                }}
              >
                <Text
                  style={{
                    ...FONTS.body3,
                  }}
                >
                  {item.description}
                </Text>
              </View>
              <View
                style={{
                  alignContent: 'flex-end',
                  justifyContent: 'center',
                }}
              >
                <Text
                  style={{
                    ...FONTS.body3,
                  }}
                >
                  {item.quantity}
                </Text>
              </View>
            </View>
          );
        }}
      />
      {/* header bar */}
      {renderHeaderBar()}
    </View>
  );
};

export default Recipe;
