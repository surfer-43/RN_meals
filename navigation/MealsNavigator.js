import React from 'react';
import { Platform } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import CategoriesScreen from '../screens/CategoriesScreen';
import CategoryMealsScreen from '../screens/CategoryMealsScreen';
import MealDetailsScreen from '../screens/MealDetailsScreen';
import FavoritesScreen from '../screens/FavoritesScreen';

import Colors from '../constants/colors';

const Stack = createStackNavigator();
const Tabs = createBottomTabNavigator();

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
      <Tabs.Navigator>
        <Tabs.Screen name='Meals' component={MealsNavigator} />
        <Tabs.Screen name="Favs" component={FavoritesScreen} />
      </Tabs.Navigator>
    </NavigationContainer>
  )
}

export default TabsNavigator;