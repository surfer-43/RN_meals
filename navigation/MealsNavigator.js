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

const Stack = createStackNavigator();
const Tabs = Platform.OS === "android"? createMaterialBottomTabNavigator() : createBottomTabNavigator();

const MealsNavigator = (props) => {
  return (
    <Stack.Navigator 
      initialRouteName="CategoriesScreen"
      screenOptions={{headerStyle: {
          backgroundColor: Platform.OS === 'android' ? Colors.primaryColor : "white",
        },
        headerTintColor:  Platform.OS === 'android' ? '#fff' : Colors.primaryColor,
        headerTitleStyle: {
          fontWeight: 'bold',
        },}}
    >
      <Stack.Screen 
      name="CategoriesScreen" 
      component={CategoriesScreen} 
      options={{
        title: 'Meal Categories',
      }}
      />
      <Stack.Screen 
      name="CategoryMealsScreen" 
      component={CategoryMealsScreen} 
      options={{
        title: 'Meal Screen',
      }}
      />
      <Stack.Screen 
      name="MealDetailsScreen" 
      component={MealDetailsScreen} 
      options={{
        title: 'Details Screen',
      }}
      />
    </Stack.Navigator>
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
              console.log("we are working with the meals tab");
              iconName = focused
                ? 'ios-restaurant'
                : 'ios-restaurant';
            } else if (route.name === 'Favs') {
              console.log("we are dealing with the favourites tab styles")
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
          component={FavoritesScreen} 
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