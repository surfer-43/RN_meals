import React from 'react';
import { Platform } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs'
import { Ionicons } from '@expo/vector-icons';

import CategoriesScreen from '../screens/CategoriesScreen';
import CategoryMealsScreen from '../screens/CategoryMealsScreen';
import MealDetailsScreen from '../screens/MealDetailsScreen';
import FavoritesScreen from '../screens/FavoritesScreen';

import Colors from '../constants/colors';

const Meals = createStackNavigator();
const Favs = createStackNavigator();
const Tabs = Platform.OS === "android"? createMaterialBottomTabNavigator() : createBottomTabNavigator();

const defaultStackNavOptions = {
  headerStyle: {
    backgroundColor: Platform.OS === 'android' ? Colors.primaryColor : "white",
  },
  headerTintColor:  Platform.OS === 'android' ? '#fff' : Colors.primaryColor,
  headerTitleStyle: {
    fontWeight: 'bold',
  },
};

const MealsNavigator = (props) => {
  return (
    <Meals.Navigator 
      initialRouteName="CategoriesScreen"
      screenOptions={ defaultStackNavOptions }
    >
      <Meals.Screen 
        name="CategoriesScreen" 
        component={CategoriesScreen} 
        options={{
          title: 'Meal Categories',
        }}
      />
      <Meals.Screen 
        name="CategoryMealsScreen" 
        component={CategoryMealsScreen} 
        options={{
          title: 'Meal Screen',
        }}
      />
      <Meals.Screen 
        name="MealDetailsScreen" 
        component={MealDetailsScreen} 
        options={{
          title: 'Details Screen',
        }}
      />
    </Meals.Navigator>
  )
}

const FavsNavigator = (props) => {
  return (
    <Favs.Navigator
      initialRouteName="CategoriesScreen"
      screenOptions={ defaultStackNavOptions }
    >
      <Meals.Screen 
        name="FavoritesScreen" 
        component={FavoritesScreen} 
        options={{
          title: 'Favorite Meals Screen',
        }}
      />
      <Meals.Screen 
        name="MealDetailsScreen" 
        component={MealDetailsScreen} 
        options={{
          title: 'Details Screen',
        }}
      />
    </Favs.Navigator>
  )
}

const TabsNavigator = (props) => {
  return (
    <NavigationContainer>
      <Tabs.Navigator
        shifting={true}
        // barStyle={{ backgroundColor: Colors.androidTabColor }}
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === 'Meals') {
              iconName = focused
                ? 'ios-restaurant'
                : 'ios-restaurant';
            } else if (route.name === 'Favs') {
              iconName = focused ? 'ios-star' : 'ios-star-outline';
            }

            // You can return any component that you like here!
            return <Ionicons name={iconName} size={size} color={color} />;
          },
        })}
        tabBarOptions={{
          activeTintColor: Colors.highlightColor,
          inactiveTintColor: 'gray',
        }}
        activeColor={Colors.highlightColor}
        inactiveColor= 'grey'

      >
        <Tabs.Screen 
          name='Meals' 
          component={MealsNavigator}
          options={{
            tabBarColor: Colors.secondaryColor
          }}
        />
        <Tabs.Screen 
          name="Favs" 
          component={FavsNavigator} 
          /**
           * use these options to over-ride the default settings in the tabbar
           * screen options
           */
          options={{
            tabBarLabel: 'FAVORITES!!',
            tabBarColor: Colors.androidColor
          }}
        />
      </Tabs.Navigator>
    </NavigationContainer>
  )
}

export default TabsNavigator;