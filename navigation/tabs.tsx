import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Home, Recipe } from '../screens';
import { icons } from '../constants';
import { TabIcon } from '../components';

export type RootStackParamList = {
  Home: undefined;
  Recipe: { recipe: any };
  Login: undefined;
};

const Tab = createBottomTabNavigator();

const Tabs = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarShowLabel: false,
        headerShown: false,
      }}
    >
      <Tab.Screen
        name="Homes"
        component={Home}
        options={{
          tabBarIcon: ({ focused }: any) => <TabIcon focused={focused} icon={icons.home} />,
        }}
      />
      <Tab.Screen
        name="Search"
        component={Home}
        options={{
          tabBarIcon: ({ focused }: any) => <TabIcon focused={focused} icon={icons.search} />,
        }}
      />
      <Tab.Screen
        name="Bookmark"
        component={Home}
        options={{
          tabBarIcon: ({ focused }: any) => <TabIcon focused={focused} icon={icons.bookmark} />,
        }}
      />
      <Tab.Screen
        name="Settings"
        component={Home}
        options={{
          tabBarIcon: ({ focused }: any) => <TabIcon focused={focused} icon={icons.settings} />,
        }}
      />
    </Tab.Navigator>
  );
};

export default Tabs;
